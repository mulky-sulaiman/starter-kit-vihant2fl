import { defineComponent, ref, resolveComponent, unref, withCtx, withDirectives, createVNode, vShow, toDisplayString, Transition, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$7, c as _sfc_main$8 } from "./Drawer-CEW5M0-7.js";
import { _ as _sfc_main$3 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { useModal } from "momentum-modal";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Group-YEtAZUyF.js";
import { _ as _sfc_main$6 } from "./Group-DJuG4r1U.js";
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
  __name: "Login",
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
    const showHint = ref(false);
    const page = usePage();
    const mode = page.props.config["auth.mode"];
    const form = useForm({
      login: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => {
          form.reset("password");
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
        title: _ctx.$t("login.login"),
        description: _ctx.$t("login.login")
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
                title: _ctx.$t("login.login"),
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
                            icon: "tabler:login-2",
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
                      label: _ctx.$t("Email / Username / Mobile Phone"),
                      identifier: "login",
                      type: "text",
                      placeholder: _ctx.$t("login.email_placeholder"),
                      modelValue: unref(form).login,
                      "onUpdate:modelValue": ($event) => unref(form).login = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username",
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.login
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user-circle",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user-circle",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      hint: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}><p class="flex items-center my-2 font-semibold" role="button"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(_ctx.$t("Acceptable Input Values"))}</span>`);
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:chevron-up",
                            class: "size-4 ms-2",
                            style: showHint.value ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:chevron-down",
                            class: "size-4 ms-2",
                            style: !showHint.value ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</p><ul style="${ssrRenderStyle(showHint.value ? null : { display: "none" })}" class="max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50"${_scopeId3}><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Email"))}</strong> : ${ssrInterpolate(_ctx.$t("Any valid email formatted address (your.name@domain.com) "))}</li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Username"))}</strong> : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) </li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Mobile Phone"))}</strong> : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted </li></ul></div>`);
                        } else {
                          return [
                            createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("p", {
                                    class: "flex items-center my-2 font-semibold",
                                    onClick: ($event) => showHint.value = !showHint.value,
                                    role: "button"
                                  }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-up",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, showHint.value]
                                    ]),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-down",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, !showHint.value]
                                    ])
                                  ], 8, ["onClick"]),
                                  withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                      createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                      createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                      createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                    ])
                                  ], 512), [
                                    [vShow, showHint.value]
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      identifier: "password",
                      type: "password",
                      label: "Password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
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
                    _push3(`</div><div class="flex items-center justify-between"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      identifier: "remember",
                      modelValue: unref(form).remember,
                      "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                      label: _ctx.$t("login.remember_me"),
                      formIsDirty: unref(form).isDirty,
                      useMessage: false
                    }, null, _parent3, _scopeId2));
                    if (_ctx.$page.props.features["reset-passwords"]) {
                      _push3(ssrRenderComponent(_component_Link, {
                        class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                        href: _ctx.route("auth.recover")
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("login.forgot_password"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    if (_ctx.$page.props.features.registration) {
                      _push3(`<div class="flex items-center justify-center pb-4 border-t dark:border-gray-600"${_scopeId2}><p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
                      _push3(ssrRenderComponent(_component_Link, {
                        href: _ctx.route("auth.register"),
                        class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("login.register"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            label: _ctx.$t("Email / Username / Mobile Phone"),
                            identifier: "login",
                            type: "text",
                            placeholder: _ctx.$t("login.email_placeholder"),
                            modelValue: unref(form).login,
                            "onUpdate:modelValue": ($event) => unref(form).login = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "username",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.login
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:user-circle",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            hint: withCtx(() => [
                              createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "flex items-center my-2 font-semibold",
                                      onClick: ($event) => showHint.value = !showHint.value,
                                      role: "button"
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-up",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, showHint.value]
                                      ]),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-down",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, !showHint.value]
                                      ])
                                    ], 8, ["onClick"]),
                                    withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                        createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                        createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                        createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                      ])
                                    ], 512), [
                                      [vShow, showHint.value]
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
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
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_sfc_main$6, {
                            identifier: "remember",
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            label: _ctx.$t("login.remember_me"),
                            formIsDirty: unref(form).isDirty,
                            useMessage: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "formIsDirty"]),
                          _ctx.$page.props.features["reset-passwords"] ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                            href: _ctx.route("auth.recover")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _ctx.$page.props.features.registration ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center justify-center pb-4 border-t dark:border-gray-600"
                      }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.register"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])) : createCommentVNode("", true)
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
                    title: _ctx.$t("login.login"),
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
                            label: _ctx.$t("Email / Username / Mobile Phone"),
                            identifier: "login",
                            type: "text",
                            placeholder: _ctx.$t("login.email_placeholder"),
                            modelValue: unref(form).login,
                            "onUpdate:modelValue": ($event) => unref(form).login = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "username",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.login
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:user-circle",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            hint: withCtx(() => [
                              createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "flex items-center my-2 font-semibold",
                                      onClick: ($event) => showHint.value = !showHint.value,
                                      role: "button"
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-up",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, showHint.value]
                                      ]),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-down",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, !showHint.value]
                                      ])
                                    ], 8, ["onClick"]),
                                    withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                        createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                        createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                        createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                      ])
                                    ], 512), [
                                      [vShow, showHint.value]
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
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
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_sfc_main$6, {
                            identifier: "remember",
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            label: _ctx.$t("login.remember_me"),
                            formIsDirty: unref(form).isDirty,
                            useMessage: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "formIsDirty"]),
                          _ctx.$page.props.features["reset-passwords"] ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                            href: _ctx.route("auth.recover")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _ctx.$page.props.features.registration ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center justify-center pb-4 border-t dark:border-gray-600"
                      }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.register"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])) : createCommentVNode("", true)
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
        _push(ssrRenderComponent(_sfc_main$7, {
          show: unref(show),
          placement: "right",
          extraWidth: "20",
          onClose: unref(close)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form class="space-y-4 md:space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                title: _ctx.$t("login.login"),
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
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("login.login"))}</span>`);
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
                      label: _ctx.$t("Email / Username / Mobile Phone"),
                      identifier: "login",
                      type: "text",
                      placeholder: _ctx.$t("login.email_placeholder"),
                      modelValue: unref(form).login,
                      "onUpdate:modelValue": ($event) => unref(form).login = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username",
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.login
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user-circle",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user-circle",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      hint: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div${_scopeId3}><p class="flex items-center my-2 font-semibold" role="button"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(_ctx.$t("Acceptable Input Values"))}</span>`);
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:chevron-up",
                            class: "size-4 ms-2",
                            style: showHint.value ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:chevron-down",
                            class: "size-4 ms-2",
                            style: !showHint.value ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</p><ul style="${ssrRenderStyle(showHint.value ? null : { display: "none" })}" class="max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50"${_scopeId3}><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Email"))}</strong> : ${ssrInterpolate(_ctx.$t("Any valid email formatted address (your.name@domain.com) "))}</li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Username"))}</strong> : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) </li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Mobile Phone"))}</strong> : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted </li></ul></div>`);
                        } else {
                          return [
                            createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("p", {
                                    class: "flex items-center my-2 font-semibold",
                                    onClick: ($event) => showHint.value = !showHint.value,
                                    role: "button"
                                  }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-up",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, showHint.value]
                                    ]),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-down",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, !showHint.value]
                                    ])
                                  ], 8, ["onClick"]),
                                  withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                      createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                      createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                      createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                    ])
                                  ], 512), [
                                    [vShow, showHint.value]
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      identifier: "password",
                      type: "password",
                      label: "Password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
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
                    _push3(`</div><div class="flex items-center justify-between"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      identifier: "remember",
                      modelValue: unref(form).remember,
                      "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                      label: _ctx.$t("login.remember_me"),
                      formIsDirty: unref(form).isDirty,
                      useMessage: false
                    }, null, _parent3, _scopeId2));
                    if (_ctx.$page.props.features["reset-passwords"]) {
                      _push3(ssrRenderComponent(_component_Link, {
                        class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                        href: _ctx.route("auth.recover")
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("login.forgot_password"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    if (_ctx.$page.props.features.registration) {
                      _push3(`<div class="flex items-center justify-center pb-4 border-t dark:border-gray-600"${_scopeId2}><p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
                      _push3(ssrRenderComponent(_component_Link, {
                        href: _ctx.route("auth.register"),
                        class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("login.register"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "items-center p-4 space-y-4 md:p-6 md:space-y-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            label: _ctx.$t("Email / Username / Mobile Phone"),
                            identifier: "login",
                            type: "text",
                            placeholder: _ctx.$t("login.email_placeholder"),
                            modelValue: unref(form).login,
                            "onUpdate:modelValue": ($event) => unref(form).login = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "username",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.login
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:user-circle",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            hint: withCtx(() => [
                              createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "flex items-center my-2 font-semibold",
                                      onClick: ($event) => showHint.value = !showHint.value,
                                      role: "button"
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-up",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, showHint.value]
                                      ]),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-down",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, !showHint.value]
                                      ])
                                    ], 8, ["onClick"]),
                                    withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                        createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                        createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                        createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                      ])
                                    ], 512), [
                                      [vShow, showHint.value]
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
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
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_sfc_main$6, {
                            identifier: "remember",
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            label: _ctx.$t("login.remember_me"),
                            formIsDirty: unref(form).isDirty,
                            useMessage: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "formIsDirty"]),
                          _ctx.$page.props.features["reset-passwords"] ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                            href: _ctx.route("auth.recover")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _ctx.$page.props.features.registration ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center justify-center pb-4 border-t dark:border-gray-600"
                      }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.register"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])) : createCommentVNode("", true)
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
                  createVNode(_sfc_main$8, {
                    title: _ctx.$t("login.login"),
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
                            label: _ctx.$t("Email / Username / Mobile Phone"),
                            identifier: "login",
                            type: "text",
                            placeholder: _ctx.$t("login.email_placeholder"),
                            modelValue: unref(form).login,
                            "onUpdate:modelValue": ($event) => unref(form).login = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "username",
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.login
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:user-circle",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            hint: withCtx(() => [
                              createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "flex items-center my-2 font-semibold",
                                      onClick: ($event) => showHint.value = !showHint.value,
                                      role: "button"
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-up",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, showHint.value]
                                      ]),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-down",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, !showHint.value]
                                      ])
                                    ], 8, ["onClick"]),
                                    withDirectives(createVNode("ul", { class: "max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50" }, [
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Email")), 1),
                                        createTextVNode(" : " + toDisplayString(_ctx.$t("Any valid email formatted address (your.name@domain.com) ")), 1)
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Username")), 1),
                                        createTextVNode(" : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) ")
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("strong", { class: "font-semibold" }, toDisplayString(_ctx.$t("Mobile Phone")), 1),
                                        createTextVNode(" : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted ")
                                      ])
                                    ], 512), [
                                      [vShow, showHint.value]
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            identifier: "password",
                            type: "password",
                            label: "Password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            required: "",
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
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_sfc_main$6, {
                            identifier: "remember",
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            label: _ctx.$t("login.remember_me"),
                            formIsDirty: unref(form).isDirty,
                            useMessage: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "formIsDirty"]),
                          _ctx.$page.props.features["reset-passwords"] ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            class: "text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
                            href: _ctx.route("auth.recover")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.forgot_password")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _ctx.$page.props.features.registration ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center justify-center pb-4 border-t dark:border-gray-600"
                      }, [
                        createVNode("p", { class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("login.register_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.register"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Modals/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
