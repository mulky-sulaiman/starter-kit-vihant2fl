<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\{AppConfigurator, RedirectSession};

class ResetIndexController extends Controller
{
    use AppConfigurator, RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if ($this->appEngine === 'inertia') {
            if ($this->authMode === 'direct') {
                return inertia()->render('Auth/Reset')->with([
                    'token' => $request->token,
                    'email' => $request->email,
                ]);
            } else {
                $this->setPrevious();
                return inertia()->modal('Auth/Reset')
                    ->with([
                        'token' => $request->token,
                        'email' => $request->email,
                    ])
                    ->baseRoute('home');
            }
        } else {
            return;
        }
    }
}
