import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, Transition, toDisplayString, withDirectives, vShow, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Card-Bb3Qv7JL.js";
import { _ as _sfc_main$2 } from "./Logo-BhdirxJl.js";
import { _ as _sfc_main$4 } from "./Status-D1zvUDHb.js";
import { _ as _sfc_main$5 } from "./Group-g9-2m5yW.js";
import { _ as _sfc_main$6 } from "./Group-C7RVMUn1.js";
import { _ as _sfc_main$7 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$8 } from "./Spinner-Cb6cLcOD.js";
import { usePage, useForm } from "@inertiajs/vue3";
import "./ApplicationLogo-gwkZfrAE.js";
import "./Message-CD5xZHYU.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
  setup(__props) {
    const show = ref(false);
    usePage();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("login.login"),
        description: _ctx.$t("login.login")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { class: "size-24 md:size-32" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 space-y-4 md:space-y-6 sm:p-8"${_scopeId2}><h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("login.title"))}</h1>`);
                  if (__props.status) {
                    _push3(ssrRenderComponent(_sfc_main$4, { status: __props.status }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form class="space-y-4 md:space-y-6"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    ref: "inpit",
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
                          style: show.value ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "tabler:chevron-down",
                          class: "size-4 ms-2",
                          style: !show.value ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(`</p><ul style="${ssrRenderStyle(show.value ? null : { display: "none" })}" class="max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50"${_scopeId3}><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Email"))}</strong> : ${ssrInterpolate(_ctx.$t("Any valid email formatted address (your.name@domain.com) "))}</li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Username"))}</strong> : Can only contains alphabetical (case-sensitive), numbers, and limited special characters of dash(-), underscore(_), or dot(.) </li><li${_scopeId3}><strong class="font-semibold"${_scopeId3}>${ssrInterpolate(_ctx.$t("Mobile Phone"))}</strong> : Can only contains number format, not any alphabetical or characters are allowed.zero leading is accepted </li></ul></div>`);
                      } else {
                        return [
                          createVNode(Transition, { duration: { enter: 1e3, leave: 500 } }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("p", {
                                  class: "flex items-center my-2 font-semibold",
                                  onClick: ($event) => show.value = !show.value,
                                  role: "button"
                                }, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                  withDirectives(createVNode(unref(Icon), {
                                    icon: "tabler:chevron-up",
                                    class: "size-4 ms-2"
                                  }, null, 512), [
                                    [vShow, show.value]
                                  ]),
                                  withDirectives(createVNode(unref(Icon), {
                                    icon: "tabler:chevron-down",
                                    class: "size-4 ms-2"
                                  }, null, 512), [
                                    [vShow, !show.value]
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
                                  [vShow, show.value]
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
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
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
                        _push4(ssrRenderComponent(_sfc_main$8, {
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
                          withDirectives(createVNode(_sfc_main$8, {
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
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                      createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("login.title")), 1),
                      __props.status ? (openBlock(), createBlock(_sfc_main$4, {
                        key: 0,
                        status: __props.status
                      }, null, 8, ["status"])) : createCommentVNode("", true),
                      createVNode("form", {
                        class: "space-y-4 md:space-y-6",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5, {
                            ref: "inpit",
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
                                      onClick: ($event) => show.value = !show.value,
                                      role: "button"
                                    }, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-up",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, show.value]
                                      ]),
                                      withDirectives(createVNode(unref(Icon), {
                                        icon: "tabler:chevron-down",
                                        class: "size-4 ms-2"
                                      }, null, 512), [
                                        [vShow, !show.value]
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
                                      [vShow, show.value]
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
                        ]),
                        createVNode(_sfc_main$7, {
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
                            withDirectives(createVNode(_sfc_main$8, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("login.login")), 1)
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
            if (_ctx.$page.props.features.registration) {
              _push2(`<p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("auth.register"),
                class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("login.register"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("login.register")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, { class: "size-24 md:size-32" }),
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                    createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("login.title")), 1),
                    __props.status ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      status: __props.status
                    }, null, 8, ["status"])) : createCommentVNode("", true),
                    createVNode("form", {
                      class: "space-y-4 md:space-y-6",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_sfc_main$5, {
                          ref: "inpit",
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
                                    onClick: ($event) => show.value = !show.value,
                                    role: "button"
                                  }, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("Acceptable Input Values")), 1),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-up",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, show.value]
                                    ]),
                                    withDirectives(createVNode(unref(Icon), {
                                      icon: "tabler:chevron-down",
                                      class: "size-4 ms-2"
                                    }, null, 512), [
                                      [vShow, !show.value]
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
                                    [vShow, show.value]
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
                      ]),
                      createVNode(_sfc_main$7, {
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
                          withDirectives(createVNode(_sfc_main$8, {
                            class: "mr-2",
                            size: "sm"
                          }, null, 512), [
                            [vShow, unref(form).processing]
                          ]),
                          createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("login.login")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ])
                ]),
                _: 1
              }),
              _ctx.$page.props.features.registration ? (openBlock(), createBlock("p", {
                key: 0,
                class: "mt-4 text-sm font-light text-gray-500 dark:text-gray-400"
              }, [
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
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
