import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Dashboard-C2kZcZwD.js";
import { _ as _sfc_main$2 } from "./Index-CEb97h9L.js";
import _sfc_main$3 from "./ChangePasswordForm-CytQYQGy.js";
import _sfc_main$4 from "./TwoFactorForm-B5rxUHb1.js";
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
import "./Group-YEtAZUyF.js";
import "./Label-D1c1ZHt3.js";
import "./Message-99K0ToBB.js";
import "./Spinner-Cb6cLcOD.js";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Security",
  __ssrInlineRender: true,
  props: {
    breadCrumbs: {
      type: Object,
      default: {
        0: { label: "Account", link: "dashboard.account.index" },
        1: { label: "Security", link: "" }
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        pageTitle: _ctx.$t("global.security"),
        breadCrumbs: __props.breadCrumbs
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIHead, {
              title: _ctx.$t("global.security"),
              description: _ctx.$t("global.security")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "border-0 border-b border-gray-200 rounded-none dark:border-gray-700",
              size: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-6 gap-12"${_scopeId2}><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  if (_ctx.$page.props.features["update-passwords"]) {
                    _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  if (_ctx.$page.props.features["two-factor-authentication"]) {
                    _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-6 gap-12" }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        _ctx.$page.props.features["update-passwords"] ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        _ctx.$page.props.features["two-factor-authentication"] ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIHead, {
                title: _ctx.$t("global.security"),
                description: _ctx.$t("global.security")
              }, null, 8, ["title", "description"]),
              createVNode(_sfc_main$2, {
                class: "border-0 border-b border-gray-200 rounded-none dark:border-gray-700",
                size: "full"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-6 gap-12" }, [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      _ctx.$page.props.features["update-passwords"] ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      _ctx.$page.props.features["two-factor-authentication"] ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Account/Security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
