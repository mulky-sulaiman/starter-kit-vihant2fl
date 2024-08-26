<?php

namespace App\Traits;

trait RedirectSession
{
    public $previous;

    public function initPrevious(string $page, string $route)
    {
        session()->forget('previous');
        session()->put('previous', ['page' => $page, 'route' => $route, 'url' => route($route)]);
    }

    public function setPrevious()
    {
        $this->previous = session('previous') ?? ['page' => 'index', 'route' => 'home', 'url' => route('home')];
    }
}
