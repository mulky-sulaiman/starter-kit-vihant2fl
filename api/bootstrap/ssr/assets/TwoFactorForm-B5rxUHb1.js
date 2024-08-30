import { defineComponent, computed, resolveComponent, mergeProps, unref, withCtx, renderSlot, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, useSSRContext, ref, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { r as randomID, u as useToastStore } from "../ssr.js";
import axios from "axios";
import { _ as _sfc_main$2 } from "./Label-D1c1ZHt3.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@iconify/vue";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const badgeClass = "font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "badge-" + randomID(15)
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "xs"
    },
    as: {
      type: String,
      default: "span"
    },
    href: {
      type: String,
      default: "#"
    },
    rounded: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const sizeClass = "text-" + props.size;
    const borderClass = computed(() => {
      return {
        true: "border border-" + props.type + "-400",
        false: ""
      }[props.border];
    });
    const roundedClass = props.rounded == null ? "rounded" : "rounded-" + props.rounded;
    const typeClass = "text-" + props.type + "-800 bg-" + props.type + "-100 dark:bg-" + props.type + "-900 dark:text-" + props.type + "-300 focus:ring-offset-2 focus:ring-4 focus:ring-" + props.type + "-300 focus:outline-none dark:focus:ring-" + props.type + "-800";
    const dismissableClass = "inline-flex items-center p-1 " + sizeClass + " text-" + props.type + "-400 bg-transparent " + roundedClass + " ms-2 hover:bg-" + props.type + "-200 hover:text-" + props.type + "-900 dark:hover:bg-" + props.type + "-800 dark:hover:text-" + props.type + "-300";
    const disabledClass = computed(() => {
      return {
        true: "!cursor-not-allowed opacity-50",
        false: ""
      }[props.disabled];
    });
    const hoverClass = "hover:bg-" + props.type + "-200";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      if (__props.as === "span") {
        _push(`<span${ssrRenderAttrs(mergeProps({
          id: __props.name,
          class: [badgeClass, sizeClass, typeClass, disabledClass.value, borderClass.value, unref(roundedClass)]
        }, _ctx.$attrs, { disabled: __props.disabled }))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (__props.dismissable) {
          _push(`<button type="button" class="${ssrRenderClass(dismissableClass)}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)} aria-label="{{ $t(&#39;global.close&#39;) }}"><svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">${ssrInterpolate(_ctx.$t("global.close"))}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.as === "a") {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          id: __props.name ?? null,
          class: [hoverClass, badgeClass, sizeClass, typeClass, disabledClass.value, borderClass.value, unref(roundedClass)]
        }, _ctx.$attrs, { disabled: __props.disabled }))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (__props.dismissable) {
          _push(`<button type="button" class="${ssrRenderClass(dismissableClass)}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)} aria-label="{{ $t(&#39;global.close&#39;) }}"><svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">${ssrInterpolate(_ctx.$t("global.close"))}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.as === "link") {
        _push(ssrRenderComponent(_component_Link, mergeProps({
          href: __props.href,
          id: __props.name ?? null,
          class: [hoverClass, badgeClass, sizeClass, typeClass, disabledClass.value, borderClass.value, unref(roundedClass)]
        }, _ctx.$attrs, { disabled: __props.disabled }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              if (__props.dismissable) {
                _push2(`<button type="button" class="${ssrRenderClass(dismissableClass)}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)} aria-label="{{ $t(&#39;global.close&#39;) }}"${_scopeId}><svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("global.close"))}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                renderSlot(_ctx.$slots, "default"),
                __props.dismissable ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  class: dismissableClass,
                  "data-dismiss-target": "#" + __props.name,
                  "aria-label": "{{ $t('global.close') }}"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-2 h-2",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 14 14"
                  }, [
                    createVNode("path", {
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    })
                  ])),
                  createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.$t("global.close")), 1)
                ], 8, ["data-dismiss-target"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorForm",
  __ssrInlineRender: true,
  setup(__props) {
    useToastStore();
    const showRecoveryCodes = ref(false);
    const enable = () => {
      axios.post(route("two-factor.enable")).then(() => {
        router.get(route("auth.two-factor"));
      }).catch((e) => {
        if (e.response.status === 423) {
          router.get(route("password.confirm"));
        }
      });
    };
    const disable = () => {
      router.delete(route("two-factor.disable"));
    };
    const recoveryCodes = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 space-y-4 md:space-y-6" }, _attrs))}><h1 class="mt-4 text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">${ssrInterpolate(_ctx.$t("global.two_factor"))}</h1>`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="inline-flex items-center space-x-2"${_scopeId}><span${_scopeId}>Status</span>`);
            if (_ctx.$page.props.auth.user.two_factor_enabled) {
              _push2(`<div class="inline-flex items-center space-x-1"${_scopeId}><span class="font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-success-300 focus:ring-offset-2 focus:ring-4 focus:ring-success-300 focus:outline-none dark:focus:ring-success-800"${_scopeId}><span class="inline-flex items-center space-x-1"${_scopeId}><span class="w-2 h-2 rounded-full me-1 bg-success-500"${_scopeId}></span><span${_scopeId}>Enabled</span></span></span>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                size: "xs",
                border: true,
                type: "danger",
                as: "a",
                onClick: disable
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="truncate"${_scopeId2}>Disable 2FA</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "truncate" }, "Disable 2FA")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="inline-flex items-center space-x-1"${_scopeId}><span class="font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-danger-300 focus:ring-offset-2 focus:ring-4 focus:ring-danger-300 focus:outline-none dark:focus:ring-danger-800"${_scopeId}><span class="inline-flex items-center space-x-1"${_scopeId}><span class="w-2 h-2 rounded-full me-1 bg-danger-500"${_scopeId}></span><span${_scopeId}>Disabled</span></span></span>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                size: "xs",
                border: true,
                as: "a",
                type: "success",
                onClick: enable
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="truncate"${_scopeId2}>Enable 2FA</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "truncate" }, "Enable 2FA")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "inline-flex items-center space-x-2" }, [
                createVNode("span", null, "Status"),
                _ctx.$page.props.auth.user.two_factor_enabled ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "inline-flex items-center space-x-1"
                }, [
                  createVNode("span", { class: "font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-success-300 focus:ring-offset-2 focus:ring-4 focus:ring-success-300 focus:outline-none dark:focus:ring-success-800" }, [
                    createVNode("span", { class: "inline-flex items-center space-x-1" }, [
                      createVNode("span", { class: "w-2 h-2 rounded-full me-1 bg-success-500" }),
                      createVNode("span", null, "Enabled")
                    ])
                  ]),
                  createVNode(_sfc_main$1, {
                    size: "xs",
                    border: true,
                    type: "danger",
                    as: "a",
                    onClick: withModifiers(disable, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "truncate" }, "Disable 2FA")
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "inline-flex items-center space-x-1"
                }, [
                  createVNode("span", { class: "font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-danger-300 focus:ring-offset-2 focus:ring-4 focus:ring-danger-300 focus:outline-none dark:focus:ring-danger-800" }, [
                    createVNode("span", { class: "inline-flex items-center space-x-1" }, [
                      createVNode("span", { class: "w-2 h-2 rounded-full me-1 bg-danger-500" }),
                      createVNode("span", null, "Disabled")
                    ])
                  ]),
                  createVNode(_sfc_main$1, {
                    size: "xs",
                    border: true,
                    as: "a",
                    type: "success",
                    onClick: withModifiers(enable, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "truncate" }, "Enable 2FA")
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.auth.user.two_factor_enabled) {
        _push(`<div><div class="space-y-6"><div><button class="text-sm font-semibold text-blue-500">${ssrInterpolate(showRecoveryCodes.value ? "Hide Recovery Codes" : "Show Recovery Codes")}</button>`);
        if (showRecoveryCodes.value) {
          _push(`<ul class="space-y-1"><!--[-->`);
          ssrRenderList(recoveryCodes.value, (recoveryCode) => {
            _push(`<li class="text-sm">${ssrInterpolate(recoveryCode)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Account/Form/TwoFactorForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
