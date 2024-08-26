import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { A as ApplicationLogo } from "./ApplicationLogo-gwkZfrAE.js";
import { a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$7 } from "./Guest-SYZpduF2.js";
import { c as _export_sfc } from "../ssr.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed w-full" }, _attrs))}><nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900"><div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, {
              class: "h-6 mr-3 sm:h-9",
              alt: "VIFLLAT Logo"
            }, null, _parent2, _scopeId));
            _push2(`<span class="self-center text-xl font-semibold tracking-widest uppercase xxs:hidden xs:inline-block whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, {
                class: "h-6 mr-3 sm:h-9",
                alt: "VIFLLAT Logo"
              }),
              createVNode("span", { class: "self-center text-xl font-semibold tracking-widest uppercase xxs:hidden xs:inline-block whitespace-nowrap dark:text-white" }, toDisplayString(_ctx.$page.props.config["app.name"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center lg:order-2"><div class="hidden mt-2 mr-4 sm:inline-block"><span></span></div>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      }
      _push(`<button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div><div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2"><ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: ["block py-2 pl-3 pr-4", {
          "text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white": _ctx.$page.props.ziggy.route_name === "home",
          "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700": _ctx.$page.props.ziggy.route_name !== "home"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home`);
          } else {
            return [
              createTextVNode(" Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.index"),
        class: ["block py-2 pl-3 pr-4", {
          "text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white": _ctx.$page.props.ziggy.route_name === "user.index",
          "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700": _ctx.$page.props.ziggy.route_name !== "user.index"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Users`);
          } else {
            return [
              createTextVNode(" Users")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Landing/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Landing/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UILandingFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Landing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div><span data-slot="memek"></span></div>`);
      _push(ssrRenderComponent(UILandingFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
