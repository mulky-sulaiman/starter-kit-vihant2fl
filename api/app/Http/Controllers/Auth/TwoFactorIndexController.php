<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\{AppConfigurator, RedirectSession};

class TwoFactorIndexController extends Controller
{
    use AppConfigurator, RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if ($this->appEngine === 'inertia') {
            if ($this->authMode === 'direct') {
                return inertia()->render('Auth/TwoFactorEnable');
            } else {
                return inertia()->modal('Auth/TwoFactorEnable')->baseRoute('dashboard.account.security');
            }
        } else {
            return;
        }
    }
}
