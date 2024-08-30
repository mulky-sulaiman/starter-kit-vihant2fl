import { defineComponent, ref, resolveComponent, unref, withCtx, withDirectives, createVNode, vShow, toDisplayString, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$6, c as _sfc_main$7 } from "./Drawer-CEW5M0-7.js";
import { _ as _sfc_main$3 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { useModal } from "momentum-modal";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Group-YEtAZUyF.js";
import { _ as _sfc_main$4 } from "./Spinner-Cb6cLcOD.js";
import "@vueuse/integrations/useFocusTrap/component";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "@codinglabs/laravel-asset/asset.mjs";
import "./Label-D1c1ZHt3.js";
import "./Message-99K0ToBB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    // layout: false
  },
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    ref(false);
    const page = usePage();
    const mode = page.props.config["auth.mode"];
    const form = useForm({
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => {
        },
        onSuccess: () => {
          close();
        }
      });
    };
    const handleClose = () => {
      emit("close");
      router.get(page.props.previous["url"]);
    };
    const { show, close, redirect } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("global.confirm_password"),
        description: _ctx.$t("global.confirm_password")
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
                title: _ctx.$t("global.confirm_password"),
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
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("login.login"))}</span>`);
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("login.login")), 1)
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("login.login")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="items-center p-4 space-y-4 md:p-6 md:space-y-6"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      identifier: "password",
                      type: "password",
                      label: "Password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "current-password",
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.password,
                      hint: _ctx.$t("login.password_hint")
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:key",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="flex items-center justify-center pb-4 border-t dark:border-gray-600"${_scopeId2}><p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("home"),
                      class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("global.home"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "current-password",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.password,
                            hint: _ctx.$t("login.password_hint")
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:key",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty", "error", "hint"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center pb-4 border-t dark:border-gray-600" }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("home"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
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
                    title: _ctx.$t("global.confirm_password"),
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("login.login")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "current-password",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.password,
                            hint: _ctx.$t("login.password_hint")
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:key",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty", "error", "hint"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center pb-4 border-t dark:border-gray-600" }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("home"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ]),
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
                title: _ctx.$t("global.confirm.password"),
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
                            icon: "tabler:login-2",
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
                              icon: "tabler:login-2",
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
                              icon: "tabler:login-2",
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
                  if (_push3) {
                    _push3(`<div class="items-center p-4 space-y-4 md:p-6 md:space-y-6"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      identifier: "password",
                      type: "password",
                      label: "Password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "current-password",
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.password,
                      hint: _ctx.$t("login.password_hint")
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:key",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="flex items-center justify-center pb-4 border-t dark:border-gray-600"${_scopeId2}><p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("home"),
                      class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("global.home"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "current-password",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.password,
                            hint: _ctx.$t("login.password_hint")
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:key",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty", "error", "hint"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center pb-4 border-t dark:border-gray-600" }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("home"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
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
                    title: _ctx.$t("global.confirm.password"),
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
                              icon: "tabler:login-2",
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
                    default: withCtx(() => [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "current-password",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.password,
                            hint: _ctx.$t("login.password_hint")
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:key",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty", "error", "hint"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center pb-4 border-t dark:border-gray-600" }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("home"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ]),
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Modals/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
