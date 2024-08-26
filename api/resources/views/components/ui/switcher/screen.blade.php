@props(['placement' => 'left'])
<div x-data="{
    isFullScreen: false,
    message: '{{ __('global.enter_fullscreen') }}',
    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        const doc = window.document;
        const docEl = doc.documentElement;

        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl
            .webkitRequestFullScreen || docEl.msRequestFullscreen;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc
            .msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc
            .msFullscreenElement) {
            requestFullScreen.call(docEl)
            this.message = '{{ __('global.exit_fullscreen') }}'
            new Audio('/assets/audio/maximize.mp3').play()
        } else {
            cancelFullScreen.call(doc);
            this.message = '{{ __('global.enter_fullscreen') }}'
            new Audio('/assets/audio/minimize.mp3').play()
        }
    }
}">
    <a href="#" x-on:click.prevent="toggleFullScreen()" data-tooltip-target="tooltip-screen-switcher"
        data-tooltip-placement="{{ $placement }}"
        class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">
        <x-tabler-maximize class="size-5" x-show="!isFullScreen" />
        <x-tabler-minimize class="size-5" x-show="isFullScreen" />
    </a>
    <div id="tooltip-screen-switcher" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        <span x-text="message"></span>
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</div>
