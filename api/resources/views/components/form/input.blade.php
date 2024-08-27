@props(['hasError' => false, 'isSuccess' => false])
@php
    $value = $attributes->get('value') ?? '';
@endphp
<div x-data="{ initial: @js($value), input: @js($value), error: @js($hasError), success: @js($isSuccess), dirty: false }" x-init="$watch('input', () => {
    (input !== initial) ? dirty = true: dirty = false
})">
    <input class="input" x-model="input"
        x-bind:class="{ 'is-dirty': dirty && !error, 'is-invalid': error, 'is-valid': success }"
        x-on:input="$dispatch('value-changed', $event.target.value)" {{ $attributes }} />
</div>
