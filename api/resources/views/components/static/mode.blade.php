@props(['mode' => 'livewire'])
<div class="fixed bottom-4 left-4">
    @if ($mode === 'livewire')
        <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
            class="flex items-center justify-center text-white bg-pink-400 border border-pink-400 rounded-full opacity-75 size-11 hover:bg-pink-500 hover:border-pink-500">
            <x-tabler-brand-livewire class="size-7 " />
        </div>
        <div id="tooltip-mode" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
            Livewire Mode
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    @elseif($mode === 'inertia')
        <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
            class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">
            <x-tabler-brand-vue class="size-7 " />
        </div>
        <div id="tooltip-mode" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
            Inertia Vue Mode
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    @elseif($mode === 'htmx')
        <div class="fixed bottom-4 left-4">
            <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
                class="flex items-center justify-center text-white border rounded-full opacity-75 bg-primary-600 border-primary-600 size-11 hover:bg-primary-700 hover:border-primary-700">
                <x-htmx-logo class="size-7" fill="currentColor" />
            </div>
            <div id="tooltip-mode" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
                HTMX Mode
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    @elseif($mode === 'nuxt')
        <div class="fixed bottom-4 left-4">
            <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
                class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">
                <x-tabler-brand-nuxt class="size-7 " />
            </div>
            <div id="tooltip-mode" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
                Nuxt Mode
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    @endif
</div>
