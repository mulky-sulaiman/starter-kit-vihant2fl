import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "sm"
    },
    title: {
      type: String,
      default: null
    },
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800", {
          "max-w-xs": __props.size === "xs",
          "max-w-sm": __props.size === "sm",
          "max-w-md": __props.size === "md",
          "max-w-lg": __props.size === "lg",
          "max-w-xl": __props.size === "xl",
          "max-w-2xl": __props.size === "2xl",
          "max-w-3xl": __props.size === "3xl",
          "max-w-4xl": __props.size === "4xl",
          "max-w-5xl": __props.size === "5xl",
          "max-w-6xl": __props.size === "6xl",
          "max-w-7xl": __props.size === "7xl",
          "max-w-full": __props.size === "full",
          "fixed top-0 left-0 z-50 min-w-full min-h-full": __props.fullScreen,
          "": !__props.fullScreen
        }]
      }, _ctx.$attrs, _attrs))}>`);
      if (__props.title) {
        _push(`<h3 class="mb-4 text-xl font-semibold dark:text-white">${ssrInterpolate(__props.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Card/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
