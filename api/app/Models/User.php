<?php

namespace App\Models;

use App\Enums\GenderEnum;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Storage;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasApiTokens, TwoFactorAuthenticatable, SoftDeletes, HasUlids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'email',
        'password',
        'phone',
        'gender',
        'profile_photo_path',
        'profile_photo_header_path',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_qr_code',
        'two_factor_recovery_codes',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'first_name' => 'string',
            'last_name' => 'string',
            'name' => 'string',
            'username' => 'string',
            'email' => 'string',
            'phone' => 'string',
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'gender' => GenderEnum::class,
        ];
    }

    public function avatarUrl()
    {
        if ($this->profile_photo_path) {
            return Storage::disk('local')->url($this->profile_photo_path);
        }

        return "https://ui-avatars.com/api/?name=" . urlencode($this->name);
    }

    public function headerUrl()
    {
        if ($this->profile_photo_header_path) {
            return Storage::disk('local')->url($this->profile_photo_header_path);
        }

        return "https://picsum.photos/1280/720";
    }
}
