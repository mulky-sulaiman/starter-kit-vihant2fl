<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Utils;


class HandleNotificationFlash
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $notification = (session()->has('_notification')) ? session()->get('_notification') : [];
        session()->flash('notification', Utils::handleFlash(config('app.notification', []), $notification));

        $banner = (session()->has('_banner')) ? session()->get('_banner') : [];
        session()->flash('banner', Utils::handleFlash(config('app.banner', []), $banner));

        return $next($request);
    }
}
