<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\PasswordResetResponse as PasswordResetResponseContract;
use Laravel\Fortify\Fortify;

class PasswordResetResponse implements PasswordResetResponseContract
{
    /**
     * The response status language key.
     *
     * @var string
     */
    protected $status;

    /**
     * Create a new response instance.
     *
     * @param  string  $status
     * @return void
     */
    public function __construct(string $status)
    {
        $this->status = $status;
    }

    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        // return redirect()->route('auth.login')->with('toast', 'Your password has been reset. You can now sign in.');
        // ori : redirect(Fortify::redirects('password-reset', config('fortify.views', true) ? route('login') : null))->with('status', trans($this->status))

        return $request->wantsJson()
            ? new JsonResponse(['message' => trans($this->status)], 200)
            : redirect()->route('auth.login')->with('info', 'Your password has been reset. You can now sign in.');
    }
}
