import { defineComponent, useSlots, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Label.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
  _sfc_main$1 as _,
  _sfc_main as a
};
