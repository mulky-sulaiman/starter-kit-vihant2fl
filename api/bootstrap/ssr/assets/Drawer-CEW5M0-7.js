import { defineComponent, computed, watch, ref, reactive, onMounted, unref, withCtx, renderSlot, useSSRContext, useSlots, mergeProps, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderSlotInner } from "vue/server-renderer";
import { r as randomID, _ as _sfc_main$4 } from "../ssr.js";
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";
import { Icon } from "@iconify/vue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PopUp",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "modal-" + randomID(15)
    },
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "sm"
    },
    closeable: {
      type: Boolean,
      default: true
    },
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
        "3xl": "sm:max-w-3xl",
        "4xl": "sm:max-w-4xl",
        "5xl": "sm:max-w-5xl",
        "6xl": "sm:max-w-6xl",
        "7xl": "sm:max-w-7xl",
        full: "sm:max-w-full"
      }[props.maxWidth];
    });
    const fullScreenClass = computed(() => {
      return {
        false: "md:min-w-0 md:min-h-0",
        true: ""
      }[props.fullScreen];
    });
    watch(
      () => props.show,
      () => {
        if (props.show) {
          showModal();
        } else {
          hideModal();
        }
      }
    );
    const emit = __emit;
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const options = {
      placement: "center-center",
      backdrop: "static",
      backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40 backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100",
      closable: false,
      keyboard: false,
      onHide: () => {
      },
      onShow: () => {
      },
      onToggle: () => {
      }
    };
    const instanceOptions = {
      id: "modalEl",
      override: true
    };
    const modalEl = ref(null);
    const modal = reactive({
      instance: null
    });
    const showModal = () => {
      var _a;
      (_a = modal.instance) == null ? void 0 : _a.show();
    };
    const hideModal = () => {
      var _a;
      (_a = modal.instance) == null ? void 0 : _a.hide();
      close();
    };
    onMounted(() => {
      modal.instance = new Modal(modalEl.value, options, instanceOptions);
      if (props.show) {
        showModal();
      } else {
        hideModal();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div tabindex="-1" aria-hidden="true" class="fixed top-0 bottom-0 left-0 right-0 z-50 hidden w-full h-full max-h-full p-0 overflow-x-hidden overflow-y-auto md:p-4 md:inset-0"><div class="${ssrRenderClass([[fullScreenClass.value, maxWidthClass.value], "relative w-full max-h-full min-w-[100vw] min-h-[100vh]"])}">`);
      if (__props.show) {
        _push(ssrRenderComponent(unref(UseFocusTrap), { options: { immediate: true } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal/Static/PopUp.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "PopUp",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    },
    closeCallback: {
      type: String,
      default: "close"
    }
  },
  emits: ["close-proxy"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const slots = useSlots();
    const handleCloseProxy = () => {
      emit("close-proxy");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white rounded-lg shadow dark:bg-gray-700" }, _attrs))}><div class="relative min-h-screen bg-white border-t-4 md:shadow md:rounded-lg dark:bg-gray-700 md:min-h-0 border-info-500 dark:border-info-400"><div class="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600"><h3 class="text-xl font-semibold tracking-widest uppercase text-info-500 dark:text-info-400">${ssrInterpolate(__props.title)}</h3><button type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close</span></button></div><div${ssrRenderAttrs(mergeProps({ class: "p-4 space-y-4 md:p-5 min-h-[calc(100vh-147px)] md:min-h-0" }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="flex items-center justify-between p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"><span class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        size: "sm",
        class: "w-full",
        as: "button",
        type: "light",
        rounded: "lg",
        onClick: handleCloseProxy
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:x",
              class: "mr-2 size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "tabler:x",
                class: "mr-2 size-5"
              }),
              createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("Close")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
      if (slots.footer) {
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal/Template/PopUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "left"
    },
    extraWidth: {
      type: String,
      default: null
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    "drawer-" + randomID(15);
    const props = __props;
    const placementClass = computed(() => {
      return {
        top: "fixed top-0 left-0 right-0 z-50 w-full transition-transform -translate-y-full bg-white dark:bg-gray-800",
        right: "fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800 min-w-[100vw]",
        left: "fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800 min-w-[100vw]",
        bottom: "fixed bottom-0 left-0 right-0 z-50 w-full overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none"
      }[props.placement];
    });
    const extraWidthClass = computed(() => {
      return {
        null: "md:min-w-min",
        10: "md:min-w-[10vw]",
        20: "md:min-w-[20vw]",
        30: "md:min-w-[30vw]",
        40: "md:min-w-[40vw]",
        50: "md:min-w-[50vw]",
        60: "md:min-w-[60vw]",
        70: "md:min-w-[70vw]",
        80: "md:min-w-[80vw]",
        90: "md:min-w-[90vw]"
      }[props.extraWidth];
    });
    watch(
      () => props.show,
      () => {
        if (props.show) {
          showDrawer();
        } else {
          hideDrawer();
        }
      }
    );
    const emit = __emit;
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const options = {
      placement: props.placement,
      backdrop: false,
      bodyScrolling: false,
      edge: false,
      edgeOffset: "",
      closable: false,
      keyboard: false,
      // backdropClasses:
      //     'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
      onHide: () => {
      },
      onShow: () => {
      },
      onToggle: () => {
      }
    };
    const instanceOptions = {
      id: "drawerEl",
      override: true
    };
    const drawerEl = ref(null);
    const drawer = reactive({
      instance: null
    });
    const showDrawer = () => {
      var _a;
      (_a = drawer.instance) == null ? void 0 : _a.show();
    };
    const hideDrawer = () => {
      var _a;
      (_a = drawer.instance) == null ? void 0 : _a.hide();
      close();
    };
    onMounted(() => {
      drawer.instance = new Drawer(drawerEl.value, options, instanceOptions);
      if (props.show) {
        showDrawer();
      } else {
        hideDrawer();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div${ssrRenderAttrs(mergeProps({
        ref_key: "drawerEl",
        ref: drawerEl,
        class: ["transition-transform -translate-x-full", [placementClass.value, extraWidthClass.value]],
        style: __props.show ? null : { display: "none" },
        tabindex: "-1",
        "aria-labelledby": __props.name
      }, _ctx.$attrs))}>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div>`);
      if (__props.show) {
        _push(`<div class="fixed inset-0 z-40 transition duration-100 bg-opacity-50 bg-gray-900/50 dark:bg-gray-900/80 backdrop-filter backdrop-blur-[2.5px] dark:bg-opacity-50"></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal/Static/Drawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    },
    closeCallback: {
      type: String,
      default: "close"
    },
    placement: {
      type: String,
      default: "left"
    }
  },
  emits: ["close-proxy"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const slots = useSlots();
    const handleCloseProxy = () => {
      emit("close-proxy");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-t-4 border-info-500 dark:border-info-400" }, _attrs))}><div class="flex items-center justify-between p-4"><h3 class="text-xl font-semibold tracking-widest uppercase text-info-500 dark:text-info-400">${ssrInterpolate(__props.title)}</h3><button type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close</span></button></div><hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"><div${ssrRenderAttrs(mergeProps({
        class: ["p-4 overflow-y-auto", { "min-h-[calc(100vh-147px)] max-h-[calc(100vh-147px)]": __props.placement === "left" || __props.placement === "right" }]
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"><div class="flex items-center justify-center p-4 gap-x-3"><span class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        size: "sm",
        class: "w-full",
        as: "button",
        type: "light",
        rounded: "lg",
        onClick: handleCloseProxy
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "tabler:x",
              class: "mr-2 size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</span>`);
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "tabler:x",
                class: "mr-2 size-5"
              }),
              createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("Close")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
      if (slots.footer) {
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Modal/Template/Drawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$3 as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b,
  _sfc_main as c
};
