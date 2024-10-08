import { defineComponent, ref, onMounted, resolveComponent, withCtx, unref, withDirectives, createVNode, vShow, toDisplayString, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Card-Bb3Qv7JL.js";
import { _ as _sfc_main$2 } from "./Logo-BhdirxJl.js";
import { u as useToastStore, _ as _sfc_main$5 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./Spinner-Cb6cLcOD.js";
import axios from "axios";
import { _ as _sfc_main$4 } from "./Group-Dc_uUSL5.js";
import "./ApplicationLogo-gwkZfrAE.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
import "./Label-D1c1ZHt3.js";
import "./Message-99K0ToBB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorEnable",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToastStore();
    usePage();
    const form = useForm({
      code: ""
    });
    const submit = () => {
      form.post(route("two-factor.confirm"), {
        onSuccess: () => {
          Promise.all([
            router.get(route("dashboard.account.security")),
            toast.add({
              type: "info",
              message: "Two Factor Authentication has been successfully enabled",
              autodismiss: true
            })
          ]);
        }
      });
    };
    const qrCode = ref("");
    const setupKey = ref("");
    const showQrCode = () => {
      axios.get(route("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      }).catch((e) => {
        if (e.response.status === 423) {
          router.get(route("password.confirm"));
        }
      });
    };
    const showSetupKey = () => {
      axios.get(route("two-factor.secret-key")).then((response) => {
        setupKey.value = response.data.secretKey;
      });
    };
    onMounted(() => {
      showQrCode();
      showSetupKey();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("global.two_factor_enable"),
        description: _ctx.$t("global.two_factor_enable")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { class: "size-24 md:size-32" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="p-6 space-y-4 md:space-y-6 sm:p-8"${_scopeId2}><h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("global.two_factor_enable"))}</h1><form class="space-y-4 md:space-y-6"${_scopeId2}><div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6"${_scopeId2}><p${_scopeId2}>Scan the following QR code using your phone&#39;s authenticator application to enable two factor authentication.</p><div class="flex items-center justify-center mx-auto"${_scopeId2}>${qrCode.value ?? ""}</div><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>Setup Key: <span class="font-semibold"${_scopeId2}>${ssrInterpolate(setupKey.value)}</span></p>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    identifier: "code",
                    label: "Code",
                    alignment: "center",
                    formIsDirty: unref(form).isDirty,
                    error: (_a = unref(form).errors.confirmTwoFactorAuthentication) == null ? void 0 : _a.code,
                    hint: "Enter the code given from the authenticator app",
                    required: "",
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    as: "button",
                    type: "primary",
                    rounded: "lg",
                    submit: true,
                    class: "w-full",
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "tabler:lock-open",
                          class: "mr-2 size-5",
                          style: !unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          class: "mr-2",
                          size: "sm",
                          style: unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("global.confirm"))}</span>`);
                      } else {
                        return [
                          withDirectives(createVNode(unref(Icon), {
                            icon: "tabler:lock-open",
                            class: "mr-2 size-5"
                          }, null, 512), [
                            [vShow, !unref(form).processing]
                          ]),
                          withDirectives(createVNode(_sfc_main$6, {
                            class: "mr-2",
                            size: "sm"
                          }, null, 512), [
                            [vShow, unref(form).processing]
                          ]),
                          createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                      createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("global.two_factor_enable")), 1),
                      createVNode("form", {
                        class: "space-y-4 md:space-y-6",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                          createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                          createVNode("div", {
                            innerHTML: qrCode.value,
                            class: "flex items-center justify-center mx-auto"
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                            createTextVNode("Setup Key: "),
                            createVNode("span", {
                              class: "font-semibold",
                              textContent: toDisplayString(setupKey.value)
                            }, null, 8, ["textContent"])
                          ]),
                          createVNode(_sfc_main$4, {
                            identifier: "code",
                            label: "Code",
                            alignment: "center",
                            formIsDirty: unref(form).isDirty,
                            error: (_b = unref(form).errors.confirmTwoFactorAuthentication) == null ? void 0 : _b.code,
                            hint: "Enter the code given from the authenticator app",
                            required: "",
                            modelValue: unref(form).code,
                            "onUpdate:modelValue": ($event) => unref(form).code = $event
                          }, null, 8, ["formIsDirty", "error", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(_sfc_main$5, {
                          as: "button",
                          type: "primary",
                          rounded: "lg",
                          submit: true,
                          class: "w-full",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode(unref(Icon), {
                              icon: "tabler:lock-open",
                              class: "mr-2 size-5"
                            }, null, 512), [
                              [vShow, !unref(form).processing]
                            ]),
                            withDirectives(createVNode(_sfc_main$6, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { class: "size-24 md:size-32" }),
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                      createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("global.two_factor_enable")), 1),
                      createVNode("form", {
                        class: "space-y-4 md:space-y-6",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                          createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                          createVNode("div", {
                            innerHTML: qrCode.value,
                            class: "flex items-center justify-center mx-auto"
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                            createTextVNode("Setup Key: "),
                            createVNode("span", {
                              class: "font-semibold",
                              textContent: toDisplayString(setupKey.value)
                            }, null, 8, ["textContent"])
                          ]),
                          createVNode(_sfc_main$4, {
                            identifier: "code",
                            label: "Code",
                            alignment: "center",
                            formIsDirty: unref(form).isDirty,
                            error: (_a = unref(form).errors.confirmTwoFactorAuthentication) == null ? void 0 : _a.code,
                            hint: "Enter the code given from the authenticator app",
                            required: "",
                            modelValue: unref(form).code,
                            "onUpdate:modelValue": ($event) => unref(form).code = $event
                          }, null, 8, ["formIsDirty", "error", "modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(_sfc_main$5, {
                          as: "button",
                          type: "primary",
                          rounded: "lg",
                          submit: true,
                          class: "w-full",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode(unref(Icon), {
                              icon: "tabler:lock-open",
                              class: "mr-2 size-5"
                            }, null, 512), [
                              [vShow, !unref(form).processing]
                            ]),
                            withDirectives(createVNode(_sfc_main$6, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorEnable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
