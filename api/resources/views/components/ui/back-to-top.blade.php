@props(['placement' => 'left'])
<div x-data="{ backToTop() { window.scrollTo({ top: 0, behavior: 'smooth' });
        new Audio('/assets/audio/scroll.mp3').play() } }">
    <a href="#" data-tooltip-target="tooltip-back-to-top" data-tooltip-placement="{{ $placement }}"
        x-on:click.prevent="backToTop()"
        class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">
        <x-tabler-arrow-up class="size-5 animate-bounce" />
    </a>
    <div id="tooltip-back-to-top" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        <span>{{ __('global.back_to_top') }}</span>
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</div>
