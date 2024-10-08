<?php

use App\Enums\GenderEnum;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\{LoginIndexController, LogoutController, RegisterIndexController, RecoverIndexController, ResetIndexController, TwoFactorIndexController};
use App\Http\Controllers\Dashboard\IndexController as DashboardIndexController;
use App\Http\Controllers\Dashboard\Account\IndexController as AccountIndexController;
use App\Http\Controllers\Dashboard\Account\SecurityController;
use App\Http\Controllers\UserController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Public Routes
Route::get('/', HomeController::class)->name('home');

Route::resource('user', UserController::class);

Route::get('/@/{user:username}', [UserController::class, 'show'])->withTrashed(true)->name('profile.show');

// Test pages
Route::get('/test/form', function () {
    $genders = [
        ['label' => GenderEnum::MALE->label(), 'value' => GenderEnum::MALE->value],
        ['label' => GenderEnum::FEMALE->label(), 'value' => GenderEnum::FEMALE->value],
    ];
    return inertia()->render('Test/Form', compact('genders'));
})->name('test.form');

Route::get('/test/dashboard-grid', function () {
    return inertia()->render('Test/Dashboard/Grid');
})->name('test.dashboard-grid');

Route::get('/test/dashboard-flex', function () {
    return inertia()->render('Test/Dashboard/Flex');
})->name('test.dashboard-flex');

Route::get('/test/landing-grid', function () {
    return inertia()->render('Test/Landing/Grid');
})->name('test.landing-grid');

Route::get('/test/landing-flex', function () {
    return inertia()->render('Test/Landing/Flex');
})->name('test.landing-flex');

// Guest Routes
Route::middleware(['guest'])->group(function () {
    Route::prefix('/auth')->group(function () {
        Route::get('/login', LoginIndexController::class)->name('auth.login');
        if (Features::enabled(Features::registration())) {
            Route::get('/register', RegisterIndexController::class)->name('auth.register');
        }

        if (Features::enabled(Features::resetPasswords())) {
            Route::get('/recover', RecoverIndexController::class)->name('auth.recover');
            Route::get('/reset', ResetIndexController::class)->name('password.reset');
        }
    });
});

// Protected Routes

Route::middleware(['auth'])->group(function () {
    Route::prefix('/auth')->group(function () {
        Route::post('/logout', LogoutController::class)->name('auth.logout');
        if (Features::enabled(Features::twoFactorAuthentication())) {
            Route::get('/two-factor', TwoFactorIndexController::class)->name('auth.two-factor');
        }
    });
    Route::prefix('/dashboard')->group(function () {
        // ->middleware(RequirePassword::using(null, 1))
        Route::get('/', DashboardIndexController::class)->middleware(['verified', 'password.confirm'])->name('dashboard');
        Route::prefix('/account')->group(function () {
            Route::get('/', AccountIndexController::class)->name('dashboard.account.index');
            if (Features::hasSecurityFeatures()) {
                Route::get('/security', SecurityController::class)->name('dashboard.account.security');
            }
        });
    });
    Route::middleware(['verified', 'password.confirm'])->group(function () {
        Route::prefix('/admin')->group(function () {
            Route::get('/', DashboardIndexController::class)->name('admin');
        });
    });
});

// require __DIR__ . '/fortify.php';
