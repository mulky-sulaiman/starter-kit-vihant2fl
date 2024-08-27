<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr" class="scroll-smooth" x-data="$store.global">

<head>
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="{{ str_replace('_', '-', app()->getLocale()) }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="{{ config('app.name', 'VIFFLLHANT') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="asset-url" content="{{ config('app.asset_url') }}">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Inter:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>
    <script defer src="{{ asset('assets/js/store.js') }}"></script>
    <script defer src="{{ asset('assets/js/utils.js') }}"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>

    <title>{{ config('app.name', 'VIFFLLHANT') }}</title>

    @vite(['resources/css/app.css', 'resources/js/static.js'])
    @stack('styles')

</head>

<body class="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white">
    {{ $slot }}
    @stack('scripts')
    <x-static.noscript />
</body>

</html>
