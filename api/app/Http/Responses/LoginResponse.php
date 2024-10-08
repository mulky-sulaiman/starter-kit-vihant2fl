<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Fortify;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $name = $request->user()->name;
        return $request->wantsJson()
            ? response()->json(['two_factor' => false])
            : redirect(Fortify::redirects('login'))->with('info', __('Welcome back, ') . ' ' . $name . '!');
    }
}
