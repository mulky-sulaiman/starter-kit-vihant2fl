import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Dashboard-C2kZcZwD.js";
import "./ApplicationLogo-gwkZfrAE.js";
import "../ssr.js";
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
import "./Guest-SYZpduF2.js";
import "@iconify/vue/dist/iconify.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ pageTitle: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIHead, {
              title: _ctx.$t("global.dashboard"),
              description: _ctx.$t("global.dashboard")
            }, null, _parent2, _scopeId));
            _push2(`<section${_scopeId}><div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16"${_scopeId}><div x-data="{ open: false }"${_scopeId}><button x-on:click.prevent="open = !open"${_scopeId}>Dashboard</button><div x-show="open" x-transition${_scopeId}> Hello 👋 </div></div></div></section>`);
          } else {
            return [
              createVNode(_component_UIHead, {
                title: _ctx.$t("global.dashboard"),
                description: _ctx.$t("global.dashboard")
              }, null, 8, ["title", "description"]),
              createVNode("section", null, [
                createVNode("div", { class: "max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16" }, [
                  createVNode("div", { "x-data": "{ open: false }" }, [
                    createVNode("button", { "x-on:click.prevent": "open = !open" }, "Dashboard"),
                    createVNode("div", {
                      "x-show": "open",
                      "x-transition": ""
                    }, " Hello 👋 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
