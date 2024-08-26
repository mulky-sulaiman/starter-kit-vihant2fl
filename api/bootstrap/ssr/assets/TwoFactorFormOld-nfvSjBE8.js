import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { u as useToastStore, _ as _sfc_main$1 } from "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@iconify/vue";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorFormOld",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToastStore();
    const showRecoveryCodes = ref(false);
    const enable = () => {
      router.post(route("two-factor.enable"), {}, {
        onSuccess: () => {
          router.get(route("auth.two-factor"));
        }
      });
    };
    const disable = () => {
      router.delete(route("two-factor.disable"), {
        onSuccess: (page) => {
          toast.add({
            type: "info",
            message: "Two Factor Authentication has been successfully disabled",
            autodismiss: true
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 space-y-4 md:space-y-6" }, _attrs))}><h1 class="mt-4 text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">${ssrInterpolate(_ctx.$t("global.two_factor"))}</h1>`);
      if (!_ctx.$page.props.auth.user.two_factor_enabled) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, { onClick: enable }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Enable Two Factor Authentication `);
            } else {
              return [
                createTextVNode("Enable Two Factor Authentication ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user.two_factor_enabled) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, { onClick: disable }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Disable Two Factor Authentication `);
            } else {
              return [
                createTextVNode("Disable Two Factor Authentication ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="space-y-6"><div><button class="text-sm font-semibold text-blue-500">${ssrInterpolate(showRecoveryCodes.value ? "Hide Recovery Codes" : "Show Recovery Codes")}</button>`);
        if (showRecoveryCodes.value) {
          _push(`<ul class="space-y-1"><!--[-->`);
          ssrRenderList((_a = _ctx.$page.props.auth.user) == null ? void 0 : _a.two_factor_recovery_codes, (recoveryCode) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Account/Form/TwoFactorFormOld.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
