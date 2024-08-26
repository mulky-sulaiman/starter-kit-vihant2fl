<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Traits\{AppConfigurator, RedirectSession};
use Illuminate\Http\Request;

class LoginIndexController extends Controller
{
    use AppConfigurator, RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if ($this->appEngine === 'inertia') {
            if ($this->authMode === 'direct') {
                return inertia()->render('Auth/Login');
            } else {
                $this->setPrevious();
                return inertia()->modal('Auth/Login')->baseRoute($this->previous['route']);
            }
        } else {
            return;
        }
    }
}
