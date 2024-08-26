<?php

namespace App\Http\Controllers\Dashboard\Account;

use App\Http\Controllers\Controller;
use App\Traits\RedirectSession;
use Illuminate\Http\Request;

class SecurityController extends Controller
{
    use RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $this->initPrevious('dashboard.account.security', 'dashboard.account.security');
        return inertia()->render('Dashboard/Account/Security');
    }
}
