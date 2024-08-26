<?php

namespace App\Http\Responses;

use App\Traits\RedirectSession;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Contracts\PasswordConfirmedResponse as PasswordConfirmedResponseContract;
use Laravel\Fortify\Fortify;

class PasswordConfirmedResponse implements PasswordConfirmedResponseContract
{
    use RedirectSession;
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return new JsonResponse('', 201);
        } else {
            $this->setPrevious();
            $redirect = (config('auth.mode', 'direct') === 'direct') ? Fortify::redirects('password-confirmation', $this->previous['url']) : Route::current()->uri();
            return redirect()->intended($redirect)->with('info', 'Password confirmed. Please continue.');
        }
    }
}
