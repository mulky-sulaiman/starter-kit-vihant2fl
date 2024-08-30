import { defineComponent, resolveComponent, unref, withCtx, withDirectives, createVNode, vShow, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$7, c as _sfc_main$8 } from "./Drawer-CEW5M0-7.js";
import { _ as _sfc_main$3 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { useModal } from "momentum-modal";
import { _ as _sfc_main$5 } from "./Group-YEtAZUyF.js";
import { _ as _sfc_main$6 } from "./Group-BCK69WR9.js";
import { _ as _sfc_main$4 } from "./Spinner-Cb6cLcOD.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
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
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    genders: {
      type: Object
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const page = usePage();
    const mode = page.props.config["auth.mode"];
    const form = useForm({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      gender: ""
    });
    const submit = () => {
      console.log(form);
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
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
        title: _ctx.$t("register.register"),
        description: _ctx.$t("register.register")
      }, null, _parent));
      if (unref(mode) === "modal") {
        _push(ssrRenderComponent(_sfc_main$1, {
          show: unref(show),
          maxWidth: "xl",
          onClose: unref(close)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                title: _ctx.$t("register.register"),
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
                            icon: "tabler:user-plus",
                            class: "mr-2 size-5",
                            style: !unref(form).processing ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            class: "mr-2",
                            size: "sm",
                            style: unref(form).processing ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("register.register"))}</span>`);
                        } else {
                          return [
                            withDirectives(createVNode(unref(Icon), {
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
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
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8"${_scopeId2}><div class="space-y-4 md:space-y-6"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.first_name"),
                      hint: _ctx.$t("register.first_name_hint"),
                      placeholder: _ctx.$t("register.first_name_placeholder"),
                      type: "text",
                      identifier: "first_name",
                      modelValue: unref(form).first_name,
                      "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.first_name,
                      required: "",
                      autofocus: "",
                      autocomplete: "first-name"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.last_name"),
                      hint: _ctx.$t("register.last_name_hint"),
                      placeholder: _ctx.$t("register.last_name_placeholder"),
                      type: "text",
                      identifier: "last_name",
                      modelValue: unref(form).last_name,
                      "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.last_name,
                      autocomplete: "last-name"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.username"),
                      hint: _ctx.$t("register.username_hint"),
                      identifier: "username",
                      type: "text",
                      placeholder: _ctx.$t("register.username_placeholder"),
                      modelValue: unref(form).username,
                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.username,
                      required: "",
                      autocomplete: "username"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.phone"),
                      hint: _ctx.$t("register.phone_hint"),
                      placeholder: _ctx.$t("register.phone_placeholder"),
                      type: "number",
                      identifier: "phone",
                      name: "phone",
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.phone,
                      autocomplete: "phone"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:phone",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:phone",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: _ctx.$t("register.gender"),
                      hint: _ctx.$t("register.gender_hint"),
                      identifier: "gender",
                      modelValue: unref(form).gender,
                      "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.gender,
                      class: "tracking-widest uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<option value="" selected disabled${_scopeId3}>${ssrInterpolate(_ctx.$t("register.select_your_gender"))}</option><!--[-->`);
                          ssrRenderList(__props.genders, (gender, index) => {
                            _push4(`<option${ssrRenderAttr("value", gender.value)}${_scopeId3}>${ssrInterpolate(gender.label)}</option>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("option", {
                              value: "",
                              selected: "",
                              disabled: "",
                              textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                            }, null, 8, ["textContent"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                              return openBlock(), createBlock("option", {
                                key: index,
                                value: gender.value,
                                textContent: toDisplayString(gender.label)
                              }, null, 8, ["value", "textContent"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div><div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6"${_scopeId2}>`);
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
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                    _push3(`</div></div></div><div class="pb-4"${_scopeId2}><p class="flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("register.login_prefix"))} `);
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("auth.login"),
                      class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("register.login"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.first_name"),
                                hint: _ctx.$t("register.first_name_hint"),
                                placeholder: _ctx.$t("register.first_name_placeholder"),
                                type: "text",
                                identifier: "first_name",
                                modelValue: unref(form).first_name,
                                "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.first_name,
                                required: "",
                                autofocus: "",
                                autocomplete: "first-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.last_name"),
                                hint: _ctx.$t("register.last_name_hint"),
                                placeholder: _ctx.$t("register.last_name_placeholder"),
                                type: "text",
                                identifier: "last_name",
                                modelValue: unref(form).last_name,
                                "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.last_name,
                                autocomplete: "last-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.username"),
                                hint: _ctx.$t("register.username_hint"),
                                identifier: "username",
                                type: "text",
                                placeholder: _ctx.$t("register.username_placeholder"),
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.username,
                                required: "",
                                autocomplete: "username"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.phone"),
                                hint: _ctx.$t("register.phone_hint"),
                                placeholder: _ctx.$t("register.phone_placeholder"),
                                type: "number",
                                identifier: "phone",
                                name: "phone",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.phone,
                                autocomplete: "phone"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:phone",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$6, {
                                label: _ctx.$t("register.gender"),
                                hint: _ctx.$t("register.gender_hint"),
                                identifier: "gender",
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.gender,
                                class: "tracking-widest uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", {
                                    value: "",
                                    selected: "",
                                    disabled: "",
                                    textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                                  }, null, 8, ["textContent"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                                    return openBlock(), createBlock("option", {
                                      key: index,
                                      value: gender.value,
                                      textContent: toDisplayString(gender.label)
                                    }, null, 8, ["value", "textContent"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                          createVNode("div", { class: "col-span-6" }, [
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
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ]),
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pb-4" }, [
                        createVNode("p", { class: "flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("register.login_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.login"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
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
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode(_sfc_main$2, {
                    title: _ctx.$t("register.register"),
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
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.first_name"),
                                hint: _ctx.$t("register.first_name_hint"),
                                placeholder: _ctx.$t("register.first_name_placeholder"),
                                type: "text",
                                identifier: "first_name",
                                modelValue: unref(form).first_name,
                                "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.first_name,
                                required: "",
                                autofocus: "",
                                autocomplete: "first-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.last_name"),
                                hint: _ctx.$t("register.last_name_hint"),
                                placeholder: _ctx.$t("register.last_name_placeholder"),
                                type: "text",
                                identifier: "last_name",
                                modelValue: unref(form).last_name,
                                "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.last_name,
                                autocomplete: "last-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.username"),
                                hint: _ctx.$t("register.username_hint"),
                                identifier: "username",
                                type: "text",
                                placeholder: _ctx.$t("register.username_placeholder"),
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.username,
                                required: "",
                                autocomplete: "username"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.phone"),
                                hint: _ctx.$t("register.phone_hint"),
                                placeholder: _ctx.$t("register.phone_placeholder"),
                                type: "number",
                                identifier: "phone",
                                name: "phone",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.phone,
                                autocomplete: "phone"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:phone",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$6, {
                                label: _ctx.$t("register.gender"),
                                hint: _ctx.$t("register.gender_hint"),
                                identifier: "gender",
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.gender,
                                class: "tracking-widest uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", {
                                    value: "",
                                    selected: "",
                                    disabled: "",
                                    textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                                  }, null, 8, ["textContent"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                                    return openBlock(), createBlock("option", {
                                      key: index,
                                      value: gender.value,
                                      textContent: toDisplayString(gender.label)
                                    }, null, 8, ["value", "textContent"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                          createVNode("div", { class: "col-span-6" }, [
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
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ]),
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pb-4" }, [
                        createVNode("p", { class: "flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("register.login_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.login"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
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
        _push(ssrRenderComponent(_sfc_main$7, {
          show: unref(show),
          placement: "right",
          extraWidth: "20",
          onClose: unref(close)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                title: _ctx.$t("register.register"),
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
                            icon: "tabler:user-plus",
                            class: "mr-2 size-5",
                            style: !unref(form).processing ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            class: "mr-2",
                            size: "sm",
                            style: unref(form).processing ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("register.register"))}</span>`);
                        } else {
                          return [
                            withDirectives(createVNode(unref(Icon), {
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
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
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8"${_scopeId2}><div class="space-y-4 md:space-y-6"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.first_name"),
                      hint: _ctx.$t("register.first_name_hint"),
                      placeholder: _ctx.$t("register.first_name_placeholder"),
                      type: "text",
                      identifier: "first_name",
                      modelValue: unref(form).first_name,
                      "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.first_name,
                      required: "",
                      autofocus: "",
                      autocomplete: "first-name"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.last_name"),
                      hint: _ctx.$t("register.last_name_hint"),
                      placeholder: _ctx.$t("register.last_name_placeholder"),
                      type: "text",
                      identifier: "last_name",
                      modelValue: unref(form).last_name,
                      "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.last_name,
                      autocomplete: "last-name"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.username"),
                      hint: _ctx.$t("register.username_hint"),
                      identifier: "username",
                      type: "text",
                      placeholder: _ctx.$t("register.username_placeholder"),
                      modelValue: unref(form).username,
                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.username,
                      required: "",
                      autocomplete: "username"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:user",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:user",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      label: _ctx.$t("register.phone"),
                      hint: _ctx.$t("register.phone_hint"),
                      placeholder: _ctx.$t("register.phone_placeholder"),
                      type: "number",
                      identifier: "phone",
                      name: "phone",
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.phone,
                      autocomplete: "phone"
                    }, {
                      prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:phone",
                            class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), {
                              icon: "tabler:phone",
                              class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: _ctx.$t("register.gender"),
                      hint: _ctx.$t("register.gender_hint"),
                      identifier: "gender",
                      modelValue: unref(form).gender,
                      "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                      formIsDirty: unref(form).isDirty,
                      error: unref(form).errors.gender,
                      class: "tracking-widest uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<option value="" selected disabled${_scopeId3}>${ssrInterpolate(_ctx.$t("register.select_your_gender"))}</option><!--[-->`);
                          ssrRenderList(__props.genders, (gender, index) => {
                            _push4(`<option${ssrRenderAttr("value", gender.value)}${_scopeId3}>${ssrInterpolate(gender.label)}</option>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode("option", {
                              value: "",
                              selected: "",
                              disabled: "",
                              textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                            }, null, 8, ["textContent"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                              return openBlock(), createBlock("option", {
                                key: index,
                                value: gender.value,
                                textContent: toDisplayString(gender.label)
                              }, null, 8, ["value", "textContent"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div><div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6"${_scopeId2}>`);
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
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
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
                    _push3(`</div></div></div><div class="pb-4"${_scopeId2}><p class="flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("register.login_prefix"))} `);
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("auth.login"),
                      class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("register.login"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.first_name"),
                                hint: _ctx.$t("register.first_name_hint"),
                                placeholder: _ctx.$t("register.first_name_placeholder"),
                                type: "text",
                                identifier: "first_name",
                                modelValue: unref(form).first_name,
                                "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.first_name,
                                required: "",
                                autofocus: "",
                                autocomplete: "first-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.last_name"),
                                hint: _ctx.$t("register.last_name_hint"),
                                placeholder: _ctx.$t("register.last_name_placeholder"),
                                type: "text",
                                identifier: "last_name",
                                modelValue: unref(form).last_name,
                                "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.last_name,
                                autocomplete: "last-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.username"),
                                hint: _ctx.$t("register.username_hint"),
                                identifier: "username",
                                type: "text",
                                placeholder: _ctx.$t("register.username_placeholder"),
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.username,
                                required: "",
                                autocomplete: "username"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.phone"),
                                hint: _ctx.$t("register.phone_hint"),
                                placeholder: _ctx.$t("register.phone_placeholder"),
                                type: "number",
                                identifier: "phone",
                                name: "phone",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.phone,
                                autocomplete: "phone"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:phone",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$6, {
                                label: _ctx.$t("register.gender"),
                                hint: _ctx.$t("register.gender_hint"),
                                identifier: "gender",
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.gender,
                                class: "tracking-widest uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", {
                                    value: "",
                                    selected: "",
                                    disabled: "",
                                    textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                                  }, null, 8, ["textContent"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                                    return openBlock(), createBlock("option", {
                                      key: index,
                                      value: gender.value,
                                      textContent: toDisplayString(gender.label)
                                    }, null, 8, ["value", "textContent"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                          createVNode("div", { class: "col-span-6" }, [
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
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ]),
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pb-4" }, [
                        createVNode("p", { class: "flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("register.login_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.login"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
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
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode(_sfc_main$8, {
                    title: _ctx.$t("register.register"),
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
                              icon: "tabler:user-plus",
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
                            createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("register.register")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.first_name"),
                                hint: _ctx.$t("register.first_name_hint"),
                                placeholder: _ctx.$t("register.first_name_placeholder"),
                                type: "text",
                                identifier: "first_name",
                                modelValue: unref(form).first_name,
                                "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.first_name,
                                required: "",
                                autofocus: "",
                                autocomplete: "first-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.last_name"),
                                hint: _ctx.$t("register.last_name_hint"),
                                placeholder: _ctx.$t("register.last_name_placeholder"),
                                type: "text",
                                identifier: "last_name",
                                modelValue: unref(form).last_name,
                                "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.last_name,
                                autocomplete: "last-name"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.username"),
                                hint: _ctx.$t("register.username_hint"),
                                identifier: "username",
                                type: "text",
                                placeholder: _ctx.$t("register.username_placeholder"),
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.username,
                                required: "",
                                autocomplete: "username"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:user",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                label: _ctx.$t("register.phone"),
                                hint: _ctx.$t("register.phone_hint"),
                                placeholder: _ctx.$t("register.phone_placeholder"),
                                type: "number",
                                identifier: "phone",
                                name: "phone",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.phone,
                                autocomplete: "phone"
                              }, {
                                prefix: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:phone",
                                    class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                  })
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "placeholder", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ]),
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$6, {
                                label: _ctx.$t("register.gender"),
                                hint: _ctx.$t("register.gender_hint"),
                                identifier: "gender",
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                error: unref(form).errors.gender,
                                class: "tracking-widest uppercase"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", {
                                    value: "",
                                    selected: "",
                                    disabled: "",
                                    textContent: toDisplayString(_ctx.$t("register.select_your_gender"))
                                  }, null, 8, ["textContent"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                                    return openBlock(), createBlock("option", {
                                      key: index,
                                      value: gender.value,
                                      textContent: toDisplayString(gender.label)
                                    }, null, 8, ["value", "textContent"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8" }, [
                        createVNode("div", { class: "grid grid-cols-6 gap-6" }, [
                          createVNode("div", { class: "col-span-6" }, [
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
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ]),
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
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
                              prefix: withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "tabler:key",
                                  class: "w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                })
                              ]),
                              _: 1
                            }, 8, ["label", "hint", "modelValue", "onUpdate:modelValue", "formIsDirty", "error"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pb-4" }, [
                        createVNode("p", { class: "flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400" }, [
                          createTextVNode(toDisplayString(_ctx.$t("register.login_prefix")) + " ", 1),
                          createVNode(_component_Link, {
                            href: _ctx.route("auth.login"),
                            class: "font-medium text-primary-600 hover:underline dark:text-primary-500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("register.login")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Modals/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
