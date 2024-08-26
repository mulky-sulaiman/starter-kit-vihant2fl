// import './bootstrap'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
// import { ZiggyVue } from 'ziggy-js'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import { i18nVue } from 'laravel-vue-i18n'
import { createPinia } from 'pinia'
import LayoutsDefault from '@/Layouts/Default.vue'
import UIHead from '@/Components/UI/Head.vue'
import { modal } from "momentum-modal"
import { asset } from '@codinglabs/laravel-asset/asset.mjs'
import ClientOnly from '@/Components/ClientOnly.vue'

const appName = import.meta.env.VITE_APP_NAME || 'VIFFLLHANT'
const pinia = createPinia()

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        // title: (title) => title ? `${title} - ${appName}` : `${appName}`,
        title: (title) => title ? `${title}` : `${appName}`,
        resolve: (name) => {
            const page = resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob('./Pages/**/*.vue')
            );
            page.then((module) => {
                if (module.default.layout === undefined) {
                    module.default.layout = LayoutsDefault;
                }
            });
            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            })
                .use(i18nVue, {
                    lang: 'id',
                    resolve: lang => {
                        const langs = import.meta.glob('../../lang/*.json', { eager: true });
                        return langs[`../../lang/${lang}.json`].default;
                    },
                })
                .use(modal, {
                    resolve: (name) => {
                        const page = resolvePageComponent(
                            `./Modals/${name}.vue`,
                            import.meta.glob('./Modals/**/*.vue')
                        );
                        page.then((module) => {
                            if (module.default.layout === undefined) {
                                module.default.layout = LayoutsDefault;
                            }
                        });
                        return page;
                    }
                })
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(pinia)
                .use(plugin)
                .mixin({
                    methods: {
                        asset,
                    },
                })
                .component("Link", Link)
                .component("Head", Head)
                .component("UIHead", UIHead)
                .component("ClientOnly", ClientOnly)
        },
        progress: {
            color: '#2299dd',
        },
    }),
)
