import { defineComponent, mergeModels, useAttrs, useSlots, useModel, ref, onMounted, watchEffect, mergeProps, useSSRContext, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, renderSlot, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Label-D1c1ZHt3.js";
import { r as randomID } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Message-99K0ToBB.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Index",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    identifier: {
      type: String,
      default: null
    },
    hasError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    formIsDirty: {
      type: Boolean,
      default: false
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["is-dirty"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const attrs = useAttrs();
    useSlots();
    const emits = __emit;
    const props = __props;
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    const generatedID = "checkbox-" + randomID(15);
    const initial = ref(false);
    const id = ref(null);
    const name = ref(null);
    const isRequired = ref(false);
    const isDirty = ref(false);
    onMounted(() => {
      initial.value = model.value;
      id.value = attrs.id != void 0 ? attrs.id : props.identifier ? props.identifier : generatedID;
      name.value = attrs.name != void 0 ? attrs.name : props.identifier ? props.identifier : generatedID;
      isRequired.value = attrs.required != void 0 ? true : false;
      if (attrs.autofocus != void 0) {
        input.value.focus();
      }
    });
    watchEffect(() => {
      if (props.formIsDirty && initial.value != model.value) {
        emits("is-dirty", true);
        isDirty.value = true;
      } else {
        emits("is-dirty", false);
        isDirty.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        ref_key: "input",
        ref: input,
        type: "checkbox",
        checked: Array.isArray(model.value) ? ssrLooseContain(model.value, null) : model.value,
        class: ["checkbox", {
          "checkbox-is-invalid": __props.hasError && !isDirty.value,
          "checkbox-is-dirty": isDirty.value,
          "checkbox-is-valid": __props.isSuccess && !isDirty.value
        }]
      }, _ctx.$attrs, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Checkbox/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Group",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    identifier: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    success: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    formIsDirty: {
      type: Boolean,
      default: false
    },
    useMessage: {
      type: Boolean,
      default: true
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const attrs = useAttrs();
    const slots = useSlots();
    const generatedID = "checkbox-" + randomID(15);
    const id = ref(null);
    const name = ref(null);
    const isRequired = ref(false);
    const isDirty = ref(false);
    const hasError = ref(false);
    const isSuccess = ref(false);
    onMounted(() => {
      id.value = attrs.id != void 0 ? attrs.id : props.identifier ? props.identifier : generatedID;
      name.value = attrs.name != void 0 ? attrs.name : props.identifier ? props.identifier : generatedID;
      isRequired.value = attrs.required != void 0 ? true : false;
    });
    watchEffect(() => {
      if (props.error) {
        hasError.value = true;
      } else {
        hasError.value = false;
      }
      if (props.success) {
        isSuccess.value = true;
      } else {
        isSuccess.value = false;
      }
    });
    const setDirty = (e) => {
      if (e) {
        isDirty.value = true;
      } else {
        isDirty.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: name.value,
        required: isRequired.value,
        dirty: isDirty.value,
        error: hasError.value,
        success: isSuccess.value,
        class: "flex items-center justify-start gap-3 cursor-pointer !mb-0"
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
              modelValue: model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              identifier: __props.identifier,
              id: id.value,
              name: name.value,
              formIsDirty: __props.formIsDirty,
              hasError: hasError.value,
              isSuccess: isSuccess.value
            }, _ctx.$attrs, { onIsDirty: setDirty }), null, _parent2, _scopeId));
            if (__props.label) {
              _push2(`<!--[-->${ssrInterpolate(__props.label)}<!--]-->`);
            } else if (unref(slots).label) {
              ssrRenderSlot(_ctx.$slots, "label", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$1, mergeProps({
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                identifier: __props.identifier,
                id: id.value,
                name: name.value,
                formIsDirty: __props.formIsDirty,
                hasError: hasError.value,
                isSuccess: isSuccess.value
              }, _ctx.$attrs, { onIsDirty: setDirty }), null, 16, ["modelValue", "onUpdate:modelValue", "identifier", "id", "name", "formIsDirty", "hasError", "isSuccess"]),
              __props.label ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(__props.label), 1)
              ], 64)) : unref(slots).label ? renderSlot(_ctx.$slots, "label", { key: 1 }) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value && !isDirty.value) {
          _push(ssrRenderComponent(_sfc_main$3, { type: "error" }, {
            message: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.error)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.error), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (isDirty.value) {
          _push(ssrRenderComponent(_sfc_main$3, { type: "dirty" }, {
            message: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("auth.dirty_message"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("auth.dirty_message")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (isSuccess.value && !isDirty.value) {
          _push(ssrRenderComponent(_sfc_main$3, { type: "success" }, {
            message: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.success)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.success), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.hint || unref(slots).hint) {
          _push(ssrRenderComponent(_sfc_main$3, { type: "hint" }, {
            message: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (__props.hint) {
                  _push2(`<!--[-->${ssrInterpolate(__props.hint)}<!--]-->`);
                } else if (unref(slots).hint) {
                  ssrRenderSlot(_ctx.$slots, "hint", {}, null, _push2, _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  __props.hint ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(__props.hint), 1)
                  ], 64)) : unref(slots).hint ? renderSlot(_ctx.$slots, "hint", { key: 1 }) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Checkbox/Group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
