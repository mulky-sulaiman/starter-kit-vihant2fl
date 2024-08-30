import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Message",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "hint",
      required: true
    },
    message: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          "mt-2 text-sm text-start text-warning-600 dark:text-warning-500": __props.type == "dirty",
          "mt-2 text-sm text-start text-success-600 dark:text-success-500": __props.type == "success",
          "mt-2 text-sm text-start text-danger-600 dark:text-danger-500": __props.type == "error",
          "mt-2 text-sm text-start text-gray-500 dark:text-gray-400": __props.type == "hint"
        }
      }, _ctx.$attrs, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "message", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
