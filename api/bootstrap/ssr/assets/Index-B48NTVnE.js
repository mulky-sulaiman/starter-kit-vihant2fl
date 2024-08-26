import { defineComponent, ref, computed, watch, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, withModifiers, createVNode, createTextVNode, toDisplayString, Fragment, renderList, withDirectives, vShow, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Dashboard-C2kZcZwD.js";
import { _ as _sfc_main$5 } from "./Group-g9-2m5yW.js";
import { _ as _sfc_main$6 } from "./Group-DKdkuYCu.js";
import { _ as _sfc_main$7 } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$8 } from "./Spinner-Cb6cLcOD.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Index-CEb97h9L.js";
import { _ as _sfc_main$4 } from "./Guest-SYZpduF2.js";
import { _ as _sfc_main$3 } from "./Message-CD5xZHYU.js";
import "./ApplicationLogo-gwkZfrAE.js";
import "@iconify/vue/dist/iconify.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    genders: {
      type: Object
    },
    breadCrumbs: {
      type: Object,
      default: {
        0: { label: "Account", link: "dashboard.account.index" },
        1: { label: "Profile", link: "" }
      }
    }
  },
  setup(__props) {
    const verificationLinkSent = ref(null);
    const page = usePage();
    const form = useForm({
      _method: "PUT",
      first_name: page.props.auth.user.first_name,
      last_name: page.props.auth.user.last_name,
      username: page.props.auth.user.username,
      email: page.props.auth.user.email,
      phone: page.props.auth.user.phone,
      gender: page.props.auth.user.gender,
      photo: null,
      photo_header: null
    });
    const submit = () => {
      form.post(route("user-profile-information.update"), {
        preserveScroll: false,
        onFinish: () => {
          photo.value = null;
          photo_header.value = null;
        }
      });
    };
    const sendEmailVerification = () => {
      verificationLinkSent.value = true;
    };
    const photo = ref(null);
    const photoPreview = computed(() => {
      if (!photo.value) {
        return;
      }
      return URL.createObjectURL(photo.value);
    });
    watch(photo, (photo2) => {
      form.photo = photo2;
    });
    const photo_header = ref(null);
    const photoHeaderPreview = computed(() => {
      if (!photo_header.value) {
        return;
      }
      return URL.createObjectURL(photo_header.value);
    });
    watch(photo_header, (photo_header2) => {
      form.photo_header = photo_header2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        pageTitle: _ctx.$t("global.profile_info"),
        breadCrumbs: __props.breadCrumbs
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIHead, {
              title: _ctx.$t("global.profile_info"),
              description: _ctx.$t("global.profile_info")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "border-0 border-b border-gray-200 rounded-none dark:border-gray-700",
              size: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}><div class="flex flex-col max-w-full px-4 mx-auto space-y-6 lg:gap-8 xl:gap-0"${_scopeId2}><div class="flex flex-col items-center justify-center w-full -space-y-20"${_scopeId2}><div class="flex items-center justify-center w-full bg-cover" style="${ssrRenderStyle(`background-image: url('${photoHeaderPreview.value ?? _ctx.$page.props.auth.user.header_url}');`)}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    for: "dropzone-file",
                    class: "flex flex-col items-center justify-center w-full h-64 font-semibold border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-primary-500 dark:text-primary-100"
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (photo_header.value) {
                          _push4(`<a href="#" class="flex flex-col items-center justify-center pt-5 pb-6" role="button"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Icon), {
                            icon: "tabler:trash",
                            class: "w-8 h-8"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="mb-2 text-sm"${_scopeId3}>Clear</span></a>`);
                        } else {
                          _push4(`<div class="flex flex-col items-center justify-center pt-5 pb-6"${_scopeId3}><svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"${_scopeId3}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"${_scopeId3}></path></svg><p class="mb-2 text-sm"${_scopeId3}><span class="font-semibold"${_scopeId3}>Click to upload</span> or drag and drop</p><p class="text-xs"${_scopeId3}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p><input id="dropzone-file" type="file" class="sr-only"${_scopeId3}></div>`);
                        }
                      } else {
                        return [
                          photo_header.value ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: "#",
                            onClick: withModifiers(($event) => photo_header.value = null, ["prevent"]),
                            class: "flex flex-col items-center justify-center pt-5 pb-6",
                            role: "button"
                          }, [
                            createVNode(unref(Icon), {
                              icon: "tabler:trash",
                              class: "w-8 h-8"
                            }),
                            createVNode("span", { class: "mb-2 text-sm" }, "Clear")
                          ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex flex-col items-center justify-center pt-5 pb-6"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-8 h-8 mb-4",
                              "aria-hidden": "true",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 20 16"
                            }, [
                              createVNode("path", {
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              })
                            ])),
                            createVNode("p", { class: "mb-2 text-sm" }, [
                              createVNode("span", { class: "font-semibold" }, "Click to upload"),
                              createTextVNode(" or drag and drop")
                            ]),
                            createVNode("p", { class: "text-xs" }, "SVG, PNG, JPG or GIF (MAX. 800x400px)"),
                            createVNode("input", {
                              id: "dropzone-file",
                              type: "file",
                              class: "sr-only",
                              onChange: ($event) => photo_header.value = $event.target.files[0]
                            }, null, 40, ["onChange"])
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div flex flex-col items-center justify-center w-full space-y-4${_scopeId2}>`);
                  if (photoPreview.value) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      src: photoPreview.value,
                      alt: _ctx.$page.props.auth.user.name,
                      rounded: "full",
                      size: "xl",
                      tooltip: true,
                      overlap: true
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      src: _ctx.$page.props.auth.user.avatar_url,
                      alt: _ctx.$page.props.auth.user.name,
                      rounded: "full",
                      size: "xl",
                      tooltip: true,
                      border: true,
                      overlap: true
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { class: "font-semibold text-center cursor-pointer text-primary-500 dark:text-primary-100" }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (photo.value) {
                          _push4(`<button type="button"${_scopeId3}>Clear</button>`);
                        } else {
                          _push4(`<span${_scopeId3}>Choose Photo <input type="file" class="sr-only"${_scopeId3}></span>`);
                        }
                      } else {
                        return [
                          photo.value ? (openBlock(), createBlock("button", {
                            key: 0,
                            type: "button",
                            onClick: withModifiers(($event) => photo.value = null, ["prevent"])
                          }, "Clear", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                            createTextVNode("Choose Photo "),
                            createVNode("input", {
                              type: "file",
                              class: "sr-only",
                              onChange: ($event) => photo.value = $event.target.files[0]
                            }, null, 40, ["onChange"])
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="space-y-4 md:space-y-6"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
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
                  _push3(`</div></div></div><div class="space-y-4 md:space-y-6"${_scopeId2}><div class="grid grid-cols-6 gap-6"${_scopeId2}><div class="col-span-6"${_scopeId2}>`);
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
                  if (_ctx.$page.props.features["email-verification"] && unref(page).props.auth.user.email_verified_at === null) {
                    _push3(`<div class="col-span-6"${_scopeId2}><p class="mt-2 text-sm dark:text-white"${_scopeId2}> Your email address is unverified. `);
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                      onClick: sendEmailVerification
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Click here to re-send the verification email. `);
                        } else {
                          return [
                            createTextVNode(" Click here to re-send the verification email. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p><div style="${ssrRenderStyle(verificationLinkSent.value ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600 dark:text-green-400"${_scopeId2}> A new verification link has been sent to your email address. </div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="space-y-4 md:space-y-6"${_scopeId2}><div class="col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    as: "button",
                    type: "primary",
                    rounded: "lg",
                    submit: true,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "tabler:device-floppy",
                          class: "mr-2 size-5",
                          style: !unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          class: "mr-2",
                          size: "sm",
                          style: unref(form).processing ? null : { display: "none" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(_ctx.$t("global.save"))}</span>`);
                      } else {
                        return [
                          withDirectives(createVNode(unref(Icon), {
                            icon: "tabler:device-floppy",
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
                          createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.save")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex flex-col max-w-full px-4 mx-auto space-y-6 lg:gap-8 xl:gap-0" }, [
                        createVNode("div", { class: "flex flex-col items-center justify-center w-full -space-y-20" }, [
                          createVNode("div", {
                            class: "flex items-center justify-center w-full bg-cover",
                            style: `background-image: url('${photoHeaderPreview.value ?? _ctx.$page.props.auth.user.header_url}');`
                          }, [
                            createVNode(_sfc_main$3, {
                              for: "dropzone-file",
                              class: "flex flex-col items-center justify-center w-full h-64 font-semibold border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-primary-500 dark:text-primary-100"
                            }, {
                              label: withCtx(() => [
                                photo_header.value ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: "#",
                                  onClick: withModifiers(($event) => photo_header.value = null, ["prevent"]),
                                  class: "flex flex-col items-center justify-center pt-5 pb-6",
                                  role: "button"
                                }, [
                                  createVNode(unref(Icon), {
                                    icon: "tabler:trash",
                                    class: "w-8 h-8"
                                  }),
                                  createVNode("span", { class: "mb-2 text-sm" }, "Clear")
                                ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex flex-col items-center justify-center pt-5 pb-6"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-8 h-8 mb-4",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 20 16"
                                  }, [
                                    createVNode("path", {
                                      stroke: "currentColor",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    })
                                  ])),
                                  createVNode("p", { class: "mb-2 text-sm" }, [
                                    createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                    createTextVNode(" or drag and drop")
                                  ]),
                                  createVNode("p", { class: "text-xs" }, "SVG, PNG, JPG or GIF (MAX. 800x400px)"),
                                  createVNode("input", {
                                    id: "dropzone-file",
                                    type: "file",
                                    class: "sr-only",
                                    onChange: ($event) => photo_header.value = $event.target.files[0]
                                  }, null, 40, ["onChange"])
                                ]))
                              ]),
                              _: 1
                            })
                          ], 4),
                          createVNode("div", {
                            flex: "",
                            "flex-col": "",
                            "items-center": "",
                            "justify-center": "",
                            "w-full": "",
                            "space-y-4": ""
                          }, [
                            photoPreview.value ? (openBlock(), createBlock(_sfc_main$4, {
                              key: 0,
                              src: photoPreview.value,
                              alt: _ctx.$page.props.auth.user.name,
                              rounded: "full",
                              size: "xl",
                              tooltip: true,
                              overlap: true
                            }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_sfc_main$4, {
                              key: 1,
                              src: _ctx.$page.props.auth.user.avatar_url,
                              alt: _ctx.$page.props.auth.user.name,
                              rounded: "full",
                              size: "xl",
                              tooltip: true,
                              border: true,
                              overlap: true
                            }, null, 8, ["src", "alt"])),
                            createVNode("div", null, [
                              createVNode(_sfc_main$3, { class: "font-semibold text-center cursor-pointer text-primary-500 dark:text-primary-100" }, {
                                label: withCtx(() => [
                                  photo.value ? (openBlock(), createBlock("button", {
                                    key: 0,
                                    type: "button",
                                    onClick: withModifiers(($event) => photo.value = null, ["prevent"])
                                  }, "Clear", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                    createTextVNode("Choose Photo "),
                                    createVNode("input", {
                                      type: "file",
                                      class: "sr-only",
                                      onChange: ($event) => photo.value = $event.target.files[0]
                                    }, null, 40, ["onChange"])
                                  ]))
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
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
                        ]),
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
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
                            _ctx.$page.props.features["email-verification"] && unref(page).props.auth.user.email_verified_at === null ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "col-span-6"
                            }, [
                              createVNode("p", { class: "mt-2 text-sm dark:text-white" }, [
                                createTextVNode(" Your email address is unverified. "),
                                createVNode(_component_Link, {
                                  href: _ctx.route("verification.send"),
                                  method: "post",
                                  as: "button",
                                  class: "text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                                  onClick: withModifiers(sendEmailVerification, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Click here to re-send the verification email. ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              withDirectives(createVNode("div", { class: "mt-2 text-sm font-medium text-green-600 dark:text-green-400" }, " A new verification link has been sent to your email address. ", 512), [
                                [vShow, verificationLinkSent.value]
                              ])
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                          createVNode("div", { class: "col-span-6" }, [
                            createVNode(_sfc_main$7, {
                              as: "button",
                              type: "primary",
                              rounded: "lg",
                              submit: true,
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                withDirectives(createVNode(unref(Icon), {
                                  icon: "tabler:device-floppy",
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
                                createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.save")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIHead, {
                title: _ctx.$t("global.profile_info"),
                description: _ctx.$t("global.profile_info")
              }, null, 8, ["title", "description"]),
              createVNode(_sfc_main$2, {
                class: "border-0 border-b border-gray-200 rounded-none dark:border-gray-700",
                size: "full"
              }, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "flex flex-col max-w-full px-4 mx-auto space-y-6 lg:gap-8 xl:gap-0" }, [
                      createVNode("div", { class: "flex flex-col items-center justify-center w-full -space-y-20" }, [
                        createVNode("div", {
                          class: "flex items-center justify-center w-full bg-cover",
                          style: `background-image: url('${photoHeaderPreview.value ?? _ctx.$page.props.auth.user.header_url}');`
                        }, [
                          createVNode(_sfc_main$3, {
                            for: "dropzone-file",
                            class: "flex flex-col items-center justify-center w-full h-64 font-semibold border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-primary-500 dark:text-primary-100"
                          }, {
                            label: withCtx(() => [
                              photo_header.value ? (openBlock(), createBlock("a", {
                                key: 0,
                                href: "#",
                                onClick: withModifiers(($event) => photo_header.value = null, ["prevent"]),
                                class: "flex flex-col items-center justify-center pt-5 pb-6",
                                role: "button"
                              }, [
                                createVNode(unref(Icon), {
                                  icon: "tabler:trash",
                                  class: "w-8 h-8"
                                }),
                                createVNode("span", { class: "mb-2 text-sm" }, "Clear")
                              ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex flex-col items-center justify-center pt-5 pb-6"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-8 h-8 mb-4",
                                  "aria-hidden": "true",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 20 16"
                                }, [
                                  createVNode("path", {
                                    stroke: "currentColor",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  })
                                ])),
                                createVNode("p", { class: "mb-2 text-sm" }, [
                                  createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                  createTextVNode(" or drag and drop")
                                ]),
                                createVNode("p", { class: "text-xs" }, "SVG, PNG, JPG or GIF (MAX. 800x400px)"),
                                createVNode("input", {
                                  id: "dropzone-file",
                                  type: "file",
                                  class: "sr-only",
                                  onChange: ($event) => photo_header.value = $event.target.files[0]
                                }, null, 40, ["onChange"])
                              ]))
                            ]),
                            _: 1
                          })
                        ], 4),
                        createVNode("div", {
                          flex: "",
                          "flex-col": "",
                          "items-center": "",
                          "justify-center": "",
                          "w-full": "",
                          "space-y-4": ""
                        }, [
                          photoPreview.value ? (openBlock(), createBlock(_sfc_main$4, {
                            key: 0,
                            src: photoPreview.value,
                            alt: _ctx.$page.props.auth.user.name,
                            rounded: "full",
                            size: "xl",
                            tooltip: true,
                            overlap: true
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_sfc_main$4, {
                            key: 1,
                            src: _ctx.$page.props.auth.user.avatar_url,
                            alt: _ctx.$page.props.auth.user.name,
                            rounded: "full",
                            size: "xl",
                            tooltip: true,
                            border: true,
                            overlap: true
                          }, null, 8, ["src", "alt"])),
                          createVNode("div", null, [
                            createVNode(_sfc_main$3, { class: "font-semibold text-center cursor-pointer text-primary-500 dark:text-primary-100" }, {
                              label: withCtx(() => [
                                photo.value ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  type: "button",
                                  onClick: withModifiers(($event) => photo.value = null, ["prevent"])
                                }, "Clear", 8, ["onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                  createTextVNode("Choose Photo "),
                                  createVNode("input", {
                                    type: "file",
                                    class: "sr-only",
                                    onChange: ($event) => photo.value = $event.target.files[0]
                                  }, null, 40, ["onChange"])
                                ]))
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
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
                      ]),
                      createVNode("div", { class: "space-y-4 md:space-y-6" }, [
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
                          _ctx.$page.props.features["email-verification"] && unref(page).props.auth.user.email_verified_at === null ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "col-span-6"
                          }, [
                            createVNode("p", { class: "mt-2 text-sm dark:text-white" }, [
                              createTextVNode(" Your email address is unverified. "),
                              createVNode(_component_Link, {
                                href: _ctx.route("verification.send"),
                                method: "post",
                                as: "button",
                                class: "text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                                onClick: withModifiers(sendEmailVerification, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Click here to re-send the verification email. ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            withDirectives(createVNode("div", { class: "mt-2 text-sm font-medium text-green-600 dark:text-green-400" }, " A new verification link has been sent to your email address. ", 512), [
                              [vShow, verificationLinkSent.value]
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-4 md:space-y-6" }, [
                        createVNode("div", { class: "col-span-6" }, [
                          createVNode(_sfc_main$7, {
                            as: "button",
                            type: "primary",
                            rounded: "lg",
                            submit: true,
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              withDirectives(createVNode(unref(Icon), {
                                icon: "tabler:device-floppy",
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
                              createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.save")), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ])
                    ])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Account/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
