<?php

namespace App\Actions\Fortify;

use App\Enums\GenderEnum;
use App\Models\User;
use App\Rules\AlphaDashDot;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\File;
use App\Actions\Contracts\{UpdatesUserProfilePhoto, UpdatesUserProfilePhotoHeader};

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    public function __construct(protected UpdatesUserProfilePhoto $updateUserProfilePhoto, protected UpdatesUserProfilePhotoHeader $updateUserProfilePhotoHeader) {}
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, array $input): void
    {
        Validator::make($input, [
            'photo' => [
                'nullable',
                File::types(['jpg', 'jpeg', 'png'])->max(5 * 1024),
            ],
            'photo_header' => [
                'nullable',
                File::types(['jpg', 'jpeg', 'png'])->max(5 * 1024),
            ],
            'first_name' => ['nullable', 'string', 'max:255'],
            'last_name' => ['nullable', 'string', 'max:255'],
            'username' => ['nullable', 'string', 'min:3', 'max:50', new AlphaDashDot(), 'unique:users,username,' . $user->id],
            'email' => [
                'nullable',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($user->id),
            ],
            //'password' => $this->passwordRules(),
            'gender' => ['nullable', 'string', 'in:' . GenderEnum::MALE->value . ',' . GenderEnum::FEMALE->value],
            'phone' => ['nullable', 'digits_between:9,16', 'unique:users,phone,' . $user->id],
        ])->validate();

        if (request()->hasFile('photo')) {
            //dd($input['photo']);
            $this->updateUserProfilePhoto->update($user, $input['photo']);
        }

        if (request()->hasFile('photo_header')) {
            //dd($input['photo']);
            $this->updateUserProfilePhotoHeader->update($user, $input['photo_header']);
        }

        if (
            $input['email'] !== $user->email &&
            $user instanceof MustVerifyEmail
        ) {
            $this->updateVerifiedUser($user, $input);
        } else {
            $user->forceFill([
                'first_name' => $input['first_name'],
                'last_name' => $input['last_name'],
                'username' => Str::lower($input['username']),
                'email' => $input['email'],
                'gender' => Str::lower($input['gender']),
                'phone' => Str::replace(" ", "", Str::trim(Str::lower($input['phone']))),
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param  array<string, string>  $input
     */
    protected function updateVerifiedUser(User $user, array $input): void
    {
        $user->forceFill([
            'name' => $input['name'],
            'email' => $input['email'],
            'email_verified_at' => null,
        ])->save();

        $user->sendEmailVerificationNotification();
    }
}
