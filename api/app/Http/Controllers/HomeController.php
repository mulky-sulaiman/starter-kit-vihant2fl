<?php

namespace App\Http\Controllers;

use App\Traits\RedirectSession;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $this->initPrevious('index', 'home');
        return inertia()->render('Home');
    }
}
