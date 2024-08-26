import { defineComponent, mergeProps, useSSRContext, withCtx, renderSlot, resolveComponent, openBlock, createBlock, createVNode, createTextVNode, unref, toDisplayString, computed, ref, onMounted, watchEffect, createCommentVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { usePage, router } from "@inertiajs/vue3";
import { r as randomID, c as _export_sfc, d as useConfirmStore, _ as _sfc_main$a } from "../ssr.js";
import { Icon as Icon$1 } from "@iconify/vue/dist/iconify.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Trigger",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: "dropdown-" + randomID(15)
    },
    useArrow: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        id: __props.id + "-trigger",
        "data-dropdown-toggle": __props.id,
        class: "flex items-center text-sm font-medium text-gray-900 rounded-full pe-1 hover:text-primary-600 dark:hover:text-primary-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white",
        type: "button"
      }, _ctx.$attrs, _attrs))}><span class="sr-only">${ssrInterpolate(_ctx.$t("global.open"))}</span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.useArrow) {
        _push(`<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Dropdown/Trigger.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Menu",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: "dropdown-" + randomID(15)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: "z-10 hidden text-sm text-gray-700 bg-white divide-y divide-gray-100 rounded-lg shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600 dark:text-gray-200"
      }, _ctx.$attrs, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Dropdown/Menu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: "dropdown-" + randomID(15)
    },
    useArrow: {
      type: Boolean,
      default: true
    },
    menuClass: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({
        id: __props.id,
        useArrow: __props.useArrow
      }, _ctx.$attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "trigger")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        id: __props.id,
        class: __props.menuClass
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Dropdown/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      default: "link"
    },
    useLinkClass: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (__props.as === "a") {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: { "link": __props.useLinkClass }
        }, _ctx.$attrs, _attrs))} data-v-69c40c5e>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else if (__props.as === "link") {
        _push(ssrRenderComponent(_component_Link, mergeProps({
          class: { "link": __props.useLinkClass }
        }, _ctx.$attrs, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Dropdown/Item.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const UIMenuDropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-69c40c5e"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({
        id: "notification-menu",
        class: ["p-2 rounded-lg", {
          "!text-gray-500 rounded-lg hover:!text-gray-900 hover:!bg-gray-100 dark:!text-gray-400 dark:hover:!text-white dark:hover:!bg-gray-700": __props.mode == "light",
          "!text-gray-200 rounded-lg hover:!bg-gray-600 dark:!text-gray-400 dark:hover:!text-white dark:hover:!bg-gray-700": __props.mode == "dark",
          "!text-danger-700 rounded-lg hover:!text-danger-800 hover!:bg-gray-100 dark:!text-danger-600 dark:hover:!text-danger-300 dark:hover:!bg-gray-700": __props.mode == "danger",
          "!text-primary-700 rounded-lg hover:!text-primary-800 hover:!bg-gray-100 dark:!text-primary-600 dark:hover:!text-primary-300 dark:hover:!bg-gray-700": __props.mode == "primary"
        }],
        menuClass: "z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 !w-100",
        useArrow: false
      }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"${_scopeId}> Notifications </div><div${_scopeId}>`);
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-shrink-0"${_scopeId2}><img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Jese image"${_scopeId2}><div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700"${_scopeId2}><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"${_scopeId2}></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"${_scopeId2}></path></svg></div></div><div class="w-full pl-3"${_scopeId2}><div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"${_scopeId2}>New message from <span class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>Bonnie Green</span>: &quot;Hey, what&#39;s up? All set for the presentation?&quot; </div><div class="text-xs font-medium text-primary-700 dark:text-primary-400"${_scopeId2}>a few moments ago </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png",
                        alt: "Jese image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" }),
                          createVNode("path", { d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createTextVNode("New message from "),
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Bonnie Green"),
                        createTextVNode(`: "Hey, what's up? All set for the presentation?" `)
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "a few moments ago ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-shrink-0"${_scopeId2}><img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png" alt="Jese image"${_scopeId2}><div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700"${_scopeId2}><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"${_scopeId2}></path></svg></div></div><div class="w-full pl-3"${_scopeId2}><div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"${_scopeId2}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>Jese leos</span> and <span class="font-medium text-gray-900 dark:text-white"${_scopeId2}>5 others</span> started following you. </div><div class="text-xs font-medium text-primary-700 dark:text-primary-400"${_scopeId2}>10 minutes ago </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png",
                        alt: "Jese image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Jese leos"),
                        createTextVNode(" and "),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, "5 others"),
                        createTextVNode(" started following you. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "10 minutes ago ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-shrink-0"${_scopeId2}><img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png" alt="Joseph image"${_scopeId2}><div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700"${_scopeId2}><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"${_scopeId2}></path></svg></div></div><div class="w-full pl-3"${_scopeId2}><div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"${_scopeId2}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white"${_scopeId2}>141 others</span> love your story. See it and view more stories. </div><div class="text-xs font-medium text-primary-700 dark:text-primary-400"${_scopeId2}>44 minutes ago </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png",
                        alt: "Joseph image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Joseph Mcfall"),
                        createTextVNode(" and "),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, "141 others"),
                        createTextVNode(" love your story. See it and view more stories. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "44 minutes ago ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-shrink-0"${_scopeId2}><img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png" alt="Leslie image"${_scopeId2}><div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700"${_scopeId2}><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"${_scopeId2}></path></svg></div></div><div class="w-full pl-3"${_scopeId2}><div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"${_scopeId2}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-primary-700 dark:text-primary-500"${_scopeId2}>@bonnie.green</span> what do you say? </div><div class="text-xs font-medium text-primary-700 dark:text-primary-400"${_scopeId2}>1 hour ago </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png",
                        alt: "Leslie image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Leslie Livingston"),
                        createTextVNode(" mentioned you in a comment: "),
                        createVNode("span", { class: "font-medium text-primary-700 dark:text-primary-500" }, "@bonnie.green"),
                        createTextVNode(" what do you say? ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "1 hour ago ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex-shrink-0"${_scopeId2}><img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png" alt="Robert image"${_scopeId2}><div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700"${_scopeId2}><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"${_scopeId2}></path></svg></div></div><div class="w-full pl-3"${_scopeId2}><div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"${_scopeId2}><span class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend. </div><div class="text-xs font-medium text-primary-700 dark:text-primary-400"${_scopeId2}>3 hours ago </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png",
                        alt: "Robert image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Robert Brown"),
                        createTextVNode(" posted a new video: Glassmorphism - learn how to implement the new design trend. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "3 hours ago ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "#",
              class: "block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="inline-flex items-center"${_scopeId2}><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"${_scopeId2}></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"${_scopeId2}></path></svg> View all </div>`);
                } else {
                  return [
                    createVNode("div", { class: "inline-flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 mr-2",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createTextVNode(" View all ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400" }, " Notifications "),
              createVNode("div", null, [
                createVNode(UIMenuDropdownItem, {
                  as: "a",
                  useLinkClass: false,
                  href: "#",
                  class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png",
                        alt: "Jese image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" }),
                          createVNode("path", { d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createTextVNode("New message from "),
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Bonnie Green"),
                        createTextVNode(`: "Hey, what's up? All set for the presentation?" `)
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "a few moments ago ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(UIMenuDropdownItem, {
                  as: "a",
                  useLinkClass: false,
                  href: "#",
                  class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png",
                        alt: "Jese image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Jese leos"),
                        createTextVNode(" and "),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, "5 others"),
                        createTextVNode(" started following you. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "10 minutes ago ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(UIMenuDropdownItem, {
                  as: "a",
                  useLinkClass: false,
                  href: "#",
                  class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png",
                        alt: "Joseph image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Joseph Mcfall"),
                        createTextVNode(" and "),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, "141 others"),
                        createTextVNode(" love your story. See it and view more stories. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "44 minutes ago ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(UIMenuDropdownItem, {
                  as: "a",
                  useLinkClass: false,
                  href: "#",
                  class: "flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png",
                        alt: "Leslie image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Leslie Livingston"),
                        createTextVNode(" mentioned you in a comment: "),
                        createVNode("span", { class: "font-medium text-primary-700 dark:text-primary-500" }, "@bonnie.green"),
                        createTextVNode(" what do you say? ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "1 hour ago ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(UIMenuDropdownItem, {
                  as: "a",
                  useLinkClass: false,
                  href: "#",
                  class: "flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "rounded-full w-11 h-11",
                        src: "https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png",
                        alt: "Robert image"
                      }),
                      createVNode("div", { class: "absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3 h-3 text-white",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", { d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "w-full pl-3" }, [
                      createVNode("div", { class: "text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400" }, [
                        createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "Robert Brown"),
                        createTextVNode(" posted a new video: Glassmorphism - learn how to implement the new design trend. ")
                      ]),
                      createVNode("div", { class: "text-xs font-medium text-primary-700 dark:text-primary-400" }, "3 hours ago ")
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(UIMenuDropdownItem, {
                as: "a",
                useLinkClass: false,
                href: "#",
                class: "block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "inline-flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 mr-2",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                        "clip-rule": "evenodd"
                      })
                    ])),
                    createTextVNode(" View all ")
                  ])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Notification.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        id: "app-switcher-menu",
        class: ["p-2 rounded-lg sm:flex", {
          "!text-gray-500 rounded-lg hover:!text-gray-900 hover:!bg-gray-100 dark:!text-gray-400 dark:hover:!text-white dark:hover:!bg-gray-700": __props.mode == "light",
          "!text-gray-200 rounded-lg hover:!bg-gray-600 dark:!text-gray-400 dark:hover:!text-white dark:hover:!bg-gray-700": __props.mode == "dark",
          "!text-danger-700 rounded-lg hover:!text-danger-800 hover:!bg-gray-100 dark:!text-danger-600 dark:hover:!text-danger-300 dark:hover:!bg-gray-700": __props.mode == "danger",
          "!text-primary-700 rounded-lg hover:!text-primary-800 hover:!bg-gray-100 dark:!text-primary-600 dark:hover:!text-primary-300 dark:hover:!bg-gray-700": __props.mode == "primary"
        }],
        menuClass: "max-w-sm my-4 overflow-hidden text-base list-none",
        useArrow: false
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("header.app_switcher"))}</div><div class="grid grid-cols-3 gap-4 p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "link",
              useLinkClass: false,
              href: _ctx.route("home"),
              class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "tabler:home",
                    class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("header.home"))}</div>`);
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "tabler:home",
                      class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("header.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "link",
              useLinkClass: false,
              href: _ctx.route("dashboard"),
              class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "tabler:layout-dashboard",
                    class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(_ctx.$t("header.dashboard"))}</div>`);
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "tabler:layout-dashboard",
                      class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("header.dashboard")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "link",
              useLinkClass: false,
              href: _ctx.route("home"),
              class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "tabler:layout",
                    class: "mx-auto mb-1 text-danger-700 w-7 h-7 dark:text-danger-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-sm font-medium text-danger-700 dark:text-danger-400"${_scopeId2}>${ssrInterpolate(_ctx.$t("header.admin"))}</div>`);
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "tabler:layout",
                      class: "mx-auto mb-1 text-danger-700 w-7 h-7 dark:text-danger-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-danger-700 dark:text-danger-400" }, toDisplayString(_ctx.$t("header.admin")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("header.app_switcher")), 1),
              createVNode("div", { class: "grid grid-cols-3 gap-4 p-4" }, [
                createVNode(UIMenuDropdownItem, {
                  as: "link",
                  useLinkClass: false,
                  href: _ctx.route("home"),
                  class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: "tabler:home",
                      class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("header.home")), 1)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(UIMenuDropdownItem, {
                  as: "link",
                  useLinkClass: false,
                  href: _ctx.route("dashboard"),
                  class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: "tabler:layout-dashboard",
                      class: "mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("header.dashboard")), 1)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(UIMenuDropdownItem, {
                  as: "link",
                  useLinkClass: false,
                  href: _ctx.route("home"),
                  class: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Icon), {
                      icon: "tabler:layout",
                      class: "mx-auto mb-1 text-danger-700 w-7 h-7 dark:text-danger-400"
                    }),
                    createVNode("div", { class: "text-sm font-medium text-danger-700 dark:text-danger-400" }, toDisplayString(_ctx.$t("header.admin")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Switcher/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "sm"
    },
    rounded: {
      type: String,
      default: "sm"
    },
    border: {
      type: Boolean,
      default: false
    },
    overlap: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: null
    },
    indicator: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "success"
    },
    placement: {
      type: String,
      default: "bottom"
    }
  },
  setup(__props) {
    const generatedID = randomID(15);
    const props = __props;
    const sizeClass = computed(() => {
      return {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-20 h-20",
        xl: "w-36 h-36"
      }[props.size];
    });
    const avatarID = ref(null);
    const roundedClass = computed(() => {
      return {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none"
      }[props.rounded];
    });
    const borderClass = computed(() => {
      if (props.overlap) {
        return {
          true: "bg-gray-50 dark:bg-gray-800 p-1 ring-2 ring-gray-50 dark:ring-gray-800",
          false: ""
        }[props.border];
      }
      return {
        true: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
        false: ""
      }[props.border];
    });
    const colorClass = computed(() => {
      if (props.indicator) {
        return "bg-" + props.color + "-500 dark:bg-" + props.color + "-600";
      }
      return null;
    });
    const placementClass = computed(() => {
      if (props.indicator) {
        if (props.rounded === "full") {
          return {
            top: "top-0 left-7",
            bottom: "bottom-0 left-7"
          }[props.placement];
        } else {
          return {
            top: "top-0 left-8",
            bottom: "bottom-0 left-8"
          }[props.placement];
        }
      }
      return null;
    });
    onMounted(() => {
      avatarID.value = props.id ? props.id : "avatar-" + generatedID;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><img${ssrRenderAttrs(mergeProps({
        id: avatarID.value,
        class: [sizeClass.value, roundedClass.value, borderClass.value],
        alt: __props.alt,
        "data-tooltip-target": `${avatarID.value}-tooltip`
      }, _ctx.$attrs))}>`);
      if (__props.indicator) {
        _push(`<span class="${ssrRenderClass([[colorClass.value, placementClass.value], "absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full"])}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttr("id", `${avatarID.value}-tooltip`)} role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700" style="${ssrRenderStyle(__props.tooltip ? null : { display: "none" })}">${ssrInterpolate(__props.alt)} <div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Avatar/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const confirmTarget = "logout-from-user-menu";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "User",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    usePage();
    const confirm = useConfirmStore();
    const confirmDialogParams = {
      type: "warning",
      size: "sm",
      headTitle: "auth.logout.headTitle",
      title: "auth.logout.title",
      message: "auth.logout.message",
      labelCancel: "auth.logout.labelCancel",
      labelOk: "auth.logout.labelOk",
      target: confirmTarget
    };
    const setConfirmDialog = (k = null) => {
      if (k) confirmDialogParams["key"] = k;
      confirm.$patch(confirmDialogParams);
    };
    const logout = () => {
      router.post("/logout");
    };
    watchEffect(() => {
      if (confirm.isValidConfirmation(confirmTarget)) {
        logout();
        confirm.$reset();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({
        id: "user-menu",
        class: ["!pe-0 flex flex-shrink-0 mx-3 text-sm rounded-full md:mr-0 focus:ring-4", {
          "!bg-gray-800 dark:!bg-gray-800 focus:!ring-gray-300 dark:focus:!ring-gray-600": __props.mode == "light",
          "!bg-gray-600 dark:!bg-gray-700 focus:!ring-gray-300 dark:focus:!ring-gray-600": __props.mode == "dark",
          "!bg-danger-700 dark:!bg-danger-600 focus:!ring-danger-700 dark:focus:!ring-danger-600": __props.mode == "danger",
          "!bg-primary-700 dark:!bg-primary-600 focus:!ring-primary-700 dark:focus:!ring-primary-600": __props.mode == "primary"
        }],
        menuClass: "z-50 hidden w-56 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600",
        useArrow: false
      }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              size: "md",
              rounded: "full",
              tooltip: false,
              src: _ctx.$page.props.auth.user.avatar_url,
              alt: _ctx.$page.props.auth.user.name,
              indicator: true,
              placement: "bottom",
              color: _ctx.$page.props.auth.user.active ? "success" : "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                size: "md",
                rounded: "full",
                tooltip: false,
                src: _ctx.$page.props.auth.user.avatar_url,
                alt: _ctx.$page.props.auth.user.name,
                indicator: true,
                placement: "bottom",
                color: _ctx.$page.props.auth.user.active ? "success" : "danger"
              }, null, 8, ["src", "alt", "color"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 py-3"${_scopeId}><span class="block text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</span></div><ul class="py-1 font-light text-gray-500 pointer-events-auto dark:text-gray-400" aria-labelledby="userMenuDropdownButton"${_scopeId}><li${_scopeId}><p class="block px-4 py-2 text-xs font-light text-gray-500 uppercase truncate dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("global.account_settings"))}</p></li><li${_scopeId}>`);
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "link",
              useLinkClass: false,
              href: _ctx.route("dashboard.account.index"),
              class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "tabler:user-cog",
                    class: "w-5 h-5 mr-2 text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("global.profile_information"))}`);
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "tabler:user-cog",
                      class: "w-5 h-5 mr-2 text-gray-400"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("global.profile_information")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li>`);
            if (_ctx.$page.props.features["security"]) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(UIMenuDropdownItem, {
                as: "link",
                useLinkClass: false,
                href: _ctx.route("dashboard.account.security"),
                class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "tabler:lock-cog",
                      class: "w-5 h-5 mr-2 text-gray-400"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(_ctx.$t("global.security"))}`);
                  } else {
                    return [
                      createVNode(unref(Icon), {
                        icon: "tabler:lock-cog",
                        class: "w-5 h-5 mr-2 text-gray-400"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("global.security")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul><ul class="py-1 font-light text-danger-700 dark:text-danger-600" aria-labelledby="dropdown"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(UIMenuDropdownItem, {
              as: "a",
              useLinkClass: false,
              href: "/logout",
              "data-modal-target": "confirm-dialog-modal",
              "data-modal-toggle": "confirm-dialog-modal",
              onClick: ($event) => setConfirmDialog(),
              class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "tabler:logout",
                    class: "w-5 h-5 mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("global.logout"))}`);
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "tabler:logout",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("global.logout")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul>`);
          } else {
            return [
              createVNode("div", { class: "px-4 py-3" }, [
                createVNode("span", {
                  class: "block text-sm font-semibold text-gray-900 dark:text-white",
                  textContent: toDisplayString(_ctx.$page.props.auth.user.name)
                }, null, 8, ["textContent"]),
                createVNode("span", {
                  class: "block text-sm font-light text-gray-500 truncate dark:text-gray-400",
                  textContent: toDisplayString(_ctx.$page.props.auth.user.email)
                }, null, 8, ["textContent"])
              ]),
              createVNode("ul", {
                class: "py-1 font-light text-gray-500 pointer-events-auto dark:text-gray-400",
                "aria-labelledby": "userMenuDropdownButton"
              }, [
                createVNode("li", null, [
                  createVNode("p", { class: "block px-4 py-2 text-xs font-light text-gray-500 uppercase truncate dark:text-gray-400" }, toDisplayString(_ctx.$t("global.account_settings")), 1)
                ]),
                createVNode("li", null, [
                  createVNode(UIMenuDropdownItem, {
                    as: "link",
                    useLinkClass: false,
                    href: _ctx.route("dashboard.account.index"),
                    class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: "tabler:user-cog",
                        class: "w-5 h-5 mr-2 text-gray-400"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("global.profile_information")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _ctx.$page.props.features["security"] ? (openBlock(), createBlock("li", { key: 0 }, [
                  createVNode(UIMenuDropdownItem, {
                    as: "link",
                    useLinkClass: false,
                    href: _ctx.route("dashboard.account.security"),
                    class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: "tabler:lock-cog",
                        class: "w-5 h-5 mr-2 text-gray-400"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("global.security")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("ul", {
                class: "py-1 font-light text-danger-700 dark:text-danger-600",
                "aria-labelledby": "dropdown"
              }, [
                createVNode("li", null, [
                  createVNode(UIMenuDropdownItem, {
                    as: "a",
                    useLinkClass: false,
                    href: "/logout",
                    "data-modal-target": "confirm-dialog-modal",
                    "data-modal-toggle": "confirm-dialog-modal",
                    onClick: withModifiers(($event) => setConfirmDialog(), ["prevent"]),
                    class: "flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: "tabler:logout",
                        class: "w-5 h-5 mr-2"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("global.logout")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/User.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["w-px h-5 mx-1 dark:bg-gray-600 lg:inline", { "bg-gray-200": __props.mode == "light", "bg-gray-500": __props.mode == "dark" }]
      }, _ctx.$attrs, _attrs))}></span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Guest",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="hidden md:flex">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        type: "light",
        as: "link",
        href: _ctx.route("auth.login"),
        rounded: "lg",
        class: "w-full mr-2 tracking-widest uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:login-2",
              class: "mr-2 size-5"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("header.login")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.features.registration) {
        _push(ssrRenderComponent(_sfc_main$a, {
          as: "link",
          type: "primary",
          href: _ctx.route("auth.register"),
          rounded: "lg",
          class: "w-full tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon$1), {
                icon: "tabler:user-plus",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
            } else {
              return [
                createVNode(unref(Icon$1), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("header.register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex mr-1 md:hidden">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        size: "sm",
        type: "light",
        as: "link",
        href: _ctx.route("auth.login"),
        rounded: "lg",
        class: "w-full mr-2 tracking-widest uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:login-2",
              class: "size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:login-2",
                class: "size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.features.registration) {
        _push(ssrRenderComponent(_sfc_main$a, {
          size: "sm",
          as: "link",
          href: _ctx.route("auth.register"),
          rounded: "lg",
          class: "w-full tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon$1), {
                icon: "tabler:user-plus",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon$1), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Menu/Guest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$3 as _,
  _sfc_main$5 as a,
  _sfc_main$1 as b,
  _sfc_main$4 as c,
  _sfc_main$2 as d,
  _sfc_main as e
};
