<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $locales = config('app.locales', ['en', 'id']);
        $locale = request('locale', app()->getLocale());
        // $headers = [
        //     'Content-Type' => 'application/json',
        //     'Access-Control-Allow-Origin' => '*',
        //     'Access-Control-Allow-Methods' => '*',
        // ];
        if (in_array($locale, $locales)) {
            $filePath = __DIR__ . '/../../../lang/php_' . $locale . '.json';
            return response()->file($filePath);
        } else {
            // return response(__('Not Found'), 404)->withHeaders($headers);
            return response()->json(__('Not Found'), 404);
        }
    }
}
