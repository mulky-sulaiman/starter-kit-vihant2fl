<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Actions\Contracts\UpdatesUserProfilePhoto;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UpdateUserProfilePhoto implements UpdatesUserProfilePhoto
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  array<string, string>  $input
     */
    public function update(User $user, UploadedFile $file): void
    {
        if ($user->profile_photo_path) {
            if (Storage::disk('local')->exists('public/' . $user->profile_photo_path)) {
                Storage::disk('local')->delete('public/' . $user->profile_photo_path);
            }
        }

        $user->update([
            'profile_photo_path' => $file->storePublicly('profile-photos', ['disk' => 'public']),
        ]);
    }
}
