<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Illuminate\Contracts\Auth\StatefulGuard;


class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Login Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\LoginResponse::class,
            \App\Http\Responses\LoginResponse::class,
        );

        // Two Factor Login Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\TwoFactorLoginResponse::class,
            \App\Http\Responses\TwoFactorLoginResponse::class,
        );

        // Logout Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\LogoutResponse::class,
            \App\Http\Responses\LogoutResponse::class,
        );

        // Profile Information Updated Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\ProfileInformationUpdatedResponse::class,
            \App\Http\Responses\ProfileInformationUpdatedResponse::class,
        );

        // Update Profile Photo
        $this->app->singleton(
            \App\Actions\Contracts\UpdatesUserProfilePhoto::class,
            \App\Actions\Fortify\UpdateUserProfilePhoto::class
        );

        // Update Profile Photo Header
        $this->app->singleton(
            \App\Actions\Contracts\UpdatesUserProfilePhotoHeader::class,
            \App\Actions\Fortify\UpdateUserProfilePhotoHeader::class
        );

        // Password Update Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\PasswordUpdateResponse::class,
            \App\Http\Responses\PasswordUpdateResponse::class
        );

        // Password Confirmation Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\PasswordConfirmedResponse::class,
            \App\Http\Responses\PasswordConfirmedResponse::class
        );

        // Email Verification Notification Sent Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\EmailVerificationNotificationSentResponse::class,
            \App\Http\Responses\EmailVerificationNotificationSentResponse::class
        );

        // Successful Password Reset Link Request Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\SuccessfulPasswordResetLinkRequestResponse::class,
            \App\Http\Responses\SuccessfulPasswordResetLinkRequestResponse::class
        );

        // Password Reset Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\PasswordResetResponse::class,
            \App\Http\Responses\PasswordResetResponse::class
        );

        // Verify Email Response
        $this->app->singleton(
            \Laravel\Fortify\Contracts\VerifyEmailResponse::class,
            \App\Http\Responses\VerifyEmailResponse::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Authenticate : Login
        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->login)
                ->orWhere('username', $request->login)
                ->orWhere('phone', $request->login)
                ->first();

            if ($user && Hash::check($request->password, $user->password)) {
                return $user;
            }

            throw ValidationException::withMessages([
                Fortify::username() => [trans('auth.failed')],
            ]);
        });

        // Authenticate : Confirm Password
        Fortify::confirmPasswordsUsing(function (User $user, string $password) {
            if ($user && Hash::check($password, $user->password)) {
                return $user;
            }

            throw ValidationException::withMessages([
                'password' => [trans('auth.password')],
            ]);
        });

        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())) . '|' . $request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        if (config('app.engine', 'inertia') == 'inertia') {
            // Login View
            Fortify::loginView(function () {
                if (config('auth.mode', 'direct') === 'direct') {
                    return inertia()->render('Auth/Login');
                }
                return inertia()->modal('Auth/Login')
                    ->baseRoute('home');
            });

            // Confirm Password View
            Fortify::confirmPasswordView(function () {
                if (config('auth.mode', 'direct') === 'direct') {
                    return inertia()->render('Auth/ConfirmPassword');
                }
                return inertia()->modal('Auth/ConfirmPassword')
                    ->baseRoute('home');
            });

            // Two Factor Challenge View
            Fortify::twoFactorChallengeView(function () {
                if (config('auth.mode', 'direct') === 'direct') {
                    return inertia()->render('Auth/TwoFactorChallenge');
                }
                return inertia()->modal('Auth/TwoFactorChallenge')
                    ->baseRoute('home');
            });

            // Verify Email View
            Fortify::verifyEmailView(function () {
                if (config('auth.mode', 'direct') === 'direct') {
                    return inertia()->render('Auth/VerifyEmail');
                }
                return inertia()->modal('Auth/VerifyEmail')
                    ->baseRoute('home');
            });
        }

        // else {
        //     Fortify::viewPrefix('auth.');
        // }
    }
}
