<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\RoutePath;
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\ConfirmablePasswordController;
use Laravel\Fortify\Http\Controllers\EmailVerificationPromptController;
use Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController;

// Password Confirmation...
Route::get(RoutePath::for('password.confirm', '/user/confirm-password'), [ConfirmablePasswordController::class, 'show'])
    ->middleware([config('fortify.auth_middleware', 'auth') . ':' . config('fortify.guard')]);

// Two Factor Login ...
if (Features::enabled(Features::twoFactorAuthentication())) {
    Route::get(RoutePath::for('two-factor.login', '/two-factor-challenge'), [TwoFactorAuthenticatedSessionController::class, 'create'])
        ->middleware(['guest:' . config('fortify.guard')])
        ->name('two-factor.login');
}

// Email Verification...
if (Features::enabled(Features::emailVerification())) {
    Route::get(RoutePath::for('verification.notice', '/email/verify'), [EmailVerificationPromptController::class, '__invoke'])
        ->middleware([config('fortify.auth_middleware', 'auth') . ':' . config('fortify.guard')])
        ->name('verification.notice');
}
