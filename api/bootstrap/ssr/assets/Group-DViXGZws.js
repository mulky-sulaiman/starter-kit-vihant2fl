import { defineComponent, mergeModels, useAttrs, useSlots, ref, useModel, watch, watchEffect, onMounted, mergeProps, useSSRContext, unref, createSlots, withCtx, createTextVNode, toDisplayString, renderSlot, openBlock, createBlock, Fragment, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Message-CD5xZHYU.js";
import { a as useClient, r as randomID, c as _export_sfc } from "../ssr.js";
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
    alignment: {
      type: String,
      default: "start"
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
    const { isClient } = useClient();
    const attrs = useAttrs();
    useSlots();
    const emits = __emit;
    const props = __props;
    const alignmentClass = ref(`justify-${props.alignment}`);
    const model = useModel(__props, "modelValue");
    ref(null);
    const generatedID = "pin-" + randomID(15);
    const initial = ref(null);
    const id = ref(null);
    const name = ref(null);
    const isDirty = ref(false);
    const code1 = ref("");
    const code2 = ref("");
    const code3 = ref("");
    const code4 = ref("");
    const code5 = ref("");
    const code6 = ref("");
    const focusNextInput = (el, prevId, nextId) => {
      if (isClient.value) {
        if (el.value.length === 0) {
          if (prevId) {
            document.getElementById(prevId).focus();
          }
        } else {
          if (nextId) {
            document.getElementById(nextId).focus();
          }
        }
      }
    };
    const initCodes = () => {
      if (isClient.value) {
        document.querySelectorAll("[data-focus-input-init]").forEach(function(element) {
          element.addEventListener("keyup", function() {
            const prevId = this.getAttribute("data-focus-input-prev");
            const nextId = this.getAttribute("data-focus-input-next");
            focusNextInput(this, prevId, nextId);
          });
        });
      }
    };
    const updateCodes = () => {
      const codes = code1.value + code2.value + code3.value + code4.value + code5.value + code6.value;
      model.value = codes;
    };
    watch(code1, () => {
      updateCodes();
    });
    watch(code2, () => {
      updateCodes();
    });
    watch(code3, () => {
      updateCodes();
    });
    watch(code4, () => {
      updateCodes();
    });
    watch(code5, () => {
      updateCodes();
    });
    watch(code6, () => {
      updateCodes();
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
    onMounted(() => {
      initial.value = model.value;
      id.value = attrs.id != void 0 ? attrs.id : props.identifier ? props.identifier : generatedID;
      name.value = attrs.name != void 0 ? attrs.name : props.identifier ? props.identifier : generatedID;
      initCodes();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center mb-2 space-x-2 rtl:space-x-reverse", [alignmentClass.value]]
      }, _ctx.$attrs))} data-v-7768ca9d><div data-v-7768ca9d><label for="code-1" class="sr-only" data-v-7768ca9d>First code</label><input type="text" maxlength="1" autofocus data-focus-input-init data-focus-input-next="code-2" id="code-1"${ssrRenderAttr("value", code1.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div><div data-v-7768ca9d><label for="code-2" class="sr-only" data-v-7768ca9d>Second code</label><input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2"${ssrRenderAttr("value", code2.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div><div data-v-7768ca9d><label for="code-3" class="sr-only" data-v-7768ca9d>Third code</label><input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3"${ssrRenderAttr("value", code3.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div><div data-v-7768ca9d><label for="code-4" class="sr-only" data-v-7768ca9d>Fourth code</label><input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4"${ssrRenderAttr("value", code4.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div><div data-v-7768ca9d><label for="code-5" class="sr-only" data-v-7768ca9d>Fifth code</label><input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5"${ssrRenderAttr("value", code5.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div><div data-v-7768ca9d><label for="code-6" class="sr-only" data-v-7768ca9d>Sixth code</label><input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6"${ssrRenderAttr("value", code6.value)} class="${ssrRenderClass([{
        "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
        "is-invalid": __props.hasError,
        "is-valid": __props.isSuccess
      }, "pin input"])}" required data-v-7768ca9d></div></div><input${ssrRenderAttr("id", id.value)}${ssrRenderAttr("name", name.value)} type="text" class="sr-only"${ssrRenderAttr("value", model.value)} data-v-7768ca9d><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Pin/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormPin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7768ca9d"]]);
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
    },
    alignment: {
      type: String,
      default: "start"
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const alignmentClass = ref(`flex justify-${props.alignment}`);
    const model = useModel(__props, "modelValue");
    const attrs = useAttrs();
    const slots = useSlots();
    const generatedID = "pin-" + randomID(15);
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
      if (__props.label || unref(slots).label) {
        _push(ssrRenderComponent(_sfc_main$2, {
          for: name.value,
          required: isRequired.value,
          dirty: isDirty.value,
          error: hasError.value,
          success: isSuccess.value,
          class: [alignmentClass.value]
        }, createSlots({ _: 2 }, [
          __props.label ? {
            name: "label",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.label), 1)
                ];
              }
            }),
            key: "0"
          } : unref(slots).label ? {
            name: "label",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "label", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "label")
                ];
              }
            }),
            key: "1"
          } : void 0
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(FormPin, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        identifier: __props.identifier,
        id: id.value,
        name: name.value,
        alignment: __props.alignment,
        formIsDirty: __props.formIsDirty,
        hasError: hasError.value,
        isSuccess: isSuccess.value,
        onIsDirty: setDirty
      }, _ctx.$attrs), null, _parent));
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value) {
          _push(ssrRenderComponent(_sfc_main$3, {
            type: "error",
            class: alignmentClass.value
          }, {
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
        if (isDirty.value && (!hasError.value && !isSuccess.value)) {
          _push(ssrRenderComponent(_sfc_main$3, {
            type: "dirty",
            class: alignmentClass.value
          }, {
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
        if (isSuccess.value) {
          _push(ssrRenderComponent(_sfc_main$3, {
            type: "success",
            class: alignmentClass.value
          }, {
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
          _push(ssrRenderComponent(_sfc_main$3, {
            type: "hint",
            class: alignmentClass.value
          }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Pin/Group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
