@props(['mode' => 'vertical'])
<x-dynamic-component :component="'ui.speed-dial.'.$mode" />
