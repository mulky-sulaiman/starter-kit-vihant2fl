<?php

namespace App\Http\Controllers\Dashboard\Account;

use App\Enums\GenderEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $genders = [
            ['label' => GenderEnum::MALE->label(), 'value' => GenderEnum::MALE->value],
            ['label' => GenderEnum::FEMALE->label(), 'value' => GenderEnum::FEMALE->value],
        ];
        return inertia()->render('Dashboard/Account/Index', compact('genders'));
    }
}
