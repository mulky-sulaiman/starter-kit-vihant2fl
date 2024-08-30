import { defineComponent, mergeProps, unref, withCtx, createVNode, withDirectives, vShow, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Group-YEtAZUyF.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$2 } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Spinner-Cb6cLcOD.js";
import { useForm } from "@inertiajs/vue3";
import "./Label-D1c1ZHt3.js";
import "./Message-99K0ToBB.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChangePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4 md:space-y-6" }, _attrs))}><h1 class="text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">${ssrInterpolate(_ctx.$t("global.change_password"))}</h1><div class="">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.$t("register.current_password"),
        hint: _ctx.$t("register.current_password_hint"),
        type: "password",
        identifier: "current_password",
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        formIsDirty: unref(form).isDirty,
        error: unref(form).errors.current_password,
        required: "",
        autofocus: "",
        autocomplete: "current-password"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:key",
              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "tabler:key",
                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.$t("register.password"),
        hint: _ctx.$t("register.password_hint"),
        type: "password",
        identifier: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        formIsDirty: unref(form).isDirty,
        error: unref(form).errors.password,
        required: "",
        autocomplete: "new-password"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:key",
              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "tabler:key",
                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.$t("register.password_confirmation"),
        hint: _ctx.$t("register.password_confirmation_hint"),
        type: "password",
        identifier: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        formIsDirty: unref(form).isDirty,
        error: unref(form).errors.password_confirmation,
        required: "",
        autocomplete: "new-password"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:key",
              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "tabler:key",
                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        as: "button",
        type: "primary",
        rounded: "lg",
        submit: true,
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:device-floppy",
              class: "mr-2 size-5",
              style: !unref(form).processing ? null : { display: "none" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mr-2",
              size: "sm",
              style: unref(form).processing ? null : { display: "none" }
            }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("global.save"))}</span>`);
          } else {
            return [
              withDirectives(createVNode(unref(Icon), {
                icon: "tabler:device-floppy",
                class: "mr-2 size-5"
              }, null, 512), [
                [vShow, !unref(form).processing]
              ]),
              withDirectives(createVNode(_sfc_main$3, {
                class: "mr-2",
                size: "sm"
              }, null, 512), [
                [vShow, unref(form).processing]
              ]),
              createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Account/Form/ChangePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
