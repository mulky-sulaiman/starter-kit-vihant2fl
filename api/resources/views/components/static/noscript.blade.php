<noscript>
    {{-- <div
        style="position: fixed; top: 0px; left: 0px; z-index: 30000000; height: 100%; width: 100%; background-color: #FFFFFF">
        <div style="display: flex; justify-content: center; align-items: center; top: 50%; height: 100%;">
            <img src="{{ asset('assets/images/noscript.png') }}" />
        </div>
    </div> --}}
    <x-container-center class="h-screen">
        <x-ui.card :fullScreen="true">
            <div class="flex flex-col items-center justify-center min-h-screen gap-2 text-center">
                <div class="flex items-center justify-center gap-2">
                    <x-tabler-brand-html5 class="size-16" />
                    <x-tabler-plus class="size-10" />
                    <x-tabler-brand-javascript class="size-16" />
                </div>
                <p class="flex flex-col items-center justify-center gap-2">
                    <span class="font-semibold tracking-widest uppercase">Javascript is required to view this
                        page.</span>
                    <span>Please enable it in your browser.</span>
                </p>
            </div>
        </x-ui.card>
    </x-container-center>
</noscript>
