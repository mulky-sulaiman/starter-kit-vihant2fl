import { defineComponent, ref, onMounted, resolveComponent, unref, withCtx, withDirectives, createVNode, vShow, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$6, c as _sfc_main$7 } from "./Drawer-CEW5M0-7.js";
import { u as useToastStore, _ as _sfc_main$3 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { useModal } from "momentum-modal";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./Spinner-Cb6cLcOD.js";
import axios from "axios";
import { _ as _sfc_main$5 } from "./Group-DViXGZws.js";
import "@vueuse/integrations/useFocusTrap/component";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "@codinglabs/laravel-asset/asset.mjs";
import "./Message-CD5xZHYU.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    // layout: false
  },
  __name: "TwoFactorEnable",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const toast = useToastStore();
    const emit = __emit;
    const page = usePage();
    const mode = page.props.config["auth.mode"];
    const form = useForm({
      code: ""
    });
    const submit = () => {
      form.post(route("two-factor.confirm"), {
        onSuccess: () => {
          toast.add({
            type: "info",
            message: "Two Factor Authentication has been successfully enabled",
            autodismiss: true
          });
          router.get(route("dashboard.account.security"), {
            onSuccess: (page2) => {
              toast.add({
                type: "info",
                message: "Two Factor Authentication has been successfully enabled",
                autodismiss: true
              });
            }
          });
        }
      });
    };
    const handleClose = () => {
      emit("close");
      router.get(page.props.previous["url"]);
    };
    const { show, close, redirect } = useModal();
    const qrCode = ref("");
    onMounted(() => {
      axios.get(route("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      }).catch((e) => {
        if (e.response.status === 423) {
          router.get(route("password.confirm"));
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("global.two_factor_enable"),
        description: _ctx.$t("global.two_factor_enable")
      }, null, _parent));
      if (unref(mode) === "modal") {
        _push(ssrRenderComponent(_sfc_main$1, {
          show: unref(show),
          maxWidth: "lg",
          onClose: unref(close)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form class="space-y-4 md:space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                title: _ctx.$t("global.two_factor_enable"),
                onCloseProxy: handleClose,
                class: "!p-0 md:!p-0"
              }, {
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
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
                          _push4(ssrRenderComponent(_sfc_main$4, {
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
                            withDirectives(createVNode(_sfc_main$4, {
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
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "w-full" }, [
                        createVNode(_sfc_main$3, {
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
                            withDirectives(createVNode(_sfc_main$4, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6"${_scopeId2}><p${_scopeId2}>Scan the following QR code using your phone&#39;s authenticator application to enable two factor authentication.</p><div class="flex items-center justify-center mx-auto"${_scopeId2}>${qrCode.value ?? ""}</div>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                  } else {
                    return [
                      createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                        createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                        createVNode("div", {
                          innerHTML: qrCode.value,
                          class: "flex items-center justify-center mx-auto"
                        }, null, 8, ["innerHTML"]),
                        createVNode(_sfc_main$5, {
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
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode("form", {
                  class: "space-y-4 md:space-y-6",
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode(_sfc_main$2, {
                    title: _ctx.$t("global.two_factor_enable"),
                    onCloseProxy: handleClose,
                    class: "!p-0 md:!p-0"
                  }, {
                    footer: withCtx(() => [
                      createVNode("span", { class: "w-full" }, [
                        createVNode(_sfc_main$3, {
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
                            withDirectives(createVNode(_sfc_main$4, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                          createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                          createVNode("div", {
                            innerHTML: qrCode.value,
                            class: "flex items-center justify-center mx-auto"
                          }, null, 8, ["innerHTML"]),
                          createVNode(_sfc_main$5, {
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
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["title"])
                ], 32)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(mode) === "drawer") {
        _push(ssrRenderComponent(_sfc_main$6, {
          show: unref(show),
          placement: "right",
          extraWidth: "20",
          onClose: unref(close)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form class="space-y-4 md:space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                title: `Setup Two Factor Authentication`,
                onCloseProxy: handleClose,
                placement: "right",
                class: "!p-0 md:!p-0"
              }, {
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
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
                          _push4(ssrRenderComponent(_sfc_main$4, {
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
                            withDirectives(createVNode(_sfc_main$4, {
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
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "w-full" }, [
                        createVNode(_sfc_main$3, {
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
                            withDirectives(createVNode(_sfc_main$4, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6"${_scopeId2}><p${_scopeId2}>Scan the following QR code using your phone&#39;s authenticator application to enable two factor authentication.</p><div class="flex items-center justify-center mx-auto"${_scopeId2}>${qrCode.value ?? ""}</div>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                  } else {
                    return [
                      createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                        createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                        createVNode("div", {
                          innerHTML: qrCode.value,
                          class: "flex items-center justify-center mx-auto"
                        }, null, 8, ["innerHTML"]),
                        createVNode(_sfc_main$5, {
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
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode("form", {
                  class: "space-y-4 md:space-y-6",
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode(_sfc_main$7, {
                    title: `Setup Two Factor Authentication`,
                    onCloseProxy: handleClose,
                    placement: "right",
                    class: "!p-0 md:!p-0"
                  }, {
                    footer: withCtx(() => [
                      createVNode("span", { class: "w-full" }, [
                        createVNode(_sfc_main$3, {
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
                            withDirectives(createVNode(_sfc_main$4, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6" }, [
                          createVNode("p", null, "Scan the following QR code using your phone's authenticator application to enable two factor authentication."),
                          createVNode("div", {
                            innerHTML: qrCode.value,
                            class: "flex items-center justify-center mx-auto"
                          }, null, 8, ["innerHTML"]),
                          createVNode(_sfc_main$5, {
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
                        ])
                      ];
                    }),
                    _: 1
                  })
                ], 32)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Modals/Auth/TwoFactorEnable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
