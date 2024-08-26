<?php

namespace App\Http\Middleware;

use App\Helpers\Utils;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Middleware;
use Laravel\Fortify\Features;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user() ? UserResource::make($request->user()) : null;
        $locale = app()->getLocale();
        // Notication Flashes Override
        $notification = Utils::handleFlash(config('app.notification'), $request->session()->get('notification'));
        $banner = Utils::handleFlash(config('app.banner'), $request->session()->get('banner'));

        return array_merge(parent::share($request), [
            'csrf_token' => csrf_token(),
            'auth' => [
                'user' => $user,
            ],
            'features' => collect(config('fortify.features'))->mapWithKeys(fn($key) => [$key => true])->merge([
                'security' => Features::hasSecurityFeatures(),
            ]),
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'route_name' => Route::currentRouteName(),
                'location' => $request->url(),
                'query' => $request->query()
            ],
            'config' => config()->get(['app.name', 'app.engine', 'auth.mode']),
            'locale' => $locale,
            'locales' => config('app.locales', ['id', 'en']),
            'flash' => [
                'notification' => $notification,
                'banner' => $banner,
                'message' => $request->session()->get('message'),
                'status' => $request->session()->get('status'),
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
                'warning' => $request->session()->get('warning'),
                'info' => $request->session()->get('info'),
            ],
            'previous' => session('previous') ?? ['page' => 'index', 'route' => 'home', 'url' => route('home')],
        ]);
    }
}
