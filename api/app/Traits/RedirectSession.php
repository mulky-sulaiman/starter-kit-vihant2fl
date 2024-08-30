<?php

namespace App\Traits;

trait RedirectSession
{
    public $previous;

    public function initPrevious(string $page, string $route, array $parameters = [])
    {
        $_route = (!empty($parameters)) ? 'home' : $route;
        session()->forget('previous');
        session()->put('previous', ['page' => $page, 'route' => $_route, 'url' => route($route, $parameters)]);
    }

    public function setPrevious()
    {
        $this->previous = session('previous') ?? ['page' => 'index', 'route' => 'home', 'url' => route('home')];
    }
}
