<?php

namespace App\Actions\Fortify;

use App\Enums\GenderEnum;
use App\Models\User;
use App\Rules\AlphaDashDot;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Illuminate\Support\Str;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['nullable', 'string', 'max:255'],
            'username' => ['required', 'string', 'min:3', 'max:50', new AlphaDashDot(), 'unique:users,username'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'gender' => ['nullable', 'string', 'in:' . GenderEnum::MALE->value . ',' . GenderEnum::FEMALE->value],
            'phone' => ['nullable', 'digits_between:9,16', 'unique:users,phone'],
        ])->validate();

        return User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'username' => Str::lower($input['username']),
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'gender' => Str::lower($input['gender']),
            'phone' => Str::replace(" ", "", Str::trim(Str::lower($input['phone']))),

        ]);
    }
}
