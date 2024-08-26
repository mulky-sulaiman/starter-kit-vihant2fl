import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, createTextVNode, useSSRContext, useSlots, computed, defineComponent, onMounted, createSlots, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { A as ApplicationLogo } from "./ApplicationLogo-gwkZfrAE.js";
import { a as _sfc_main$g, b as _sfc_main$h, c as _sfc_main$i, d as _sfc_main$j, e as _sfc_main$l } from "./Guest-SYZpduF2.js";
import { _ as _sfc_main$k, a as useClient } from "../ssr.js";
import { Icon } from "@iconify/vue";
import { Icon as Icon$1 } from "@iconify/vue/dist/iconify.js";
const _sfc_main$f = {
  __name: "Light",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase xxs:hidden xs:block sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase xxs:hidden xs:block sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="hidden p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Light.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Dark",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full text-gray-200 bg-gray-700 border-b border-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-200 rounded cursor-pointer lg:hidden hover:bg-gray-600 dark:focus:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-200 rounded-lg lg:hidden hover:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { mode: "dark" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Dark.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Primary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full border-b text-primary-200 bg-primary-800 border-primary-600 dark:bg-primary-950 dark:border-primary-700 dark:text-white" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 rounded cursor-pointer text-primary-200 lg:hidden hover:bg-primary-600 dark:focus:bg-primary-700 dark:text-primary-400 dark:hover:bg-primary-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-primary-200 border border-primary-300 text-primary-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 rounded-lg text-primary-200 lg:hidden hover:bg-primary-600 dark:text-primary-400 dark:hover:bg-primary-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { mode: "dark" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Primary.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "Danger",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full border-b text-danger-200 bg-danger-800 border-danger-600 dark:bg-danger-950 dark:border-danger-700 dark:text-white" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 rounded cursor-pointer text-danger-200 lg:hidden hover:bg-danger-600 dark:focus:bg-danger-700 dark:text-danger-400 dark:hover:bg-danger-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-danger-500 dark:text-danger-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-danger-200 border border-danger-300 text-danger-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-danger-500 block w-full pl-10 p-2.5 dark:bg-danger-700 dark:border-danger-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-danger-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 rounded-lg text-danger-200 lg:hidden hover:bg-danger-600 dark:text-danger-400 dark:hover:bg-danger-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { mode: "dark" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { mode: "dark" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Danger.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "BorderPrimary",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full bg-white border-b-4 border-primary-700 dark:bg-gray-800 dark:border-primary-600" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, { mode: "primary" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { mode: "primary" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { mode: "primary" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/BorderPrimary.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "BorderDanger",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full bg-white border-b-4 border-danger-700 dark:bg-gray-800 dark:border-danger-600" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, { mode: "danger" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, { mode: "danger" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { mode: "danger" }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/BorderDanger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "BorderPrimaryMinimal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full bg-white border-b-4 border-primary-700 dark:bg-gray-800 dark:border-primary-600" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/BorderPrimaryMinimal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "BorderDangerMinimal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed z-30 w-full bg-white border-b-4 border-danger-700 dark:bg-gray-800 dark:border-danger-600" }, _attrs))}><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:mr-24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-8 mr-3" }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-8 mr-3" }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden lg:block lg:pl-3.5"><label for="topbar-search" class="sr-only">Search</label><div class="relative mt-1 lg:w-96"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></div><div class="flex items-center"><div class="hidden mr-3 -mb-1 sm:block"><span></span></div><button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Search</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="hidden md:flex">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "mr-2 size-5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode(unref(Icon), {
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
          _push(ssrRenderComponent(_sfc_main$k, {
            as: "link",
            type: "primary",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "mr-2 size-5"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(_ctx.$t("header.register"))}`);
              } else {
                return [
                  createVNode(unref(Icon), {
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
        _push(ssrRenderComponent(_sfc_main$k, {
          size: "sm",
          type: "light",
          as: "link",
          href: _ctx.route("auth.login"),
          rounded: "lg",
          class: "w-full mr-2 tracking-widest uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "tabler:login-2",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "tabler:login-2",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.features.registration) {
          _push(ssrRenderComponent(_sfc_main$k, {
            size: "sm",
            as: "link",
            href: _ctx.route("auth.register"),
            rounded: "lg",
            class: "w-full tracking-widest uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), {
                  icon: "tabler:user-plus",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(Icon), {
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
      }
      _push(`</div></div></div></nav>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/BorderDangerMinimal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    header: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.header === "light") {
        _push(ssrRenderComponent(_sfc_main$f, _attrs, null, _parent));
      } else if (__props.header === "dark") {
        _push(ssrRenderComponent(_sfc_main$e, _attrs, null, _parent));
      } else if (__props.header === "primary") {
        _push(ssrRenderComponent(_sfc_main$d, _attrs, null, _parent));
      } else if (__props.header === "danger") {
        _push(ssrRenderComponent(_sfc_main$c, _attrs, null, _parent));
      } else if (__props.header === "border-primary") {
        _push(ssrRenderComponent(_sfc_main$b, _attrs, null, _parent));
      } else if (__props.header === "border-danger") {
        _push(ssrRenderComponent(_sfc_main$a, _attrs, null, _parent));
      } else if (__props.header === "border-primary-minimal") {
        _push(ssrRenderComponent(_sfc_main$9, _attrs, null, _parent));
      } else if (__props.header === "border-danger-minimal") {
        _push(ssrRenderComponent(_sfc_main$8, _attrs, null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const UIDashboardHeader = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Light",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "dashboard"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar"><div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"><div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto"><div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"><h6 class="p-2 mb-2 text-lg font-bold dark:text-white">${ssrInterpolate(_ctx.$t("global.account"))}</h6><ul class="pb-2 space-y-2"><li><form action="#" method="GET" class="lg:hidden"><label for="mobile-search" class="sr-only">${ssrInterpolate(_ctx.$t("global.search"))}</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="mobile-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></div></form></li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard.account.index"),
        class: ["sidebar-link group", { "active": _ctx.$page.props.ziggy.route_name === "dashboard.account.index" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:user-cog",
              class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.profile_info"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:user-cog",
                class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.profile_info")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (_ctx.$page.props.features["security"]) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("dashboard.account.security"),
          class: ["sidebar-link group", { "active": _ctx.$page.props.ziggy.route_name === "dashboard.account.security" }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon$1), {
                icon: "tabler:lock-cog",
                class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor"
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.security"))}</span>`);
            } else {
              return [
                createVNode(unref(Icon$1), {
                  icon: "tabler:lock-cog",
                  class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
                  fill: "currentColor"
                }),
                createVNode("span", {
                  class: "ml-3",
                  "sidebar-toggle-item": ""
                }, toDisplayString(_ctx.$t("global.security")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div></aside><div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Sidebar/Light.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Dark",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "dashboard"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar"><div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-gray-700 border-r border-gray-700 dark:bg-gray-800"><div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto"><div class="flex-1 px-3 space-y-1 text-gray-200 bg-gray-700 divide-y divide-gray-600 dark:text-gray-400 dark:bg-gray-800"><h6 class="p-2 mb-2 text-lg font-bold dark:text-white">${ssrInterpolate(_ctx.$t("global.account"))}</h6><ul class="pb-2 space-y-2"><li><form action="#" method="GET" class="lg:hidden"><label for="mobile-search" class="sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="mobile-search" class="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-gray-800 focus:ring-gray-500 focus:border-gray-500" placeholder="Search"></div></form></li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-gray-200 sidebar-link group dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:user-cog",
              class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.profile"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:user-cog",
                class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-gray-200 sidebar-link group dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:lock-cog",
              class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.security"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:lock-cog",
                class: "icon group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.security")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></aside><div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Sidebar/Dark.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Primary",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "dashboard"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar"><div class="relative flex flex-col flex-1 min-h-0 pt-0 border-r bg-primary-800 border-primary-700 dark:bg-primary-950 dark:border-primary-800"><div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto"><div class="flex-1 px-3 space-y-1 divide-y divide-primary-700 dark:divide-primary-800 bg-primary-800 dark:bg-primary-950"><h6 class="p-2 mb-2 text-lg font-bold dark:text-white">${ssrInterpolate(_ctx.$t("global.account"))}</h6><ul class="pb-2 space-y-2"><li><form action="#" method="GET" class="lg:hidden"><label for="mobile-search" class="sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="mobile-search" class="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-primary-700 border-primary-600 placeholder-gray-400 text-primary-200 focus:ring-primary-500 focus:border-primary-500" placeholder="Search"></div></form></li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-primary-200 sidebar-link group dark:text-primary-400 hover:text-primary-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:user-cog",
              class: "icon group-hover:text-primary-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.profile"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:user-cog",
                class: "icon group-hover:text-primary-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-primary-200 sidebar-link group dark:text-primary-400 hover:text-primary-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:lock-cog",
              class: "icon group-hover:text-primary-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.security"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:lock-cog",
                class: "icon group-hover:text-primary-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.security")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></aside><div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Sidebar/Primary.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Danger",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "dashboard"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar"><div class="relative flex flex-col flex-1 min-h-0 pt-0 border-r bg-danger-800 border-danger-700 dark:bg-danger-950 dark:border-danger-800"><div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto"><div class="flex-1 px-3 space-y-1 divide-y divide-danger-700 dark:divide-danger-800 bg-danger-800 dark:bg-danger-950"><h6 class="p-2 mb-2 text-lg font-bold dark:text-white">${ssrInterpolate(_ctx.$t("global.account"))}</h6><ul class="pb-2 space-y-2"><li><form action="#" method="GET" class="lg:hidden"><label for="mobile-search" class="sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-danger-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" name="email" id="mobile-search" class="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-danger-700 border-danger-600 placeholder-gray-400 text-danger-200 focus:ring-danger-500 focus:border-danger-500" placeholder="Search"></div></form></li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-danger-200 sidebar-link group dark:text-danger-400 hover:text-danger-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:user-cog",
              class: "icon group-hover:text-danger-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.profile"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:user-cog",
                class: "icon group-hover:text-danger-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "text-danger-200 sidebar-link group dark:text-danger-400 hover:text-danger-900 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon$1), {
              icon: "tabler:lock-cog",
              class: "icon group-hover:text-danger-900 dark:group-hover:text-white",
              fill: "currentColor"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3" sidebar-toggle-item=""${_scopeId}>${ssrInterpolate(_ctx.$t("global.security"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon$1), {
                icon: "tabler:lock-cog",
                class: "icon group-hover:text-danger-900 dark:group-hover:text-white",
                fill: "currentColor"
              }),
              createVNode("span", {
                class: "ml-3",
                "sidebar-toggle-item": ""
              }, toDisplayString(_ctx.$t("global.security")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></aside><div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Sidebar/Danger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    sidebar: {
      type: String,
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.sidebar === "light") {
        _push(ssrRenderComponent(_sfc_main$6, _attrs, null, _parent));
      } else if (__props.sidebar === "dark") {
        _push(ssrRenderComponent(_sfc_main$5, _attrs, null, _parent));
      } else if (__props.sidebar === "primary") {
        _push(ssrRenderComponent(_sfc_main$4, _attrs, null, _parent));
      } else if (__props.sidebar === "danger") {
        _push(ssrRenderComponent(_sfc_main$3, _attrs, null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Sidebar/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UIDashboardSidebar = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Page",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "dashboard"
    },
    pageTitle: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: "Light"
    },
    breadCrumbs: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const totalBreadCrumbs = computed(() => {
      return Object.keys(props.breadCrumbs).length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (__props.pageTitle) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 pt-6 bg-white block sm:flex items-end justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700 w-full" }, _attrs))}><div class="mb-4 space-y-4"><nav class="flex mb-5" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"><li class="inline-flex items-center">`);
        if (__props.mode == "admin") {
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("admin.light"),
            class: "inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon$1), {
                  icon: "tabler:layout",
                  class: "w-5 h-5 mr-2.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("global.admin"))}</span>`);
              } else {
                return [
                  createVNode(unref(Icon$1), {
                    icon: "tabler:layout",
                    class: "w-5 h-5 mr-2.5"
                  }),
                  createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.admin")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.mode == "dashboard") {
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("dashboard"),
            class: "inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon$1), {
                  icon: "tabler:layout-dashboard",
                  class: "w-5 h-5 mr-2.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("global.dashboard"))}</span>`);
              } else {
                return [
                  createVNode(unref(Icon$1), {
                    icon: "tabler:layout-dashboard",
                    class: "w-5 h-5 mr-2.5"
                  }),
                  createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("global.dashboard")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
        if (totalBreadCrumbs.value > 0) {
          _push(`<!--[-->`);
          ssrRenderList(__props.breadCrumbs, (breadCrumb, index) => {
            _push(`<li><div class="flex items-center"><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`);
            if (breadCrumb.link.length === 0) {
              _push(`<span class="ml-1 text-gray-400 truncate md:ml-2 dark:text-gray-500" aria-current="page">${ssrInterpolate(breadCrumb.label)}</span>`);
            } else {
              _push(ssrRenderComponent(_component_Link, {
                href: _ctx.route(breadCrumb.link),
                class: "ml-1 text-gray-700 truncate hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(breadCrumb.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(breadCrumb.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div></li>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ol></nav><h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">${ssrInterpolate(__props.pageTitle)}</h1><div class="flex items-center mb-4 sm:mb-0">`);
        if (slots.leftAction) {
          ssrRenderSlot(_ctx.$slots, "leftAction", {}, null, _push, _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex items-end justify-start gap-2 mb-4 md:justify-end">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Dashboard/Header/Page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UIDashboardHeaderPage = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    header: {
      type: String,
      default: "light"
    },
    sidebar: {
      type: String,
      default: "light"
    },
    pageTitle: {
      type: String,
      default: null
    },
    breadCrumbs: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const { isClient } = useClient();
    const slots = useSlots();
    const toggleSidebar = () => {
      if (isClient.value) {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
          const toggleSidebarMobile = (sidebar2, sidebarBackdrop2, toggleSidebarMobileHamburger2, toggleSidebarMobileClose2) => {
            sidebar2.classList.toggle("hidden");
            sidebarBackdrop2.classList.toggle("hidden");
            toggleSidebarMobileHamburger2.classList.toggle("hidden");
            toggleSidebarMobileClose2.classList.toggle("hidden");
          };
          const toggleSidebarMobileEl = document.getElementById(
            "toggleSidebarMobile"
          );
          const sidebarBackdrop = document.getElementById("sidebarBackdrop");
          const toggleSidebarMobileHamburger = document.getElementById(
            "toggleSidebarMobileHamburger"
          );
          const toggleSidebarMobileClose = document.getElementById(
            "toggleSidebarMobileClose"
          );
          const toggleSidebarMobileSearch = document.getElementById(
            "toggleSidebarMobileSearch"
          );
          toggleSidebarMobileSearch.addEventListener("click", () => {
            toggleSidebarMobile(
              sidebar,
              sidebarBackdrop,
              toggleSidebarMobileHamburger,
              toggleSidebarMobileClose
            );
          });
          toggleSidebarMobileEl.addEventListener("click", () => {
            toggleSidebarMobile(
              sidebar,
              sidebarBackdrop,
              toggleSidebarMobileHamburger,
              toggleSidebarMobileClose
            );
          });
          sidebarBackdrop.addEventListener("click", () => {
            toggleSidebarMobile(
              sidebar,
              sidebarBackdrop,
              toggleSidebarMobileHamburger,
              toggleSidebarMobileClose
            );
          });
        }
      }
    };
    onMounted(() => {
      if (isClient.value) {
        toggleSidebar();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(UIDashboardHeader, { header: __props.header }, null, _parent));
      _push(`<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">`);
      _push(ssrRenderComponent(UIDashboardSidebar, { sidebar: __props.sidebar }, null, _parent));
      _push(`<div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"><main>`);
      if (__props.pageTitle) {
        _push(ssrRenderComponent(UIDashboardHeaderPage, {
          mode: "dashboard",
          breadCrumbs: __props.breadCrumbs,
          pageTitle: __props.pageTitle
        }, createSlots({ _: 2 }, [
          slots.leftAction ? {
            name: "leftAction",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "leftAction", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "leftAction")
                ];
              }
            }),
            key: "0"
          } : void 0,
          slots.actions ? {
            name: "actions",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "actions")
                ];
              }
            }),
            key: "1"
          } : void 0
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
