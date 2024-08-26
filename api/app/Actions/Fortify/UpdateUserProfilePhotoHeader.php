<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Actions\Contracts\UpdatesUserProfilePhotoHeader;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UpdateUserProfilePhotoHeader implements UpdatesUserProfilePhotoHeader
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, UploadedFile $file): void
    {
        if ($user->profile_photo_header_path) {
            if (Storage::disk('local')->exists('public/' . $user->profile_photo_header_path)) {
                Storage::disk('local')->delete('public/' . $user->profile_photo_header_path);
            }
        }

        $user->update([
            'profile_photo_header_path' => $file->storePublicly('profile-photos/header', ['disk' => 'public']),
        ]);
    }
}
