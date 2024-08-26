<?php

use Illuminate\Support\Facades\Route;

Route::post('/locale', function () {
    // Validate
    $validated = request()->validate([
        'language' => 'required|string|in:en,id',
    ]);
    // Put Locale into Session
    session()->put('locale', $validated['language']);
    // Response for force reload the locale
    // return new HtmxResponseClientRefresh();
    return redirect()->back();
})->name('set.language');

$app_engine = config('app.engine', 'inertia');
require __DIR__ . '/' . $app_engine . '.php';
