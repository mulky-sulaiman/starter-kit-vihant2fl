import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as ApplicationLogo } from "./ApplicationLogo-gwkZfrAE.js";
const baseClass = "flex flex-col gap-y-2 items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white uppercase tracking-widest";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        href: _ctx.route("home"),
        class: baseClass
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, _ctx.$attrs, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$page.props.config["app.name"])}</span>`);
          } else {
            return [
              createVNode(ApplicationLogo, _ctx.$attrs, null, 16),
              createVNode("span", {
                textContent: toDisplayString(_ctx.$page.props.config["app.name"])
              }, null, 8, ["textContent"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Authentication/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
