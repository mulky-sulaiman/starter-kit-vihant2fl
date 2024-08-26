<?php

namespace App\Http\Controllers\Auth;

use App\Enums\GenderEnum;
use App\Http\Controllers\Controller;
use App\Traits\{AppConfigurator, RedirectSession};
use Illuminate\Http\Request;

class RegisterIndexController extends Controller
{
    use AppConfigurator, RedirectSession;
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $genders = [
            ['label' => GenderEnum::MALE->label(), 'value' => GenderEnum::MALE->value],
            ['label' => GenderEnum::FEMALE->label(), 'value' => GenderEnum::FEMALE->value],
        ];

        if ($this->appEngine === 'inertia') {
            if ($this->authMode === 'direct') {
                return inertia()->render('Auth/Register', compact('genders'));
            } else {
                $this->setPrevious();
                return inertia()->modal('Auth/Register', compact('genders'))->baseRoute($this->previous['route']);
            }
        } else {
            return;
        }
    }
}
