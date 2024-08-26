import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Card-Bb3Qv7JL.js";
import { _ as _sfc_main$2 } from "./Logo-BhdirxJl.js";
import { _ as _sfc_main$4 } from "./Status-D1zvUDHb.js";
import { _ as _sfc_main$5 } from "./Group-g9-2m5yW.js";
import { _ as _sfc_main$6 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$7 } from "./Spinner-Cb6cLcOD.js";
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
  __name: "Recover",
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
    ref(false);
    usePage();
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"), {
        onFinish: () => {
        },
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("global.forgot_password"),
        description: _ctx.$t("global.forgot_password")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { class: "size-24 md:size-32" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 space-y-4 md:space-y-6 sm:p-8"${_scopeId2}><h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("global.forgot_password"))}</h1><p${_scopeId2}>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>`);
                  if (__props.status) {
                    _push3(ssrRenderComponent(_sfc_main$4, { status: __props.status }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form class="space-y-4 md:space-y-6"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    label: _ctx.$t("register.email"),
                    hint: _ctx.$t("register.email_hint"),
                    identifier: "email",
                    type: "email",
                    placeholder: _ctx.$t("register.email_placeholder"),
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    formIsDirty: unref(form).isDirty,
                    error: unref(form).errors.email,
                    required: "",
                    autocomplete: "username"
                  }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "tabler:mail",
                          class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "tabler:mail",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
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
                          icon: "tabler:mail",
                          class: "mr-2 size-5",
                          style: !unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          class: "mr-2",
                          size: "sm",
                          style: unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("global.send_forgot_password_link"))}</span>`);
                      } else {
                        return [
                          withDirectives(createVNode(unref(Icon), {
                            icon: "tabler:mail",
                            class: "mr-2 size-5"
                          }, null, 512), [
                            [vShow, !unref(form).processing]
                          ]),
                          withDirectives(createVNode(_sfc_main$7, {
                            class: "mr-2",
                            size: "sm"
                          }, null, 512), [
                            [vShow, unref(form).processing]
                          ]),
                          createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.send_forgot_password_link")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                      createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("global.forgot_password")), 1),
                      createVNode("p", null, "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."),
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
                            label: _ctx.$t("register.email"),
                            hint: _ctx.$t("register.email_hint"),
                            identifier: "email",
                            type: "email",
                            placeholder: _ctx.$t("register.email_placeholder"),
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            formIsDirty: unref(form).isDirty,
                            error: unref(form).errors.email,
                            required: "",
                            autocomplete: "username"
                          }, {
                            prefix: withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "tabler:mail",
                                class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                              })
                            ]),
                            _: 1
                          }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                        ]),
                        createVNode(_sfc_main$6, {
                          as: "button",
                          type: "primary",
                          rounded: "lg",
                          submit: true,
                          class: "w-full",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode(unref(Icon), {
                              icon: "tabler:mail",
                              class: "mr-2 size-5"
                            }, null, 512), [
                              [vShow, !unref(form).processing]
                            ]),
                            withDirectives(createVNode(_sfc_main$7, {
                              class: "mr-2",
                              size: "sm"
                            }, null, 512), [
                              [vShow, unref(form).processing]
                            ]),
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.send_forgot_password_link")), 1)
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
            _push2(`<p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("login.register_prefix"))} `);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("home"),
              class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("global.home"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("global.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode(_sfc_main$2, { class: "size-24 md:size-32" }),
              createVNode(_sfc_main$3, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                    createVNode("h1", { class: "text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white" }, toDisplayString(_ctx.$t("global.forgot_password")), 1),
                    createVNode("p", null, "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."),
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
                          label: _ctx.$t("register.email"),
                          hint: _ctx.$t("register.email_hint"),
                          identifier: "email",
                          type: "email",
                          placeholder: _ctx.$t("register.email_placeholder"),
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          formIsDirty: unref(form).isDirty,
                          error: unref(form).errors.email,
                          required: "",
                          autocomplete: "username"
                        }, {
                          prefix: withCtx(() => [
                            createVNode(unref(Icon), {
                              icon: "tabler:mail",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ]),
                          _: 1
                        }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                      ]),
                      createVNode(_sfc_main$6, {
                        as: "button",
                        type: "primary",
                        rounded: "lg",
                        submit: true,
                        class: "w-full",
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode(unref(Icon), {
                            icon: "tabler:mail",
                            class: "mr-2 size-5"
                          }, null, 512), [
                            [vShow, !unref(form).processing]
                          ]),
                          withDirectives(createVNode(_sfc_main$7, {
                            class: "mr-2",
                            size: "sm"
                          }, null, 512), [
                            [vShow, unref(form).processing]
                          ]),
                          createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.send_forgot_password_link")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ])
                ]),
                _: 1
              }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Recover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
