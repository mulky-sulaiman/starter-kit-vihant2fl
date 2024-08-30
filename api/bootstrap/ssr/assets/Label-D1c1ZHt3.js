import { defineComponent, useSlots, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    dirty: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["label", {
          "label-is-invalid": __props.error,
          "label-is-valid": __props.success,
          "label-is-dirty": __props.dirty && (!__props.error && !__props.success),
          "required": __props.required
        }]
      }, _ctx.$attrs, _attrs))}>`);
      if (__props.label) {
        _push(`<!--[-->${ssrInterpolate(__props.label)}<!--]-->`);
      } else if (unref(slots).label) {
        ssrRenderSlot(_ctx.$slots, "label", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Label.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
