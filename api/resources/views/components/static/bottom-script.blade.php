@props(['mode' => 'livewire'])

@if ($mode == 'livewire')
    <!-- Livewire Components -->
    <livewire:loader />
    <livewire:modals.pop-up-modal />
    <livewire:modals.drawer-modal />
    {{-- <livewire:notifications.alert /> --}}
    {{-- <livewire:notifications.banner /> --}}
    @auth
        <livewire:modals.confirm-dialog-password-modal />
    @endauth
    {{-- <livewire:toast /> --}}

    <!-- Blade Components -->
    {{-- <x-toaster-hub /> --}}
    {{-- <x-ui.banner /> --}}
    <x-ui.notification.alert />
    <x-ui.notification.toast />
    <x-ui.speed-dial mode="vertical" />

    <x-ui.confirm-dialog />
    <x-static.mode mode="livewire" />
    @persist('noscript')
    <x-static.noscript />
    @endpersist('noscript')
@else
    <x-static.mode mode="inertia" />
    <x-static.noscript />
@endif
