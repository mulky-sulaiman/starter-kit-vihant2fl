@props(['size' => 'sm', 'fullScreen' => false, 'title' => null])
@php
    $baseClasses =
        'p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800';
    $sizeClasses = ' w-' . $size . ' max-w-' . $size;
    $fullScreenClasses = $fullScreen ? ' fixed top-0 left-0 z-50 min-w-full min-h-full' : '';

@endphp
<div x-data="{ size: @js($size), fullScreen: @js($fullScreen), title: @js($title), baseClasses: @js($baseClasses), sizeClasses: @js($sizeClasses), fullScreenClasses: @js($fullScreenClasses) }" x-bind:class="{ baseClasses, sizeClasses, fullScreenClasses }"
    {{ $attributes->merge(['class' => $baseClasses . $sizeClasses . $fullScreenClasses]) }}>
    @if ($title)
        <template x-if="title">
            <h3 class="mb-4 text-xl font-semibold dark:text-white" x-text="title"></h3>
        </template>
    @endif
    {{ $slot }}
</div>
