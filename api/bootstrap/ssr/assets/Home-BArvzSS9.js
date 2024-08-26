import { defineComponent, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { b as _sfc_main$1, u as useToastStore } from "../ssr.js";
import { _ as _sfc_main$2 } from "./Landing-BcQhyFzP.js";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@iconify/vue";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
import "./ApplicationLogo-gwkZfrAE.js";
import "./Guest-SYZpduF2.js";
import "@iconify/vue/dist/iconify.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: [_sfc_main$1, _sfc_main$2] },
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useToastStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("global.home"),
        description: _ctx.$t("global.home")
      }, null, _parent));
      _push(`<div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16"><div x-data="{ open: false }"><button x-on:click.prevent="open = !open">${ssrInterpolate(_ctx.$t("auth.failed"))}</button><div x-show="open" x-transition><a href="#" role="button">Hello 👋</a></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>Kintil</div>`);
          } else {
            return [
              createVNode("div", null, "Kintil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
