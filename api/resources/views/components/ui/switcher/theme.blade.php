@props(['placement' => 'left'])
<div x-data="{
    darkMode: $persist(false).as('dark_mode'),
    message: '',
    toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            this.darkMode = true
            this.message = '{{ __('global.switch_light') }}'
            new Audio('/assets/audio/dark.mp3').play()
        } else {
            this.darkMode = false
            this.message = '{{ __('global.switch_dark') }}'
            new Audio('/assets/audio/light.mp3').play()
        }
    }
}" x-init="if (document.documentElement.classList.contains('dark')) {
    darkMode = true;
    message = '{{ __('global.switch_light') }}';
} else {
    darkMode = false;
    message = '{{ __('global.switch_dark') }}';
}" data-tooltip-target="tooltip-theme-switcher"
    data-tooltip-placement="{{ $placement }}">
    <a href="#" x-on:click.prevent="toggleDarkMode()"
        class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">
        <x-tabler-moon class="size-5" x-show="!darkMode" />
        <x-tabler-sun class="size-5" x-show="darkMode" />
    </a>
    <div id="tooltip-theme-switcher" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        <span x-text="message"></span>
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</div>
