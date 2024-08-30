import { defineComponent, mergeModels, useAttrs, useSlots, useModel, ref, onMounted, watchEffect, mergeProps, unref, useSSRContext, createSlots, withCtx, createTextVNode, toDisplayString, renderSlot, openBlock, createBlock, Fragment, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Label-D1c1ZHt3.js";
import { r as randomID } from "../ssr.js";
import { Icon } from "@iconify/vue";
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
    type: {
      type: String,
      default: "text",
      required: true
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
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
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["is-dirty"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const attrs = useAttrs();
    const slots = useSlots();
    const emits = __emit;
    const props = __props;
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    const generatedID = "input-" + randomID(15);
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
    let showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-2" }, _attrs))}>`);
      if (__props.type == "password") {
        _push(`<div class="relative"><div class="relative">`);
        if (__props.prefix || unref(slots).prefix) {
          _push(`<div class="absolute inset-y-0 flex items-center start-0 ps-3">`);
          if (__props.prefix) {
            _push(`<!--[-->${ssrInterpolate(__props.prefix)}<!--]-->`);
          } else {
            ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
          ref_key: "input",
          ref: input,
          type: unref(showPassword) ? "text" : "password",
          placeholder: "••••••••",
          id: id.value,
          name: name.value
        }, _ctx.$attrs, {
          class: ["input", {
            "ps-10": __props.prefix || unref(slots).prefix,
            "pe-10": __props.suffix || unref(slots).suffix,
            "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
            "is-invalid": __props.hasError,
            "is-valid": __props.isSuccess
          }]
        }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}><div class="absolute inset-y-0 flex items-center end-0 pe-3"><div class="flex items-center justify-center"><a href="#" role="button"${ssrRenderAttr("data-tooltip-target", "tooltip-password-" + id.value)}${ssrRenderAttr("title", _ctx.$t("global.password_tooltip"))}>`);
        if (!unref(showPassword)) {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:eye",
            class: "w-6 h-6 text-gray-400 hover:text-gray-500 focus:text-gray-500"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(showPassword)) {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:eye-off",
            class: "w-6 h-6 text-gray-400 hover:text-gray-500 focus:text-gray-500"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</a><div${ssrRenderAttr("id", "tooltip-password-" + id.value)} role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">${ssrInterpolate(_ctx.$t("global.password_tooltip"))} <div class="tooltip-arrow" data-popper-arrow></div></div>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:alert-triangle",
          class: "w-6 h-6 ml-3 text-warning-500 dark:text-warning-500",
          style: isDirty.value && (!__props.hasError && !__props.isSuccess) ? null : { display: "none" }
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:x",
          class: "w-6 h-6 ml-3 text-danger-700 dark:text-danger-500",
          style: __props.hasError ? null : { display: "none" }
        }, null, _parent));
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:check",
          class: "w-6 h-6 ml-3 text-success-700 dark:text-success-500",
          style: __props.isSuccess ? null : { display: "none" }
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<div class="relative"><div class="relative">`);
        if (__props.prefix || unref(slots).prefix) {
          _push(`<div class="absolute inset-y-0 flex items-center start-0 ps-3">`);
          if (__props.prefix) {
            _push(`<!--[-->${ssrInterpolate(__props.prefix)}<!--]-->`);
          } else {
            ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input${ssrRenderAttrs((_temp1 = mergeProps({
          ref_key: "input",
          ref: input,
          type: __props.type,
          id: id.value,
          name: name.value
        }, _ctx.$attrs, {
          class: ["input", {
            "ps-10": __props.prefix || unref(slots).prefix,
            "pe-10": __props.suffix || unref(slots).suffix,
            "is-dirty": isDirty.value && (!__props.hasError && !__props.isSuccess),
            "is-invalid": __props.hasError,
            "is-valid": __props.isSuccess
          }]
        }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, model.value))))}>`);
        if ((__props.suffix || unref(slots).suffix) && (!__props.hasError || !__props.isSuccess)) {
          _push(`<div class="absolute inset-y-0 flex items-center end-0 pe-3">`);
          if (__props.suffix) {
            _push(`<!--[-->${ssrInterpolate(__props.suffix)}<!--]-->`);
          } else {
            ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (isDirty.value && (!__props.suffix || !unref(slots).suffix) && (!__props.hasError && !__props.isSuccess)) {
          _push(`<div class="absolute inset-y-0 flex items-center justify-center end-0 pe-3">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:alert-triangle",
            class: "w-6 h-6 text-warning-500 dark:text-warning-500"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.hasError) {
          _push(`<div class="absolute inset-y-0 flex items-center end-0 pe-3">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:x",
            class: "w-6 h-6 text-danger-700 dark:text-danger-500"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.isSuccess) {
          _push(`<div class="absolute inset-y-0 flex items-center end-0 pe-3">`);
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:check",
            class: "w-6 h-6 text-success-700 dark:text-success-500"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Input/Index.vue");
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
    type: {
      type: String,
      default: "text",
      required: true
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
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
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const attrs = useAttrs();
    const slots = useSlots();
    const generatedID = "input-" + randomID(15);
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
          success: isSuccess.value
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        type: __props.type,
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        identifier: __props.identifier,
        id: id.value,
        name: name.value,
        formIsDirty: __props.formIsDirty,
        hasError: hasError.value,
        isSuccess: isSuccess.value
      }, _ctx.$attrs, { onIsDirty: setDirty }), createSlots({ _: 2 }, [
        __props.prefix ? {
          name: "prefix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.prefix)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.prefix), 1)
              ];
            }
          }),
          key: "0"
        } : unref(slots).prefix ? {
          name: "prefix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "prefix")
              ];
            }
          }),
          key: "1"
        } : void 0,
        __props.suffix ? {
          name: "suffix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.suffix)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.suffix), 1)
              ];
            }
          }),
          key: "2"
        } : unref(slots).suffix ? {
          name: "suffix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "suffix")
              ];
            }
          }),
          key: "3"
        } : void 0
      ]), _parent));
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value) {
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
        if (isDirty.value && (!hasError.value && !isSuccess.value)) {
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
        if (isSuccess.value) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Input/Group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
