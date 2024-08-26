<div x-data="{ show: false, hover: false, toggle() { this.show = !this.show } }"
    class="fixed flex flex-col-reverse items-center gap-3 bottom-4 right-4 z-999 justify-items-center">
    <!-- Trigger -->
    <div>
        <a href="#" x-on:click.prevent="toggle()" x-bind:class="{ 'opacity-75': !hover }"
            x-on:mouseenter="hover=true" x-on:mouseleave="hover=false" x-on:keyup.escape="show=false"
            class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-11 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
            <x-tabler-settings class="size-9 animate-spin" x-show="!show" />
            <x-tabler-x class="size-9" x-show="show" />
        </a>
    </div>
    <!-- Menu -->
    <div class="flex flex-col items-center gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center"
        x-show="show" x-transition>
        <div>
            <!-- Back To Top -->
            <x-ui.back-to-top placement="left" />
        </div>
        <div>
            <!-- Language Switcher -->
            <x-ui.switcher.language mode="dropdown" placement="left" />
        </div>
        <div>
            <!-- Screen Switcher -->
            <x-ui.switcher.screen placement="left" />
        </div>
        <div>
            <!-- Theme Switcher -->
            <x-ui.switcher.theme placement="left" />
        </div>
    </div>
</div>
