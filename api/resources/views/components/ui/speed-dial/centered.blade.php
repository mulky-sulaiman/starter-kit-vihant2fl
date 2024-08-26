<div x-data="{ show: false, hover: false, toggleShow() { this.show = !this.show }, toggleHover() { this.hover = !this.hover } }">
    <!-- Trigger -->
    <div class="fixed flex items-center bottom-4 left-[50%] z-999 justify-items-center" x-show="!show">
        <a href="#" x-on:click.prevent="toggleShow()" x-bind:class="{ 'opacity-75': !hover }"
            x-on:mouseenter="hover = true" x-on:mouseleave="hover = false" x-on:keyup.escape="show = false"
            class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
            <x-tabler-settings class="size-5 animate-spin" />
        </a>
    </div>
    <!-- Menu -->
    <div class="fixed flex flex-row items-center bottom-4 left-[calc(50%-78px)] gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center"
        x-show="show">
        <div>
            <!-- Back To Top -->
            <x-ui.back-to-top placement="top" />
        </div>
        <div>
            <!-- Language Switcher -->
            <x-ui.switcher.language mode="dropdown" placement="top" />
        </div>
        <div>
            <!-- Trigger -->
            <a href="#" x-on:click.prevent="toggleShow()" x-bind:class="{ 'opacity-75': !hover }"
                x-on:mouseenter="hover = true" x-on:mouseleave="hover = false" x-on:keyup.escape="show = false"
                class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
                <x-tabler-x class="size-4" />
            </a>
        </div>
        <div>
            <!-- Screen Switcher -->
            <x-ui.switcher.screen placement="top" />
        </div>
        <div>
            <!-- Theme Switcher -->
            <x-ui.switcher.theme placement="top" />
        </div>
    </div>
</div>
