import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Spinner",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "sm"
      // sm,md,lg,xl
    },
    variant: {
      type: String,
      default: "primary"
      // primary, success, warning, danger, info, dark, light
    }
  },
  setup(__props) {
    const props = __props;
    const sizeClass = computed(() => {
      return {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10"
      }[props.size];
    });
    const variantClass = computed(() => {
      return {
        primary: "text-primary-200 dark:text-primary-100 fill-primary-600",
        success: "text-success-200 dark:text-success-100 fill-success-600",
        warning: "text-warning-200 dark:text-warning-100 fill-warning-600",
        danger: "text-danger-200 dark:text-danger-100 fill-danger-600",
        info: "text-info-200 dark:text-info-100 fill-info-600",
        dark: "text-gray-200 dark:text-white fill-gray-900",
        light: "text-gray-200 dark:text-white fill-gray-400 dark:fill-gray-600"
      }[props.variant];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ role: "status" }, _attrs))}><svg${ssrRenderAttrs(mergeProps({
        "aria-hidden": "true",
        class: ["inline animate-spin", [sizeClass.value, variantClass.value]]
      }, _ctx.$attrs, {
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }))}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><span class="sr-only">Loading...</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Loading/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
