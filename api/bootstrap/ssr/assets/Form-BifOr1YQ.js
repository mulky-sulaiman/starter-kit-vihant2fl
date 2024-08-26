import { defineComponent, mergeModels, useModel, useAttrs, useSlots, ref, onMounted, watchEffect, mergeProps, unref, createSlots, withCtx, createTextVNode, toDisplayString, renderSlot, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext, createVNode, withDirectives, vModelCheckbox, resolveComponent, renderList, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrLooseEqual, ssrGetDynamicModelProps, ssrLooseContain, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./Card-Bb3Qv7JL.js";
import { r as randomID, c as _export_sfc, _ as _sfc_main$g } from "../ssr.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./Message-CD5xZHYU.js";
import { _ as _sfc_main$c } from "./Group-g9-2m5yW.js";
import { _ as _sfc_main$d } from "./Group-DKdkuYCu.js";
import { _ as _sfc_main$e } from "./Group-C7RVMUn1.js";
import { _ as _sfc_main$f } from "./Group-DViXGZws.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "laravel-vue-i18n";
import "pinia";
import "@iconify/vue";
import "@vueuse/core";
import "howler";
import "momentum-modal";
import "@codinglabs/laravel-asset/asset.mjs";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
    isDirty: {
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
    useModel(__props, "modelValue");
    const attrs = useAttrs();
    const slots = useSlots();
    const generatedID = "input-" + randomID(15);
    const id = ref(null);
    const name = ref(null);
    const isRequired = ref(false);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col space-y-2" }, _attrs))}>`);
      if (__props.label || unref(slots).label) {
        _push(ssrRenderComponent(_sfc_main$8, {
          for: name.value,
          required: isRequired.value,
          dirty: __props.isDirty,
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
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value && !__props.isDirty) {
          _push(ssrRenderComponent(_sfc_main$9, { type: "error" }, {
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
        if (__props.isDirty) {
          _push(ssrRenderComponent(_sfc_main$9, { type: "dirty" }, {
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
        if (isSuccess.value && !__props.isDirty) {
          _push(ssrRenderComponent(_sfc_main$9, { type: "success" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "hint" }, {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Group.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
    const generatedID = "radio-" + randomID(15);
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
        type: "radio",
        checked: ssrLooseEqual(model.value, null),
        class: ["radio", {
          "radio-is-invalid": __props.hasError && !isDirty.value,
          "radio-is-dirty": isDirty.value,
          "radio-is-valid": __props.isSuccess && !isDirty.value
        }]
      }, _ctx.$attrs, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Radio/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    const generatedID = "radio-" + randomID(15);
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
      _push(ssrRenderComponent(_sfc_main$8, {
        for: name.value,
        required: isRequired.value,
        dirty: isDirty.value,
        error: hasError.value,
        success: isSuccess.value,
        class: "flex items-center justify-start gap-3 cursor-pointer"
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
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
              createVNode(_sfc_main$6, mergeProps({
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "error" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "dirty" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "success" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "hint" }, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Radio/Group.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
    row: {
      type: Number,
      default: 4
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
    useSlots();
    const emits = __emit;
    const props = __props;
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    const generatedID = "textarea-" + randomID(15);
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
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        ref_key: "input",
        ref: input,
        class: ["textarea", {
          "textarea-is-invalid": __props.hasError && !isDirty.value,
          "textarea-is-dirty": isDirty.value,
          "textarea-is-valid": __props.isSuccess && !isDirty.value
        }],
        row: __props.row
      }, _ctx.$attrs, _attrs), "textarea")}>${ssrInterpolate(model.value)}</textarea>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Textarea/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    row: {
      type: Number,
      default: 4
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
    const generatedID = "textarea-" + randomID(15);
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
        _push(ssrRenderComponent(_sfc_main$8, {
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
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        identifier: __props.identifier,
        id: id.value,
        name: name.value,
        row: __props.row,
        formIsDirty: __props.formIsDirty,
        hasError: hasError.value,
        isSuccess: isSuccess.value
      }, _ctx.$attrs, { onIsDirty: setDirty }), null, _parent));
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value && !isDirty.value) {
          _push(ssrRenderComponent(_sfc_main$9, { type: "error" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "dirty" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "success" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "hint" }, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Textarea/Group.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    size: {
      type: String,
      default: "sm"
    },
    label: {
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
    const generatedID = "toggle-" + randomID(15);
    const initial = ref(false);
    const id = ref(null);
    const name = ref(null);
    const isRequired = ref(false);
    const isDirty = ref(false);
    const hasError = ref(false);
    const isSuccess = ref(false);
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
      _push(ssrRenderComponent(_sfc_main$8, mergeProps({
        class: "flex items-center justify-start gap-3 cursor-pointer",
        for: name.value,
        required: isRequired.value,
        dirty: isDirty.value,
        error: hasError.value,
        success: isSuccess.value
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs((_temp0 = mergeProps({
              ref_key: "input",
              ref: input,
              type: "checkbox",
              checked: Array.isArray(model.value) ? ssrLooseContain(model.value, null) : model.value,
              class: "sr-only peer"
            }, _ctx.$attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))} data-v-a3ab274a${_scopeId}><div class="${ssrRenderClass([{
              "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4": __props.size === "sm",
              "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5": __props.size === "md",
              "w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6": __props.size === "lg",
              "peer-focus:ring-danger-300 dark:peer-focus:ring-danger-800 peer-checked:bg-danger-600": hasError.value && !isDirty.value,
              "peer-focus:ring-warning-300 dark:peer-focus:ring-warning-800 peer-checked:bg-warning-600": isDirty.value,
              "peer-focus:ring-success-300 dark:peer-focus:ring-success-800 peer-checked:bg-success-600": isSuccess.value && !isDirty.value
            }, "toggle peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-primary-600"])}" data-v-a3ab274a${_scopeId}></div><span data-v-a3ab274a${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              withDirectives(createVNode("input", mergeProps({
                ref_key: "input",
                ref: input,
                type: "checkbox",
                "onUpdate:modelValue": ($event) => model.value = $event,
                class: "sr-only peer"
              }, _ctx.$attrs), null, 16, ["onUpdate:modelValue"]), [
                [vModelCheckbox, model.value]
              ]),
              createVNode("div", {
                class: ["toggle peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-primary-600", {
                  "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4": __props.size === "sm",
                  "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5": __props.size === "md",
                  "w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6": __props.size === "lg",
                  "peer-focus:ring-danger-300 dark:peer-focus:ring-danger-800 peer-checked:bg-danger-600": hasError.value && !isDirty.value,
                  "peer-focus:ring-warning-300 dark:peer-focus:ring-warning-800 peer-checked:bg-warning-600": isDirty.value,
                  "peer-focus:ring-success-300 dark:peer-focus:ring-success-800 peer-checked:bg-success-600": isSuccess.value && !isDirty.value
                }]
              }, null, 2),
              createVNode("span", null, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Toggle/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FormToggle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a3ab274a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    size: {
      type: String,
      default: "sm"
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
    const generatedID = "toggle-" + randomID(15);
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
      _push(ssrRenderComponent(FormToggle, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        identifier: __props.identifier,
        size: __props.size,
        id: id.value,
        name: name.value,
        formIsDirty: __props.formIsDirty,
        hasError: hasError.value,
        isSuccess: isSuccess.value
      }, _ctx.$attrs, { onIsDirty: setDirty }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.label) {
              _push2(`<!--[-->${ssrInterpolate(__props.label)}<!--]-->`);
            } else {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            }
          } else {
            return [
              __props.label ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(__props.label), 1)
              ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.useMessage) {
        _push(`<!--[-->`);
        if (hasError.value && !isDirty.value) {
          _push(ssrRenderComponent(_sfc_main$9, { type: "error" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "dirty" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "success" }, {
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
          _push(ssrRenderComponent(_sfc_main$9, { type: "hint" }, {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Toggle/Group.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: false
  },
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    genders: {
      type: Object
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: true,
      gender: "",
      code: ""
    });
    const submit = () => {
      console.log(form);
    };
    const isDirty = ref(false);
    const setDirty = (e) => {
      if (e) {
        isDirty.value = true;
      } else {
        isDirty.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, {
        title: _ctx.$t("register.register"),
        description: _ctx.$t("register.register")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, { class: "px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$b, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 space-y-4 md:space-y-6 sm:p-8"${_scopeId2}><form class="space-y-4 md:space-y-6"${_scopeId2}>${ssrInterpolate(unref(form).email)} `);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    identifier: "email",
                    formIsDirty: unref(form).isDirty,
                    error: "error email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    row: "4",
                    required: ""
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Email Cuy</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Email Cuy")
                        ];
                      }
                    }),
                    hint: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Araranjing lah`);
                      } else {
                        return [
                          createTextVNode("Araranjing lah")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(form).password)} `);
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    label: "Password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    formIsDirty: unref(form).isDirty,
                    type: "password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(form).gender)} `);
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    identifier: "gender",
                    label: "Gender",
                    modelValue: unref(form).gender,
                    "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                    formIsDirty: unref(form).isDirty,
                    class: "tracking-widest uppercase",
                    success: "success gender"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" selected disabled${_scopeId3}>Select your gender</option><!--[-->`);
                        ssrRenderList(__props.genders, (gender, index) => {
                          _push4(`<option${ssrRenderAttr("value", gender.value)}${_scopeId3}>${ssrInterpolate(gender.label)}</option>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            selected: "",
                            disabled: ""
                          }, "Select your gender"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: gender.value,
                              textContent: toDisplayString(gender.label)
                            }, null, 8, ["value", "textContent"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    identifier: "gender",
                    label: "Gender",
                    formIsDirty: unref(form).isDirty,
                    isDirty: isDirty.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-start gap-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.genders, (g, index) => {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            value: g.value,
                            identifier: g.value,
                            label: g.label,
                            modelValue: unref(form).gender,
                            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                            formIsDirty: unref(form).isDirty,
                            useMessage: false,
                            onIsDirty: setDirty
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-start gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (g, index) => {
                              return openBlock(), createBlock(_sfc_main$5, {
                                key: index,
                                value: g.value,
                                identifier: g.value,
                                label: g.label,
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                useMessage: false,
                                onIsDirty: setDirty
                              }, null, 8, ["value", "identifier", "label", "modelValue", "onUpdate:modelValue", "formIsDirty"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(form).remember)} `);
                  _push3(ssrRenderComponent(_sfc_main$e, {
                    identifier: "remember",
                    modelValue: unref(form).remember,
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    formIsDirty: unref(form).isDirty,
                    useMessage: false,
                    required: ""
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Remember Me?</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Remember Me?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    identifier: "remember",
                    modelValue: unref(form).remember,
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    formIsDirty: unref(form).isDirty
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(form).code)} `);
                  _push3(ssrRenderComponent(_sfc_main$f, {
                    label: "Code",
                    alignment: "center",
                    formIsDirty: unref(form).isDirty,
                    hint: "Enter your code",
                    required: "",
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$g, {
                    submit: true,
                    size: "sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Submit`);
                      } else {
                        return [
                          createTextVNode("Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                      createVNode("form", {
                        class: "space-y-4 md:space-y-6",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createTextVNode(toDisplayString(unref(form).email) + " ", 1),
                        createVNode(_sfc_main$3, {
                          identifier: "email",
                          formIsDirty: unref(form).isDirty,
                          error: "error email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          row: "4",
                          required: ""
                        }, {
                          label: withCtx(() => [
                            createVNode("span", null, "Email Cuy")
                          ]),
                          hint: withCtx(() => [
                            createTextVNode("Araranjing lah")
                          ]),
                          _: 1
                        }, 8, ["formIsDirty", "modelValue", "onUpdate:modelValue"]),
                        createTextVNode(" " + toDisplayString(unref(form).password) + " ", 1),
                        createVNode(_sfc_main$c, {
                          label: "Password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          formIsDirty: unref(form).isDirty,
                          type: "password",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                        createTextVNode(" " + toDisplayString(unref(form).gender) + " ", 1),
                        createVNode(_sfc_main$d, {
                          identifier: "gender",
                          label: "Gender",
                          modelValue: unref(form).gender,
                          "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                          formIsDirty: unref(form).isDirty,
                          class: "tracking-widest uppercase",
                          success: "success gender"
                        }, {
                          default: withCtx(() => [
                            createVNode("option", {
                              value: "",
                              selected: "",
                              disabled: ""
                            }, "Select your gender"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                              return openBlock(), createBlock("option", {
                                key: index,
                                value: gender.value,
                                textContent: toDisplayString(gender.label)
                              }, null, 8, ["value", "textContent"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                        createVNode(_sfc_main$7, {
                          identifier: "gender",
                          label: "Gender",
                          formIsDirty: unref(form).isDirty,
                          isDirty: isDirty.value
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center justify-start gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (g, index) => {
                                return openBlock(), createBlock(_sfc_main$5, {
                                  key: index,
                                  value: g.value,
                                  identifier: g.value,
                                  label: g.label,
                                  modelValue: unref(form).gender,
                                  "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                  formIsDirty: unref(form).isDirty,
                                  useMessage: false,
                                  onIsDirty: setDirty
                                }, null, 8, ["value", "identifier", "label", "modelValue", "onUpdate:modelValue", "formIsDirty"]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["formIsDirty", "isDirty"]),
                        createTextVNode(" " + toDisplayString(unref(form).remember) + " ", 1),
                        createVNode(_sfc_main$e, {
                          identifier: "remember",
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          formIsDirty: unref(form).isDirty,
                          useMessage: false,
                          required: ""
                        }, {
                          label: withCtx(() => [
                            createVNode("span", null, "Remember Me?")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                        createVNode(_sfc_main$1, {
                          identifier: "remember",
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          formIsDirty: unref(form).isDirty
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                        createTextVNode(" " + toDisplayString(unref(form).code) + " ", 1),
                        createVNode(_sfc_main$f, {
                          label: "Code",
                          alignment: "center",
                          formIsDirty: unref(form).isDirty,
                          hint: "Enter your code",
                          required: "",
                          modelValue: unref(form).code,
                          "onUpdate:modelValue": ($event) => unref(form).code = $event
                        }, null, 8, ["formIsDirty", "modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$g, {
                          submit: true,
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Submit")
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$b, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6 space-y-4 md:space-y-6 sm:p-8" }, [
                    createVNode("form", {
                      class: "space-y-4 md:space-y-6",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createTextVNode(toDisplayString(unref(form).email) + " ", 1),
                      createVNode(_sfc_main$3, {
                        identifier: "email",
                        formIsDirty: unref(form).isDirty,
                        error: "error email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        type: "email",
                        row: "4",
                        required: ""
                      }, {
                        label: withCtx(() => [
                          createVNode("span", null, "Email Cuy")
                        ]),
                        hint: withCtx(() => [
                          createTextVNode("Araranjing lah")
                        ]),
                        _: 1
                      }, 8, ["formIsDirty", "modelValue", "onUpdate:modelValue"]),
                      createTextVNode(" " + toDisplayString(unref(form).password) + " ", 1),
                      createVNode(_sfc_main$c, {
                        label: "Password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        formIsDirty: unref(form).isDirty,
                        type: "password",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                      createTextVNode(" " + toDisplayString(unref(form).gender) + " ", 1),
                      createVNode(_sfc_main$d, {
                        identifier: "gender",
                        label: "Gender",
                        modelValue: unref(form).gender,
                        "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                        formIsDirty: unref(form).isDirty,
                        class: "tracking-widest uppercase",
                        success: "success gender"
                      }, {
                        default: withCtx(() => [
                          createVNode("option", {
                            value: "",
                            selected: "",
                            disabled: ""
                          }, "Select your gender"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (gender, index) => {
                            return openBlock(), createBlock("option", {
                              key: index,
                              value: gender.value,
                              textContent: toDisplayString(gender.label)
                            }, null, 8, ["value", "textContent"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                      createVNode(_sfc_main$7, {
                        identifier: "gender",
                        label: "Gender",
                        formIsDirty: unref(form).isDirty,
                        isDirty: isDirty.value
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center justify-start gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.genders, (g, index) => {
                              return openBlock(), createBlock(_sfc_main$5, {
                                key: index,
                                value: g.value,
                                identifier: g.value,
                                label: g.label,
                                modelValue: unref(form).gender,
                                "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                formIsDirty: unref(form).isDirty,
                                useMessage: false,
                                onIsDirty: setDirty
                              }, null, 8, ["value", "identifier", "label", "modelValue", "onUpdate:modelValue", "formIsDirty"]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }, 8, ["formIsDirty", "isDirty"]),
                      createTextVNode(" " + toDisplayString(unref(form).remember) + " ", 1),
                      createVNode(_sfc_main$e, {
                        identifier: "remember",
                        modelValue: unref(form).remember,
                        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                        formIsDirty: unref(form).isDirty,
                        useMessage: false,
                        required: ""
                      }, {
                        label: withCtx(() => [
                          createVNode("span", null, "Remember Me?")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                      createVNode(_sfc_main$1, {
                        identifier: "remember",
                        modelValue: unref(form).remember,
                        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                        formIsDirty: unref(form).isDirty
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "formIsDirty"]),
                      createTextVNode(" " + toDisplayString(unref(form).code) + " ", 1),
                      createVNode(_sfc_main$f, {
                        label: "Code",
                        alignment: "center",
                        formIsDirty: unref(form).isDirty,
                        hint: "Enter your code",
                        required: "",
                        modelValue: unref(form).code,
                        "onUpdate:modelValue": ($event) => unref(form).code = $event
                      }, null, 8, ["formIsDirty", "modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$g, {
                        submit: true,
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Submit")
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
