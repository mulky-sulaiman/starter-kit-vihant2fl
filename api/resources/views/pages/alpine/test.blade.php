@props(['name' => 'Nursimekkk'])
<?php

use function Laravel\Folio\name;

name('alpine.test');
?>
<x-layouts.default>
    <x-form.input id="name" name="name" value="{{ $name }}" :is-success="true"
        x-on:value-changed="console.log($el.value)" />
</x-layouts.default>
