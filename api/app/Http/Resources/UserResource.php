<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function __construct($resource)
    {
        self::withoutWrapping();
        parent::__construct($resource);
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name ?? null,
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at ? Carbon::make($this->email_verified_at)->format('d-m-Y H:i:s') : null,
            'phone' => $this->phone ?? null,
            'gender' => $this->gender->value ?? null,
            'created_at' => $this->created_at ? Carbon::make($this->created_at)->format('d-m-Y H:i:s') : null,
            'updated_at' => $this->updated_at ? Carbon::make($this->updated_at)->format('d-m-Y H:i:s') : null,
            'avatar_url' => $this->avatarUrl(),
            'header_url' => $this->headerUrl(),
            'active' => $this->deleted_at ? false : true,
            'two_factor_enabled' => $this->hasEnabledTwoFactorAuthentication(),
            // 'two_factor_qr_code' => $this->two_factor_secret ? $this->twoFactorQrCodeSvg() : null,
            // 'two_factor_recovery_codes' => $this->two_factor_recovery_codes ? json_decode(decrypt($this->two_factor_recovery_codes)) : null,
        ];
    }
}
