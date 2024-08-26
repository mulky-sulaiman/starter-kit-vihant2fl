@props(['mode' => 'light'])
<div x-data="{ mode: '{{ $mode }}' }">
    <button type="button" data-dropdown-toggle="apps-dropdown" class="p-2 rounded-lg sm:flex"
        x-bind:class="{
            'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700': mode ==
                'light',
            'text-gray-200 rounded-lg hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700': mode ==
                'dark',
            'text-danger-700 rounded-lg hover:text-danger-800 hover:bg-gray-100 dark:text-danger-600 dark:hover:text-danger-300 dark:hover:bg-gray-700': mode ==
                'danger',
            'text-primary-700 rounded-lg hover:text-primary-800 hover:bg-gray-100 dark:text-primary-600 dark:hover:text-primary-300 dark:hover:bg-gray-700': mode ==
                'primary',
        }">
        <span class="sr-only">View notifications</span>

        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
            </path>
        </svg>
    </button>

    <div class="z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
        id="apps-dropdown"
        style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1648px, 65px);"
        data-popper-placement="bottom">
        <div
            class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {{ __('header.app_switcher') }}
        </div>
        <div class="grid grid-cols-3 gap-4 p-4">
            <!-- Home -->
            <x-ui.link :href="route('home')"
                class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                <x-tabler-home class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" />
                <div class="text-sm font-medium text-gray-900 dark:text-white">{{ __('header.home') }}</div>
            </x-ui.link>

            <x-ui.link :href="route('dashboard')"
                class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                <x-tabler-layout-dashboard class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" />
                <div class="text-sm font-medium text-gray-900 dark:text-white">{{ __('header.dashboard') }}</div>
            </x-ui.link>

            <x-ui.link :href="route('admin.index')"
                class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                <x-tabler-layout class="mx-auto mb-1 text-danger-700 w-7 h-7 dark:text-danger-400" />
                <div class="text-sm font-medium text-danger-700 dark:text-danger-400">{{ __('header.admin') }}</div>
            </x-ui.link>

        </div>
    </div>

</div>
