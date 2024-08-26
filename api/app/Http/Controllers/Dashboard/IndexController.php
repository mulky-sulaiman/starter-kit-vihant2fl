<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Traits\RedirectSession;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    use RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $this->initPrevious('dashboard.index', 'dashboard');
        return inertia()->render('Dashboard/Index');
    }
}
