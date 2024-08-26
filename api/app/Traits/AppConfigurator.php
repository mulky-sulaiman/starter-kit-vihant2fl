<?php

namespace App\Traits;

trait AppConfigurator
{
    public $appEngine;
    public $authMode;

    public function __construct()
    {
        $this->appEngine = config('app.engine', 'inertia');
        $this->authMode = config('auth.mode', 'direct');
    }
}
