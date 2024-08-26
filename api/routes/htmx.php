<?php

use Illuminate\Support\Facades\Route;

Route::view('dashboard', 'dashboard')
    ->name('dashboard')
    ->middleware(['auth', 'verified']);
