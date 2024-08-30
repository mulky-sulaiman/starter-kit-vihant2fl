import { usePage, router, createInertiaApp, Link, Head } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { defineComponent, unref, useSSRContext, ref, mergeProps, computed, resolveComponent, withCtx, renderSlot, createVNode, toDisplayString, onMounted, onUnmounted, getCurrentInstance, createCommentVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, createSSRApp, h as h$1 } from "vue";
import { i18nVue } from "laravel-vue-i18n";
import { defineStore, createPinia } from "pinia";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";
import { Howl } from "howler";
import { Modal, modal } from "momentum-modal";
import { asset } from "@codinglabs/laravel-asset/asset.mjs";
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.contains": "The :attribute field is missing a required value.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.list": "The :attribute field must be a list.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_if_declined": "The :attribute field is required when :other is declined.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
const php_id = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.contains": "The :attribute field is missing a required value.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.list": "The :attribute field must be a list.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_if_declined": "The :attribute field is required when :other is declined.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_id
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, m = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, v = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !g2 ? u2(r2, m.encoder, v2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, m.encoder, v2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2) E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], m.encoder, v2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, m.encoder, v2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k2 = R2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET")) return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups) o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return m;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || m.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = m.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : m.addQueryPrefix, allowDots: void 0 === t5.allowDots ? m.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : m.charsetSentinel, delimiter: void 0 === t5.delimiter ? m.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : m.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : m.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : m.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : m.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : m.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : m.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, v(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  m() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(r2), this.j(e2, r2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Mode",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "inertia"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.mode === "inertia") {
        _push(`<div class="fixed z-30 bottom-4 left-4"><div data-tooltip-target="tooltip-mode" data-tooltip-placement="right" class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:brand-vue",
          class: "size-7"
        }, null, _parent));
        _push(`</div><div id="tooltip-mode" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700"> Inertia Vue Mode <div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.mode === "nuxt") {
        _push(`<div class="fixed z-30 bottom-4 left-4"><div data-tooltip-target="tooltip-mode" data-tooltip-placement="right" class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:brand-nuxt",
          class: "size-7"
        }, null, _parent));
        _push(`</div><div id="tooltip-mode" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700"> Nuxt Mode <div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Static/Mode.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "BackToTop",
  __ssrInlineRender: true,
  props: {
    placement: {
      type: String,
      default: "left"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><a href="#" data-tooltip-target="tooltip-back-to-top"${ssrRenderAttr("data-tooltip-placement", __props.placement)} class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:arrow-up",
        class: "size-5 animate-bounce"
      }, null, _parent));
      _push(`</a><div id="tooltip-back-to-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"><span>${ssrInterpolate(_ctx.$t("global.back_to_top"))}</span><div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/BackToTop.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Language",
  __ssrInlineRender: true,
  props: {
    placement: {
      type: String,
      default: "left"
    },
    mode: {
      type: String,
      default: "inline"
      // inline, dropdown
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.mode === "inline") {
        _push(`<div data-tooltip-target="tooltip-language"${ssrRenderAttr("data-tooltip-placement", __props.placement)}>`);
        if (_ctx.$page.props.locale == "en") {
          _push(`<button type="button" class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white"><svg class="size-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.locale == "id") {
          _push(`<button type="button" class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white"><svg class="size-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-css-id" viewBox="0 0 512 512"><path fill="#e70011" d="M0 0h512v256H0Z"></path><path fill="#fff" d="M0 256h512v256H0Z"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (__props.mode === "dropdown") {
        _push(`<!--[--><button type="button" data-tooltip-target="tooltip-language"${ssrRenderAttr("data-tooltip-placement", __props.placement)} data-dropdown-toggle="language-dropdown" class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">`);
        if (_ctx.$page.props.locale === "en") {
          _push(`<svg class="size-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.locale === "id") {
          _push(`<svg class="size-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-css-id" viewBox="0 0 512 512"><path fill="#e70011" d="M0 0h512v256H0Z"></path><path fill="#fff" d="M0 256h512v256H0Z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" id="language-dropdown" style="${ssrRenderStyle({ "position": "absolute", "inset": "0px auto auto 0px", "margin": "0px", "transform": "translate(184px, 801px)" })}" data-popper-placement="left"><ul class="py-1" role="none"><!--[-->`);
        ssrRenderList(_ctx.$page.props.locales, (locale, index) => {
          _push(`<li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem"><div class="inline-flex items-center">`);
          if (locale === "en") {
            _push(`<svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (locale === "id") {
            _push(`<svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icons-css-id" viewBox="0 0 512 512"><path fill="#e70011" d="M0 0h512v256H0Z"></path><path fill="#fff" d="M0 256h512v256H0Z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (locale === "en") {
            _push(`<span>English (US)</span>`);
          } else {
            _push(`<!---->`);
          }
          if (locale === "id") {
            _push(`<span>Bahasa (ID)</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></a></li>`);
        });
        _push(`<!--]--></ul></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="tooltip-language" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">${ssrInterpolate(_ctx.$t("speed-dial.switch-language"))} <div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Switcher/Language.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Screen",
  __ssrInlineRender: true,
  props: {
    placement: {
      type: String,
      deault: "left"
    }
  },
  setup(__props) {
    const isFullScreen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><a href="#" data-tooltip-target="tooltip-screen-switcher"${ssrRenderAttr("data-tooltip-placement", __props.placement)} class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:maximize",
        class: "size-5",
        style: !isFullScreen.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:minimize",
        class: "size-5",
        style: isFullScreen.value ? null : { display: "none" }
      }, null, _parent));
      _push(`</a><div id="tooltip-screen-switcher" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"><span>${ssrInterpolate(isFullScreen.value ? _ctx.$t("global.exit_fullscreen") : _ctx.$t("global.enter_fullscreen"))}</span><div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Switcher/Screen.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Theme",
  __ssrInlineRender: true,
  props: {
    placement: {
      type: String,
      deault: "left"
    }
  },
  setup(__props) {
    const mode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-tooltip-target": "tooltip-theme-switcher",
        "data-tooltip-placement": __props.placement
      }, _attrs))}><a href="#" class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:sun",
        class: "size-5",
        style: unref(mode) == "dark" ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:moon",
        class: "size-5",
        style: unref(mode) == "light" ? null : { display: "none" }
      }, null, _parent));
      _push(`</a><div id="tooltip-theme-switcher" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"><span>${ssrInterpolate(unref(mode) == "dark" ? _ctx.$t("global.switch_light") : _ctx.$t("global.switch_dark"))}</span><div class="tooltip-arrow" data-popper-arrow></div></div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Switcher/Theme.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Horizontal",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const hover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex flex-row-reverse items-center gap-3 bottom-4 right-4 z-999 justify-items-center" }, _attrs))}><div><a href="#" class="${ssrRenderClass([{ "opacity-75": !hover.value }, "inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-11 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"])}">`);
      if (!show.value) {
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:settings",
          class: "size-9 animate-spin"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (show.value) {
        _push(ssrRenderComponent(unref(Icon), {
          icon: "tabler:x",
          class: "size-9"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</a></div><div class="flex flex-row items-center gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center" style="${ssrRenderStyle(show.value ? null : { display: "none" })}"><div>`);
      _push(ssrRenderComponent(_sfc_main$i, { placement: "top" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        mode: "inline",
        placement: "top"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$g, { placement: "top" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$f, { placement: "top" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SpeedDial/Horizontal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Vertical",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const hover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex flex-col-reverse items-center gap-3 bottom-4 right-4 z-999 justify-items-center" }, _attrs))}><div><a href="#" class="${ssrRenderClass([{ "opacity-75": !hover.value }, "inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-11 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"])}">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:settings",
        class: "size-9 animate-spin",
        style: !show.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:x",
        class: "size-9",
        style: show.value ? null : { display: "none" }
      }, null, _parent));
      _push(`</a></div><div class="flex flex-col items-center gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center" style="${ssrRenderStyle(show.value ? null : { display: "none" })}"><div>`);
      _push(ssrRenderComponent(_sfc_main$i, { placement: "left" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        mode: "dropdown",
        placement: "left"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$g, { placement: "left" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$f, { placement: "left" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SpeedDial/Vertical.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Centered",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const hover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed flex items-center bottom-4 left-[50%] z-999 justify-items-center" style="${ssrRenderStyle(!show.value ? null : { display: "none" })}"><a href="#" class="${ssrRenderClass([{ "opacity-75": !hover.value }, "inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"])}">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:settings",
        class: "size-5 animate-spin"
      }, null, _parent));
      _push(`</a></div><div class="fixed flex flex-row items-center bottom-4 left-[calc(50%-78px)] gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center" style="${ssrRenderStyle(show.value ? null : { display: "none" })}"><div>`);
      _push(ssrRenderComponent(_sfc_main$i, { placement: "top" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        mode: "inline",
        placement: "top"
      }, null, _parent));
      _push(`</div><div><a href="#" class="${ssrRenderClass([{ "opacity-75": !hover.value }, "inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"])}">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "tabler:x",
        class: "size-4"
      }, null, _parent));
      _push(`</a></div><div>`);
      _push(ssrRenderComponent(_sfc_main$g, { placement: "top" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$f, { placement: "top" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SpeedDial/Centered.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String,
      default: "vertical"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.mode === "horizontal") {
        _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.mode === "vertical") {
        _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.mode === "centered") {
        _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SpeedDial/Index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
function randomID(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i2 = 0; i2 < length; i2++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const useConfirmStore = defineStore("confirm", () => {
  const id = randomID(15);
  let key = ref("confirm-" + id);
  let opened = ref(false);
  let type = ref("warning");
  let size = ref("md");
  let useIcon = ref(true);
  let headTitle = ref("confirm.headTitle");
  let title = ref("confirm.title");
  let message = ref("confirm.message");
  let useCancel = ref(true);
  let labelCancel = ref("confirm.labelCancel");
  let useOk = ref(true);
  let labelOk = ref("confirm.labelOk");
  let placement = ref("left");
  let target = ref(null);
  let maxWidth = ref("md");
  let isConfirmed = ref(false);
  let backdropBlur = ref(true);
  const isValidConfirmation = (valueToWatch) => {
    return isConfirmed.value && target.value === valueToWatch;
  };
  function $patch(params) {
    Object.keys(params).forEach(function(key2) {
      $set(key2, params[key2]);
    });
  }
  function $set(k2, v2) {
    if (k2 == "key") {
      key.value = v2;
    }
    if (k2 == "opened") {
      if (v2) {
        opened.value = true;
      } else {
        opened.value = false;
      }
    }
    if (k2 == "type") {
      type.value = v2;
    }
    if (k2 == "size") {
      size.value = v2;
    }
    if (k2 == "useIcon") {
      if (v2) {
        useIcon.value = true;
      } else {
        useIcon.value = false;
      }
    }
    if (k2 == "headTitle") {
      headTitle.value = v2;
    }
    if (k2 == "title") {
      title.value = v2;
    }
    if (k2 == "message") {
      message.value = v2;
    }
    if (k2 == "useCancel") {
      if (v2) {
        useCancel.value = true;
      } else {
        useCancel.value = false;
      }
    }
    if (k2 == "labelCancel") {
      labelCancel.value = v2;
    }
    if (k2 == "useOk") {
      if (v2) {
        useOk.value = true;
      } else {
        useOk.value = false;
      }
    }
    if (k2 == "labelOk") {
      labelOk.value = v2;
    }
    if (k2 == "placement") {
      placement.value = v2;
    }
    if (k2 == "target") {
      target.value = v2;
    }
    if (k2 == "maxWidth") {
      maxWidth.value = v2;
    }
    if (k2 == "isConfirmed") {
      if (v2) {
        isConfirmed.value = true;
      } else {
        isConfirmed.value = false;
      }
    }
    if (k2 == "backdropBlur") {
      if (v2) {
        backdropBlur.value = true;
      } else {
        backdropBlur.value = false;
      }
    }
  }
  function $reset() {
    key.value = "confirm-dialog-" + id;
    opened.value = false;
    type.value = "warning";
    size.value = "md";
    useIcon.value = true;
    headTitle.value = "confirm.headTitle";
    title.value = "confirm.title";
    message.value = "confirm.message";
    useCancel.value = true;
    labelCancel.value = "confirm.labelCancel";
    useOk.value = true;
    labelOk.value = "confirm.labelOk";
    placement.value = "left";
    target.value = null;
    maxWidth.value = "md";
    isConfirmed.value = false;
    backdropBlur.value = true;
  }
  return {
    key,
    opened,
    type,
    size,
    useIcon,
    headTitle,
    title,
    message,
    useCancel,
    labelCancel,
    useOk,
    labelOk,
    placement,
    target,
    maxWidth,
    isConfirmed,
    backdropBlur,
    isValidConfirmation,
    // setValidConfirm,
    $patch,
    $set,
    $reset
  };
});
const btnClass$1 = "uppercase tracking-widest disabled:!cursor-not-allowed disabled:opacity-50";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    as: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: "#"
    },
    submit: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: "lg"
    },
    variant: {
      type: String,
      default: "default"
    }
    // disabled: {
    //     type: Boolean,
    //     default: false,
    // },
  },
  setup(__props) {
    const props = __props;
    const typeClass = computed(() => {
      if (props.variant == "default") {
        return {
          primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",
          alternate: "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-offset-2 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
          dark: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-offset-2 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
          light: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-offset-2 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
          secondary: "text-primary-700 bg-white border border-gray-200 hover:bg-gray-200 focus:ring-offset-2 focus:ring-4 focus:ring-primary-300 dark:bg-gray-50 dark:hover:bg-primary-100 focus:outline-none dark:focus:ring-primary-800 dark:hover:border-gray-400",
          success: "focus:outline-none text-white bg-success-700 hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:ring-success-300 dark:bg-success-600 dark:hover:bg-success-700 dark:focus:ring-success-800",
          danger: "focus:outline-none text-white bg-danger-700 hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-900",
          warning: "focus:outline-none text-white bg-warning-400 hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:ring-warning-300 dark:focus:ring-warning-900",
          info: "focus:outline-none text-white bg-info-700 hover:bg-info-800 focus:ring-4 focus:ring-offset-2 focus:ring-info-300 dark:bg-info-600 dark:hover:bg-info-700 dark:focus:ring-info-900"
        }[props.type];
      } else if (props.variant == "outline") {
        return {
          primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800",
          alternate: "",
          dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
          light: "",
          secondary: "",
          success: "text-success-700 hover:text-white border border-success-700 hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-success-300 dark:border-success-500 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-600 dark:focus:ring-success-800",
          danger: "text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-danger-300 dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-600 dark:focus:ring-danger-900",
          warning: "text-warning-400 hover:text-white border border-warning-400 hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-warning-300 dark:border-warning-300 dark:text-warning-300 dark:hover:text-white dark:hover:bg-warning-400 dark:focus:ring-warning-900",
          info: "text-info-700 hover:text-white border border-info-700 hover:bg-info-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-info-300 dark:border-info-400 dark:text-info-400 dark:hover:text-white dark:hover:bg-info-500 dark:focus:ring-info-900"
        }[props.type];
      } else if (props.variant == "ghost") {
        return {
          primary: "text-primary-700 hover:text-white hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800",
          alternate: "",
          dark: "text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
          light: "",
          secondary: "",
          success: "text-success-700 hover:text-white hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-success-300 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-600 dark:focus:ring-success-800",
          danger: "text-danger-700 hover:text-white hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-danger-300 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-600 dark:focus:ring-danger-900",
          warning: "text-warning-400 hover:text-white hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-warning-300 dark:text-warning-300 dark:hover:text-white dark:hover:bg-warning-400 dark:focus:ring-warning-900",
          info: "text-info-700 hover:text-white hover:bg-info-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-info-300 dark:text-info-400 dark:hover:text-white dark:hover:bg-info-500 dark:focus:ring-info-900"
        }[props.type];
      }
    });
    const sizeClass = computed(() => {
      return {
        xs: "px-3 py-2 text-xs font-medium text-center",
        sm: "px-3 py-2 text-sm font-medium text-center",
        md: "px-5 py-2.5 text-sm font-medium text-center",
        lg: "px-5 py-3 text-base font-medium text-center",
        xl: "px-6 py-3.5 text-base font-medium text-center",
        "2xl": "px-7 py-4 text-base font-medium text-center"
      }[props.size];
    });
    const roundedClass = "rounded-" + props.rounded;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      if (__props.as === "button") {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.submit ? "submit" : "button",
          class: ["flex items-center justify-center transition duration-150 ease-in-out", [btnClass$1, typeClass.value, sizeClass.value, roundedClass]]
        }, _ctx.$attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.as === "a") {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          class: ["flex items-center justify-center transition duration-150 ease-in-out", [btnClass$1, typeClass.value, sizeClass.value, roundedClass]]
        }, _ctx.$attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.as === "link") {
        _push(ssrRenderComponent(_component_Link, mergeProps({
          href: __props.href,
          class: ["flex items-center justify-center transition duration-150 ease-in-out", [btnClass$1, typeClass.value, sizeClass.value, roundedClass]]
        }, _ctx.$attrs), {
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Button.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const confirm = useConfirmStore();
    const setValidConfirm = () => {
      if (confirm.target) {
        confirm.isConfirmed = true;
        confirm.opened = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><a href="#" class="hidden" data-modal-toggle="confirm-dialog-modal" data-modal-target="confirm-dialog-modal"></a><div id="confirm-dialog-modal" data-modal-backdrop="static" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 !mt-0 h-full max-h-full"><div class="${ssrRenderClass([{
        "max-w-md": unref(confirm).size === "sm",
        "max-w-lg": unref(confirm).size === "md",
        "max-w-4xl": unref(confirm).size === "lg",
        "max-w-7xl": unref(confirm).size === "xl"
      }, "relative w-full max-h-full min-w-[100vw] min-h-[100vh] md:min-w-0 md:min-h-0"])}"><div class="${ssrRenderClass([{
        "border-warning-500 dark:border-warning-400": unref(confirm).type == "warning",
        "border-success-500 dark:border-success-400": unref(confirm).type == "success",
        "border-danger-700 dark:border-danger-600": unref(confirm).type == "danger",
        "border-info-500 dark:border-info-400": unref(confirm).type == "info"
      }, "relative min-h-screen bg-white border-t-4 md:shadow md:rounded-lg dark:bg-gray-700 md:min-h-0"])}"><div class="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600"><h3 class="${ssrRenderClass([{
        "text-warning-500 dark:text-warning-400": unref(confirm).type == "warning",
        "text-success-500 dark:text-success-400": unref(confirm).type == "success",
        "text-danger-700 dark:text-danger-600": unref(confirm).type == "danger",
        "text-info-500 dark:text-info-400": unref(confirm).type == "info"
      }, "text-xl font-semibold tracking-widest uppercase"])}" style="${ssrRenderStyle(unref(confirm).headTitle != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).headTitle))}</h3><button type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="confirm-dialog-modal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">${ssrInterpolate(_ctx.$t("global.close"))}</span></button></div><div class="p-4 space-y-4 text-center md:p-5 min-h-[calc(100vh-147px)] md:min-h-0">`);
      if (unref(confirm).useIcon) {
        _push(`<span class="w-full">`);
        if (unref(confirm).type == "warning") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:alert-square-rounded",
            class: "w-12 h-12 mx-auto mb-4 text-warning-500 dark:text-warning-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "success") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:square-rounded-check",
            class: "w-12 h-12 mx-auto mb-4 text-success-500 dark:text-success-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "danger") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:square-rounded-x",
            class: "w-12 h-12 mx-auto mb-4 text-danger-700 dark:text-danger-600",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "info") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:info-square-rounded",
            class: "w-12 h-12 mx-auto mb-4 text-info-500 dark:text-info-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="${ssrRenderClass([{
        "text-warning-500 dark:text-warning-400": unref(confirm).type == "warning",
        "text-success-500 dark:text-success-400": unref(confirm).type == "success",
        "text-danger-700 dark:text-danger-600": unref(confirm).type == "danger",
        "text-info-500 dark:text-info-400": unref(confirm).type == "info"
      }, "text-lg font-normal"])}" style="${ssrRenderStyle(unref(confirm).title != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).title))}</h3><p class="text-gray-500 dark:text-gray-400" style="${ssrRenderStyle(unref(confirm).message != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).message))}</p></div><div class="flex items-center justify-between p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">`);
      if (unref(confirm).useCancel) {
        _push(`<span class="w-full">`);
        _push(ssrRenderComponent(_sfc_main$a, {
          size: "sm",
          class: "w-full",
          as: "button",
          rounded: "lg",
          type: "light",
          "data-modal-hide": "confirm-dialog-modal",
          onClick: ($event) => unref(confirm).$reset()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t(unref(confirm).labelCancel))}</span>`);
            } else {
              return [
                createVNode("span", {
                  textContent: toDisplayString(_ctx.$t(unref(confirm).labelCancel)),
                  class: "truncate"
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(confirm).useOk) {
        _push(`<span class="w-full">`);
        _push(ssrRenderComponent(_sfc_main$a, {
          size: "sm",
          class: "w-full",
          as: "button",
          rounded: "lg",
          type: unref(confirm).type,
          "data-modal-hide": "confirm-dialog-modal",
          onClick: ($event) => setValidConfirm(),
          "x-on:click": "$dispatch('" + unref(confirm).target + "')"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t(unref(confirm).labelOk))}</span>`);
            } else {
              return [
                createVNode("span", {
                  textContent: toDisplayString(_ctx.$t(unref(confirm).labelOk)),
                  class: "truncate"
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><a href="#" class="hidden" data-drawer-toggle="confirm-dialog-drawer" data-drawer-target="confirm-dialog-drawer" data-drawer-backdrop="false"></a><div id="confirm-dialog-drawer" data-drawer-backdrop="false" class="${ssrRenderClass([{
        "fixed top-0 left-0 right-0 z-50 w-full transition-transform -translate-y-full bg-white dark:bg-gray-800": unref(confirm).placement == "top",
        "fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800 md:min-w-0 min-w-[100vw]": unref(confirm).placement == "right",
        "fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800 md:min-w-0 min-w-[100vw]": unref(confirm).placement == "left",
        "fixed bottom-0 left-0 right-0 z-50 w-full overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none": unref(confirm).placement == "bottom",
        "border-t-4 border-warning-500 dark:border-warning-400": unref(confirm).type == "warning",
        "border-t-4 border-success-500 dark:border-success-400": unref(confirm).type == "success",
        "border-t-4 border-danger-700 dark:border-danger-600": unref(confirm).type == "danger",
        "border-t-4 border-info-500 dark:border-info-400": unref(confirm).type == "info"
      }, "transition-transform -translate-x-full"])}" tabindex="-1" aria-labelledby="drawer-label"><div class="p-4"><h5 id="drawer-label" class="${ssrRenderClass([{
        "text-warning-500 dark:text-warning-400": unref(confirm).type == "warning",
        "text-success-500 dark:text-success-400": unref(confirm).type == "success",
        "text-danger-700 dark:text-danger-600": unref(confirm).type == "danger",
        "text-info-500 dark:text-info-400": unref(confirm).type == "info"
      }, "inline-flex items-center mb-4 text-base font-semibold tracking-widest uppercase"])}" style="${ssrRenderStyle(unref(confirm).headTitle != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).headTitle))}</h5><button type="button" data-drawer-hide="confirm-dialog-drawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">${ssrInterpolate(_ctx.$t("global.close"))}</span></button></div><hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"><div class="${ssrRenderClass([{ "min-h-[calc(100vh-147px)]": unref(confirm).placement == "left" || unref(confirm).placement == "right" }, "p-4"])}">`);
      if (unref(confirm).useIcon) {
        _push(`<span class="flex items-center">`);
        if (unref(confirm).type == "warning") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:alert-square-rounded",
            class: "w-12 h-12 mx-auto mb-4 text-warning-500 dark:text-warning-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "success") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:square-rounded-check",
            class: "w-12 h-12 mx-auto mb-4 text-success-500 dark:text-success-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "danger") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:square-rounded-x",
            class: "w-12 h-12 mx-auto mb-4 text-danger-700 dark:text-danger-600",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(confirm).type == "info") {
          _push(ssrRenderComponent(unref(Icon), {
            icon: "tabler:info-square-rounded",
            class: "w-12 h-12 mx-auto mb-4 text-info-500 dark:text-info-400",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-row items-center mb-5 text-center gap-y-2"><h3 class="${ssrRenderClass([{
        "text-warning-500 dark:text-warning-400": unref(confirm).type == "warning",
        "text-success-500 dark:text-success-400": unref(confirm).type == "success",
        "text-danger-700 dark:text-danger-600": unref(confirm).type == "danger",
        "text-info-500 dark:text-info-400": unref(confirm).type == "info"
      }, "text-lg font-normal"])}" style="${ssrRenderStyle(unref(confirm).title != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).title))}</h3><p class="text-gray-500 dark:text-gray-400" style="${ssrRenderStyle(unref(confirm).message != "" ? null : { display: "none" })}">${ssrInterpolate(_ctx.$t(unref(confirm).message))}</p></div></div><hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"><div class="flex items-center justify-center p-4 gap-x-3">`);
      if (unref(confirm).useCancel) {
        _push(`<span class="w-full">`);
        _push(ssrRenderComponent(_sfc_main$a, {
          size: "sm",
          class: "w-full",
          as: "button",
          rounded: "lg",
          type: "light",
          "data-drawer-hide": "confirm-dialog-drawer",
          onClick: ($event) => unref(confirm).$reset()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t(unref(confirm).labelCancel))}</span>`);
            } else {
              return [
                createVNode("span", {
                  textContent: toDisplayString(_ctx.$t(unref(confirm).labelCancel)),
                  class: "truncate"
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(confirm).useOk) {
        _push(`<span class="w-full">`);
        _push(ssrRenderComponent(_sfc_main$a, {
          size: "sm",
          class: "w-full",
          as: "button",
          rounded: "lg",
          type: unref(confirm).type,
          "data-drawer-hide": "confirm-dialog-drawer",
          onClick: ($event) => setValidConfirm(),
          "x-on:click": "$dispatch('" + unref(confirm).target + "')"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t(unref(confirm).labelOk))}</span>`);
            } else {
              return [
                createVNode("span", {
                  textContent: toDisplayString(_ctx.$t(unref(confirm).labelOk)),
                  class: "truncate"
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(confirm).opened) {
        _push(`<!--[-->`);
        if (unref(confirm).opened) {
          _push(`<div class="${ssrRenderClass([{ "backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100": unref(confirm).backdropBlur }, "fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"])}"></div>`);
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/ConfirmDialog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "info"
    },
    message: {
      type: String,
      default: null
    },
    autodismiss: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let hover = ref(false);
    ref(null);
    const countdown = ref(3);
    const initCountdown = () => {
      setInterval(function() {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value;
      }, 1e3);
    };
    const btnClass2 = computed(() => {
      return {
        info: "bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400 dark:hover:bg-info-100",
        warning: "bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400 dark:hover:bg-warning-100",
        error: "bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400 dark:hover:bg-danger-100",
        success: "bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400 dark:hover:bg-success-100"
      }[props.type];
    });
    computed(() => {
      return {
        info: "text-info-500 bg-info-100 dark:bg-info-800 dark:text-info-200",
        warning: "text-warning-500 bg-warning-100 dark:bg-warning-800 dark:text-warning-200",
        error: "text-danger-500 bg-danger-100 dark:bg-danger-800 dark:text-danger-200",
        success: "text-success-500 bg-success-100 dark:bg-success-800 dark:text-success-200"
      }[props.type];
    });
    const typeClass = computed(() => {
      return {
        info: "border text-info-500 dark:text-info-400 border-info-500 dark:border-info-400",
        warning: "border text-warning-500 dark:text-warning-400 border-warning-500 dark:border-warning-400",
        error: "border text-danger-500 dark:text-danger-400 border-danger-400 dark:border-danger-500",
        success: "border text-success-500 dark:text-success-400 border-success-500 dark:border-success-400"
      }[props.type];
    });
    computed(() => {
      return {
        info: "text-info-400 hover:text-info-900 dark:text-info-500 dark:hover:text-info-300",
        warning: "text-warning-400 hover:text-warning-900 dark:text-warning-500 dark:hover:text-warning-300",
        error: "text-danger-400 hover:text-danger-900 dark:text-danger-500 dark:hover:text-danger-300",
        success: "text-success-400 hover:text-success-900 dark:text-success-500 dark:hover:text-success-300"
      }[props.type];
    });
    computed(() => {
      return {
        info: "text-info-600",
        warning: "text-warning-600",
        error: "text-danger-600",
        success: "text-success-600"
      }[props.type];
    });
    computed(() => {
      return {
        info: "hover:bg-info-100 dark:hover:bg-info-200 focus:ring-info-300",
        warning: "hover:bg-warning-100 dark:hover:bg-warning-200 focus:ring-warning-300",
        error: "hover:bg-danger-100 dark:hover:bg-danger-200 focus:ring-danger-300",
        success: "hover:bg-success-100 dark:hover:bg-success-200 focus:ring-success-300"
      }[props.type];
    });
    onMounted(() => {
      initCountdown();
      if (props.autodismiss) {
        setTimeout(() => emit("remove"), props.duration);
      }
    });
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col bg-white border rounded-lg shadow dark:bg-gray-800", [typeClass.value]],
        role: "alert"
      }, _attrs))} data-v-a5c35b7a><div class="flex items-center justify-between p-4" data-v-a5c35b7a><div class="flex items-center justify-start w-full" data-v-a5c35b7a><div class="${ssrRenderClass([{
        "text-info-500 bg-info-100 border border-info-300 dark:bg-info-800 dark:text-info-200": __props.type == "info",
        "text-warning-500 bg-warning-100 border border-warning-300 dark:bg-warning-800 dark:text-warning-200": __props.type == "warning",
        "text-danger-500 bg-danger-100 border border-danger-300 dark:bg-danger-800 dark:text-danger-200": __props.type == "error",
        "text-success-500 bg-success-100 border border-success-300 dark:bg-success-800 dark:text-success-200": __props.type == "success"
      }, "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"])}" data-v-a5c35b7a><svg style="${ssrRenderStyle(__props.type == "info" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-a5c35b7a><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" data-v-a5c35b7a></path></svg><svg style="${ssrRenderStyle(__props.type == "success" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-a5c35b7a><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-a5c35b7a></path></svg><svg style="${ssrRenderStyle(__props.type == "error" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-a5c35b7a><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" data-v-a5c35b7a></path></svg><svg style="${ssrRenderStyle(__props.type == "warning" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-a5c35b7a><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" data-v-a5c35b7a></path></svg><span class="sr-only" data-v-a5c35b7a>${ssrInterpolate(__props.type)}</span></div><div class="text-sm font-medium ms-3" data-v-a5c35b7a>${__props.message ?? ""}</div></div>`);
      if (__props.autodismiss) {
        _push(`<button type="button" id="countdown" class="${ssrRenderClass([btnClass2.value, "ms-auto -mx-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-a5c35b7a><span class="sr-only" data-v-a5c35b7a>${ssrInterpolate(_ctx.$t("global.close"))}</span><div id="countdown-number" class="${ssrRenderClass([{
          "text-info-600": __props.type == "info",
          "text-warning-600": __props.type == "warning",
          "text-danger-600": __props.type == "error",
          "text-success-600": __props.type == "success"
        }, "font-bold"])}" data-v-a5c35b7a><span class="mr-1" style="${ssrRenderStyle(!unref(hover) ? null : { display: "none" })}" data-v-a5c35b7a>${ssrInterpolate(countdown.value)}</span><svg style="${ssrRenderStyle(unref(hover) ? null : { display: "none" })}" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-a5c35b7a><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-a5c35b7a></path></svg></div><svg class="${ssrRenderClass([{
          "text-info-600": __props.type == "info",
          "text-warning-600": __props.type == "warning",
          "text-danger-600": __props.type == "error",
          "text-success-600": __props.type == "success"
        }, "svg"])}" data-v-a5c35b7a><circle r="18" cx="20" cy="20" stroke="currentColor" data-v-a5c35b7a></circle></svg></button>`);
      } else {
        _push(`<button type="button" class="${ssrRenderClass([{
          "bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400": __props.type == "info",
          "bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400": __props.type == "warning",
          "bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400": __props.type == "error",
          "bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400": __props.type == "success"
        }, "ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-a5c35b7a><span class="sr-only" data-v-a5c35b7a>${ssrInterpolate(_ctx.$t("global.close"))}</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-a5c35b7a><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-a5c35b7a></path></svg></button>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Toast/Item.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const UINotificationToastItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a5c35b7a"]]);
const useToastStore = defineStore("toast", () => {
  let items = ref([]);
  function playAdd(soundType) {
    switch (soundType) {
      case "info":
        var fileName = "info";
        break;
      case "warning":
        var fileName = "warning";
        break;
      case "error":
        var fileName = "error";
        break;
      case "success":
        var fileName = "success";
        break;
      default:
        var fileName = "info";
    }
    var sound = new Howl({
      src: ["/assets/audio/" + fileName + ".mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function playRemove() {
    var sound = new Howl({
      src: ["/assets/audio/close.mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function add(toast) {
    const id = randomID(15);
    items.value.unshift({
      key: "toast-" + id,
      ...toast
    });
    playAdd(toast.type);
  }
  function remove(index) {
    items.value.splice(index, 1);
    playRemove();
  }
  function $reset() {
    items.value = [];
  }
  return {
    items,
    playAdd,
    playRemove,
    add,
    remove,
    $reset
  };
});
function useClient() {
  const isClient = computed(() => {
    return typeof window === "undefined" ? false : true;
  });
  return {
    isClient
  };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToastStore();
    const { isClient } = useClient();
    const page = usePage();
    const initFlash = () => {
      if (page.props.flash.notification.pipe === "toast") {
        if (page.props.flash.info) {
          toast.add({
            type: "info",
            message: page.props.flash.info,
            autodismiss: page.props.flash.notification.autodismiss
          });
        }
        if (page.props.flash.warning) {
          toast.add({
            type: "warning",
            message: page.props.flash.warning,
            autodismiss: page.props.flash.notification.autodismiss
          });
        }
        if (page.props.flash.error) {
          toast.add({
            type: "error",
            message: page.props.flash.error,
            autodismiss: page.props.flash.notification.autodismiss
          });
        }
        if (page.props.flash.success) {
          toast.add({
            type: "success",
            message: page.props.flash.success,
            autodismiss: page.props.flash.notification.autodismiss
          });
        }
      }
    };
    const destroyToast = () => {
      toast.$reset();
    };
    const initToast = () => {
      const flash = page.props.flash;
      let hasFlash = false;
      if (flash.notification.pipe === "toast") {
        Object.keys(flash).forEach(function(key) {
          if (key === "info" || key === "warning" || key === "error" || key === "success") {
            if (flash[key] != "") {
              hasFlash = true;
            }
          }
        });
        if (hasFlash && toast.items.length === 0) {
          return initFlash();
        }
      }
    };
    onMounted(() => {
      destroyToast();
      initToast();
    });
    if (isClient.value) {
      let removeFinishEventListener = router.on("finish", () => {
        initToast();
      });
      onUnmounted(() => removeFinishEventListener());
    }
    function remove(index) {
      toast.remove(index);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "enter-from-class": "translate-x-full opacity-0",
        "enter-active-class": "duration-500",
        "leave-active-class": "duration-500",
        "leave-to-class": "translate-x-full opacity-0",
        class: "fixed z-50 w-full max-w-[90%] md:max-w-[20%] space-y-4 min-w-xs top-4 right-4"
      }, _attrs))}>`);
      ssrRenderList(unref(toast).items, (item, index) => {
        _push(ssrRenderComponent(UINotificationToastItem, {
          key: item.key,
          type: item.type,
          message: item.message,
          autodismiss: item.autodismiss,
          duration: 3e3,
          onRemove: ($event) => remove(index)
        }, null, _parent));
      });
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Toast/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "alert-" + randomID(15)
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    placement: {
      type: String,
      default: "top"
    },
    variant: {
      type: String,
      default: "info"
    },
    size: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    autodismiss: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["close-alert"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const instance = getCurrentInstance();
    let hover = ref(false);
    ref(null);
    const countdown = ref(3);
    const initCountdown = () => {
      setInterval(function() {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value;
      }, 1e3);
    };
    const initClose = () => {
      setTimeout(function() {
        if (props.show) instance.refs.closeAlert.click();
      }, 2800);
    };
    const sizeClass = props.size ? "min-w-" + props.size + " max-w-" + props.size : null;
    const btnClass2 = computed(() => {
      return {
        info: "bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400 dark:hover:bg-info-100",
        warning: "bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400 dark:hover:bg-warning-100",
        error: "bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400 dark:hover:bg-danger-100",
        success: "bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400 dark:hover:bg-success-100"
      }[props.variant];
    });
    const baseClass = computed(() => {
      return {
        default: "flex items-center justify-between p-4 dark:bg-gray-800",
        boxed: "flex items-center justify-between p-4 border rounded-lg dark:bg-gray-800"
      }[props.type];
    });
    const borderClass = computed(() => {
      return {
        default: props.placement == "top" ? "border-b-4" : "border-t-4",
        boxed: "border"
      }[props.type];
    });
    const variantClass2 = computed(() => {
      if (props.type == "default") {
        return {
          info: "text-info-800 border-info-300 bg-info-50 dark:text-info-400 dark:border-info-800",
          warning: "text-warning-800 border-warning-300 bg-warning-50 dark:text-warning-400 dark:border-warning-800",
          error: "text-danger-800 border-danger-300 bg-danger-50 dark:text-danger-400 dark:border-danger-800",
          success: "text-success-800 border-success-300 bg-success-50 dark:text-success-400 dark:border-success-800"
        }[props.variant];
      } else if (props.type == "boxed") {
        return {
          info: "text-info-800 border-info-300 bg-info-50 dark:text-info-400",
          warning: "text-warning-800 border-warning-300 bg-warning-50 dark:text-warning-400",
          error: "text-danger-800 border-danger-300 bg-danger-50 dark:text-danger-400",
          success: "text-success-800 border-success-300 bg-success-50 dark:text-success-400"
        }[props.variant];
      }
    });
    onMounted(() => {
      if (props.autodismiss) {
        initCountdown();
        initClose();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: __props.name,
        style: __props.show ? null : { display: "none" },
        class: ["w-full", baseClass.value, borderClass.value, variantClass2.value, unref(sizeClass)],
        role: "alert"
      }, _attrs))} data-v-1e0d4613><div class="${ssrRenderClass([{ "justify-center": __props.type == "default", "justify-start": __props.type == "boxed" }, "flex items-center w-full"])}" data-v-1e0d4613>`);
      if (__props.message) {
        _push(`<!--[--><div class="${ssrRenderClass([{
          "text-info-500 bg-info-100 border border-info-300 dark:bg-info-800 dark:text-info-200": __props.variant == "info",
          "text-warning-500 bg-warning-100 border border-warning-300 dark:bg-warning-800 dark:text-warning-200": __props.variant == "warning",
          "text-danger-500 bg-danger-100 border border-danger-300 dark:bg-danger-800 dark:text-danger-200": __props.variant == "error",
          "text-success-500 bg-success-100 border border-success-300 dark:bg-success-800 dark:text-success-200": __props.variant == "success"
        }, "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"])}" data-v-1e0d4613><svg style="${ssrRenderStyle(__props.variant == "info" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-1e0d4613><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" data-v-1e0d4613></path></svg><svg style="${ssrRenderStyle(__props.variant == "success" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-1e0d4613><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-1e0d4613></path></svg><svg style="${ssrRenderStyle(__props.variant == "error" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-1e0d4613><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" data-v-1e0d4613></path></svg><svg style="${ssrRenderStyle(__props.variant == "warning" ? null : { display: "none" })}" class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-1e0d4613><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" data-v-1e0d4613></path></svg><span class="sr-only" data-v-1e0d4613>${ssrInterpolate(_ctx.$t("global.info"))}</span></div><div class="text-sm font-medium ms-3" data-v-1e0d4613>${__props.message ?? ""}</div><!--]-->`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div>`);
      if (__props.autodismiss) {
        _push(`<button type="button" id="countdown" class="${ssrRenderClass([btnClass2.value, "ms-auto -mx-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)}${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-1e0d4613><span class="sr-only" data-v-1e0d4613>${ssrInterpolate(_ctx.$t("global.close"))}</span><div id="countdown-number" class="${ssrRenderClass([{
          "text-info-600": __props.variant == "info",
          "text-warning-600": __props.variant == "warning",
          "text-danger-600": __props.variant == "error",
          "text-success-600": __props.variant == "success"
        }, "font-bold"])}" data-v-1e0d4613><span class="mr-1" style="${ssrRenderStyle(!unref(hover) ? null : { display: "none" })}" data-v-1e0d4613>${ssrInterpolate(countdown.value)}</span><svg style="${ssrRenderStyle(unref(hover) ? null : { display: "none" })}" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-1e0d4613><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-1e0d4613></path></svg></div><svg class="${ssrRenderClass([{
          "text-info-600": __props.variant == "info",
          "text-warning-600": __props.variant == "warning",
          "text-danger-600": __props.variant == "error",
          "text-success-600": __props.variant == "success"
        }, "svg"])}" data-v-1e0d4613><circle r="18" cx="20" cy="20" stroke="currentColor" data-v-1e0d4613></circle></svg></button>`);
      } else {
        _push(`<button type="button" class="${ssrRenderClass([{
          "bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400": __props.variant == "info",
          "bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400": __props.variant == "warning",
          "bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400": __props.variant == "error",
          "bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400": __props.variant == "success"
        }, "ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)}${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-1e0d4613><span class="sr-only" data-v-1e0d4613>${ssrInterpolate(_ctx.$t("global.close"))}</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-1e0d4613><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-1e0d4613></path></svg></button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Alert/Item.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const UINotificationAlertItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-1e0d4613"]]);
const useAlertStore = defineStore("alert", () => {
  let id = ref(null);
  let show = ref(false);
  let type = ref("default");
  let placement = ref("top");
  let variant = ref("info");
  let size = ref(null);
  let message = ref(null);
  let autodismiss = ref(true);
  function playAdd(soundType) {
    switch (soundType) {
      case "info":
        var fileName = "info";
        break;
      case "warning":
        var fileName = "warning";
        break;
      case "error":
        var fileName = "error";
        break;
      case "success":
        var fileName = "success";
        break;
      default:
        var fileName = "info";
    }
    var sound = new Howl({
      src: ["/assets/audio/" + fileName + ".mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function playRemove() {
    var sound = new Howl({
      src: ["/assets/audio/close.mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function $patch(params) {
    Object.keys(params).forEach(function(key) {
      $set(key, params[key]);
    });
  }
  function add(params) {
    $reset();
    id.value = "alert-" + randomID(15);
    show.value = true;
    $patch(params);
    playAdd(variant.value);
  }
  function $set(k2, v2) {
    if (k2 == "id") {
      id.value = v2;
    }
    if (k2 == "show") {
      if (v2) {
        show.value = true;
      } else {
        show.value = false;
      }
    }
    if (k2 == "type") {
      type.value = v2;
    }
    if (k2 == "placement") {
      placement.value = v2;
    }
    if (k2 == "variant") {
      variant.value = v2;
    }
    if (k2 == "size") {
      size.value = v2;
    }
    if (k2 == "message") {
      message.value = v2;
    }
    if (k2 == "autodismiss") {
      if (v2) {
        autodismiss.value = true;
      } else {
        autodismiss.value = false;
      }
    }
  }
  function $reset() {
    id.value = null;
    show.value = false;
    type.value = "default";
    placement.value = "top";
    variant.value = "info";
    size.value = null;
    message.value = null;
    autodismiss.value = true;
    playRemove();
  }
  return {
    id,
    show,
    type,
    placement,
    variant,
    size,
    message,
    autodismiss,
    playAdd,
    playRemove,
    $patch,
    add,
    $set,
    $reset
  };
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClient();
    const alert = useAlertStore();
    const placementClass = computed(() => {
      if (alert.type == "default") {
        return {
          top: "top-0 start-0",
          bottom: "bottom-0 start-0"
        }[alert.placement];
      } else if (alert.type == "boxed") {
        return {
          top: "top-4 start-0 px-4",
          bottom: "bottom-4 start-0 px-4"
        }[alert.placement];
      }
    });
    const page = usePage();
    const initFlash = () => {
      if (page.props.flash.notification.pipe == "alert") {
        if (page.props.flash.info) {
          alert.add({
            type: page.props.flash.notification.type,
            placement: page.props.flash.notification.placement,
            size: page.props.flash.notification.size,
            autodismiss: page.props.flash.notification.autodismiss,
            variant: "info",
            message: page.props.flash.info
          });
        }
        if (page.props.flash.warning) {
          alert.add({
            type: page.props.flash.notification.type,
            placement: page.props.flash.notification.placement,
            size: page.props.flash.notification.size,
            autodismiss: page.props.flash.notification.autodismiss,
            variant: "warning",
            message: page.props.flash.warning
          });
        }
        if (page.props.flash.error) {
          alert.add({
            type: page.props.flash.notification.type,
            placement: page.props.flash.notification.placement,
            size: page.props.flash.notification.size,
            autodismiss: page.props.flash.notification.autodismiss,
            variant: "error",
            message: page.props.flash.error
          });
        }
        if (page.props.flash.success) {
          alert.add({
            type: page.props.flash.notification.type,
            placement: page.props.flash.notification.placement,
            size: page.props.flash.notification.size,
            autodismiss: page.props.flash.notification.autodismiss,
            variant: "success",
            message: page.props.flash.success
          });
        }
      }
    };
    const destroyAlert = () => {
      alert.$reset();
    };
    const initAlert = () => {
      const flash = page.props.flash;
      let hasFlash = false;
      if (flash.notification.pipe === "alert") {
        Object.keys(flash).forEach(function(key) {
          if (key === "info" || key === "warning" || key === "error" || key === "success") {
            if (flash[key] != "") {
              hasFlash = true;
            }
          }
        });
        if (hasFlash && !alert.message) {
          return initFlash();
        }
      }
    };
    onMounted(() => {
      destroyAlert();
      initAlert();
    });
    if (isClient.value) {
      let removeFinishEventListener = router.on("finish", () => {
        initAlert();
      });
      onUnmounted(() => removeFinishEventListener());
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed z-50 flex flex-col items-center justify-center w-full space-y-4", [placementClass.value]]
      }, _attrs))}>`);
      if (unref(alert).show) {
        _push(ssrRenderComponent(UINotificationAlertItem, {
          show: unref(alert).show,
          type: unref(alert).type,
          placement: unref(alert).placement,
          variant: unref(alert).variant,
          size: unref(alert).size,
          autodismiss: unref(alert).autodismiss,
          message: unref(alert).message,
          onCloseAlert: ($event) => destroyAlert(),
          key: unref(alert).id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!unref(alert).message) {
                ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                !unref(alert).message ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Alert/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const variantClass = "text-gray-800 border-gray-300 dark:text-gray-400";
const btnClass = "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-300";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "banner-" + randomID(15)
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    placement: {
      type: String,
      default: "top"
    },
    variant: {
      type: String,
      default: "neutral"
    },
    size: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    autodismiss: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["close-banner"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const instance = getCurrentInstance();
    let hover = ref(false);
    ref(null);
    const countdown = ref(3);
    const initCountdown = () => {
      setInterval(function() {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value;
      }, 1e3);
    };
    const initClose = () => {
      setTimeout(function() {
        if (props.show) instance.refs.closeBanner.click();
      }, 2800);
    };
    const baseClass = computed(() => {
      return {
        default: "flex items-center justify-between p-4 dark:bg-gray-800",
        boxed: "flex items-center justify-between p-4 border rounded-lg dark:bg-gray-800"
      }[props.type];
    });
    const sizeClass = props.size ? "min-w-" + props.size + " max-w-" + props.size : null;
    const borderClass = computed(() => {
      return {
        default: props.placement == "top" ? "border-b" : "border-t",
        boxed: "border"
      }[props.type];
    });
    const bgClass = computed(() => {
      return {
        neutral: "bg-gray-50",
        light: "bg-white"
      }[props.variant];
    });
    onMounted(() => {
      if (props.autodismiss) {
        initCountdown();
        initClose();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: __props.name,
        style: __props.show ? null : { display: "none" },
        class: ["w-full", baseClass.value, borderClass.value, variantClass, bgClass.value, unref(sizeClass)],
        role: "banner"
      }, _attrs))} data-v-19771a82><div class="${ssrRenderClass([{ "justify-center": __props.type == "default", "justify-start": __props.type == "boxed" }, "flex items-center w-full"])}" data-v-19771a82>`);
      if (__props.message) {
        _push(`<div class="flex items-center mx-auto" data-v-19771a82><p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400" data-v-19771a82><span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 p-1 rounded-full bg-info-200 me-3 dark:bg-info-600" data-v-19771a82><svg class="w-3 h-3 text-info-500 dark:text-info-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19" data-v-19771a82><path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" data-v-19771a82></path></svg><span class="sr-only" data-v-19771a82>${ssrInterpolate(_ctx.$t("global.info"))}</span></span><span data-v-19771a82>${__props.message ?? ""}</span></p></div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div>`);
      if (__props.autodismiss) {
        _push(`<button type="button" id="countdown" class="${ssrRenderClass([btnClass, "ms-auto -mv-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)}${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-19771a82><span class="sr-only" data-v-19771a82>${ssrInterpolate(_ctx.$t("global.close"))}</span><div id="countdown-number" class="${ssrRenderClass([{
          "text-info-600": __props.variant == "neutral" || __props.variant == "light",
          "text-warning-600": __props.variant == "warning",
          "text-danger-600": __props.variant == "error",
          "text-success-600": __props.variant == "success"
        }, "font-bold"])}" data-v-19771a82><span class="mr-1" style="${ssrRenderStyle(!unref(hover) ? null : { display: "none" })}" data-v-19771a82>${ssrInterpolate(countdown.value)}</span><svg style="${ssrRenderStyle(unref(hover) ? null : { display: "none" })}" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-19771a82><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-19771a82></path></svg></div><svg class="${ssrRenderClass([{
          "text-info-600": __props.variant == "neutral" || __props.variant == "light",
          "text-warning-600": __props.variant == "warning",
          "text-danger-600": __props.variant == "error",
          "text-success-600": __props.variant == "success"
        }, "svg"])}" data-v-19771a82><circle r="18" cx="20" cy="20" stroke="currentColor" data-v-19771a82></circle></svg></button>`);
      } else {
        _push(`<button type="button" class="${ssrRenderClass([btnClass, "ms-auto -mv-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"])}"${ssrRenderAttr("data-dismiss-target", "#" + __props.name)}${ssrRenderAttr("aria-label", _ctx.$t("global.close"))} data-v-19771a82><span class="sr-only" data-v-19771a82>${ssrInterpolate(_ctx.$t("global.close"))}</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-19771a82><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-19771a82></path></svg></button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Banner/Item.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UINotificationBannerItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-19771a82"]]);
const useBannerStore = defineStore("banner", () => {
  let id = ref(null);
  let show = ref(false);
  let type = ref("default");
  let placement = ref("top");
  let variant = ref("neutral");
  let size = ref(null);
  let message = ref(null);
  let autodismiss = ref(false);
  let backdropBlur = ref(true);
  let payload = ref(null);
  let props = ref(null);
  function playAdd(soundType) {
    switch (soundType) {
      case "info":
        var fileName = "info";
        break;
      case "warning":
        var fileName = "warning";
        break;
      case "error":
        var fileName = "error";
        break;
      case "success":
        var fileName = "success";
        break;
      default:
        var fileName = "info";
    }
    var sound = new Howl({
      src: ["/assets/audio/" + fileName + ".mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function playRemove() {
    var sound = new Howl({
      src: ["/assets/audio/close.mp3"],
      autoplay: true,
      volume: 0.3
      // onplayerror: function () {
      //     sound.once('unlock', function () {
      //         sound.play();
      //     });
      // }
    });
    sound.play();
  }
  function $patch(params) {
    Object.keys(params).forEach(function(key) {
      $set(key, params[key]);
    });
  }
  function add(params) {
    $reset();
    id.value = "banner-" + randomID(15);
    show.value = true;
    $patch(params);
    playAdd("info");
  }
  function $set(k2, v2) {
    if (k2 == "id") {
      id.value = v2;
    }
    if (k2 == "show") {
      if (v2) {
        show.value = true;
      } else {
        show.value = false;
      }
    }
    if (k2 == "type") {
      type.value = v2;
    }
    if (k2 == "placement") {
      placement.value = v2;
    }
    if (k2 == "variant") {
      variant.value = v2;
    }
    if (k2 == "size") {
      size.value = v2;
    }
    if (k2 == "message") {
      message.value = v2;
    }
    if (k2 == "autodismiss") {
      if (v2) {
        autodismiss.value = true;
      } else {
        autodismiss.value = false;
      }
    }
    if (k2 == "backdropBlur") {
      if (v2) {
        backdropBlur.value = true;
      } else {
        backdropBlur.value = false;
      }
    }
    if (k2 == "payload") {
      payload.value = v2;
    }
    if (k2 == "props") {
      props.value = v2;
    }
  }
  function $reset() {
    id.value = null;
    show.value = false;
    type.value = "default";
    placement.value = "top";
    variant.value = "neutral";
    size.value = null;
    message.value = null;
    autodismiss.value = false;
    backdropBlur.value = true;
    payload.value = null;
    props.value = null;
    playRemove();
  }
  return {
    id,
    show,
    type,
    placement,
    variant,
    size,
    message,
    autodismiss,
    backdropBlur,
    payload,
    props,
    playAdd,
    playRemove,
    $patch,
    add,
    $set,
    $reset
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClient();
    const banner = useBannerStore();
    const placementClass = computed(() => {
      if (banner.type == "default") {
        return {
          top: "top-0 start-0",
          bottom: "bottom-0 start-0"
        }[banner.placement];
      } else if (banner.type == "boxed") {
        return {
          top: "top-4 start-0 px-4",
          bottom: "bottom-4 start-0 px-4"
        }[banner.placement];
      }
    });
    const page = usePage();
    const initFlash = () => {
      if (page.props.flash.banner.message && !banner.message) {
        banner.add(page.props.flash.banner);
      }
    };
    const destroyBanner = () => {
      banner.$reset();
    };
    const initBanner = () => {
      page.props.flash;
      let hasFlash = false;
      if (page.props.flash.banner.message && !banner.message) {
        hasFlash = true;
      }
      if (hasFlash && !banner.message) {
        return initFlash();
      }
    };
    onMounted(() => {
      destroyBanner();
      initBanner();
    });
    if (isClient.value) {
      let removeFinishEventListener = router.on("finish", () => {
        initBanner();
      });
      onUnmounted(() => removeFinishEventListener());
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([[placementClass.value], "fixed z-50 flex flex-col items-center justify-center w-full space-y-4"])}">`);
      if (unref(banner).show) {
        _push(ssrRenderComponent(UINotificationBannerItem, {
          show: unref(banner).show,
          type: unref(banner).type,
          placement: unref(banner).placement,
          variant: unref(banner).variant,
          size: unref(banner).size,
          autodismiss: unref(banner).autodismiss,
          message: unref(banner).message,
          onCloseBanner: ($event) => destroyBanner(),
          key: unref(banner).id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(banner).payload) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(banner).payload), unref(banner).props ?? null, null), _parent2, _scopeId);
              } else if (!unref(banner).message) {
                ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(banner).payload ? (openBlock(), createBlock(resolveDynamicComponent(unref(banner).payload), mergeProps({ key: 0 }, unref(banner).props ?? null), null, 16)) : !unref(banner).message ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(banner).show) {
        _push(`<!--[-->`);
        if (unref(banner).show) {
          _push(`<div class="${ssrRenderClass([{ "backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100": unref(banner).backdropBlur }, "fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"])}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Notification/Banner/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClient();
    const clickEffect = (element) => {
      if (isClient.value) {
        const elements = document.querySelectorAll(element);
        elements.forEach((el) => {
          el.addEventListener("click", (event) => {
            var sound = new Howl({
              src: ["/assets/audio/click.mp3"],
              autoplay: true,
              volume: 0.3
            });
            sound.play();
          });
        });
      }
    };
    onMounted(() => {
      if (isClient.value) {
        clickEffect("a");
        clickEffect("button");
        initFlowbite();
      }
    });
    if (isClient.value) {
      router.on("finish", (event) => {
        clickEffect("a");
        clickEffect("button");
        initFlowbite();
      });
      router.on("navigate", (event) => {
        clickEffect("a");
        clickEffect("button");
        initFlowbite();
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHead = resolveComponent("UIHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UIHead, null, null, _parent));
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, { mode: "inertia" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, { mode: "vertical" }, null, _parent));
      _push(ssrRenderComponent(unref(Modal), null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Default.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Head",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const appName2 = "VIHANT2FL";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head", true);
      _push(ssrRenderComponent(_component_Head, mergeProps({
        title: __props.title ? `${__props.title} - ${unref(appName2)}` : `${unref(appName2)}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.description) {
              _push2(`<!--[--><meta name="description"${ssrRenderAttr("content", __props.description ? `${__props.description} - ${unref(appName2)}` : `${unref(appName2)}`)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", __props.description ? `${__props.description}`.toLowerCase().replace(/\s/g, ",") : `${unref(appName2)}`.toLowerCase().replace(/\s/g, ","))}${_scopeId}><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.description ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("meta", {
                  name: "description",
                  content: __props.description ? `${__props.description} - ${unref(appName2)}` : `${unref(appName2)}`
                }, null, 8, ["content"]),
                createVNode("meta", {
                  name: "keywords",
                  content: __props.description ? `${__props.description}`.toLowerCase().replace(/\s/g, ",") : `${unref(appName2)}`.toLowerCase().replace(/\s/g, ",")
                }, null, 8, ["content"])
              ], 64)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Head.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ClientOnly",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClient();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isClient)) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ClientOnly.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appName = "VIHANT2FL";
const pinia = createPinia();
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    // title: (title) => title ? `${title} - ${appName}` : `${appName}`,
    title: (title) => title ? `${title}` : `${appName}`,
    resolve: (name) => {
      const page2 = resolvePageComponent(
        `./Pages/${name}.vue`,
        /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-Bx7CV34T.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-IMh8MAOI.js"), "./Pages/Auth/Recover.vue": () => import("./assets/Recover-BWwBQkfP.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-rp3ykGWq.js"), "./Pages/Auth/Reset.vue": () => import("./assets/Reset-Cp6a-_CI.js"), "./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-CkSasIlw.js"), "./Pages/Auth/TwoFactorEnable.vue": () => import("./assets/TwoFactorEnable-SWjjwbl-.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-berm9lbd.js"), "./Pages/Dashboard/Account/Form/ChangePasswordForm.vue": () => import("./assets/ChangePasswordForm-CytQYQGy.js"), "./Pages/Dashboard/Account/Form/TwoFactorForm.vue": () => import("./assets/TwoFactorForm-B5rxUHb1.js"), "./Pages/Dashboard/Account/Form/TwoFactorFormOld.vue": () => import("./assets/TwoFactorFormOld-nfvSjBE8.js"), "./Pages/Dashboard/Account/Index.vue": () => import("./assets/Index-CGI6zUYz.js"), "./Pages/Dashboard/Account/Security.vue": () => import("./assets/Security-vCPVtf2q.js"), "./Pages/Dashboard/Index.vue": () => import("./assets/Index-CmRrDisZ.js"), "./Pages/Home.vue": () => import("./assets/Home-BArvzSS9.js"), "./Pages/Test/Form.vue": () => import("./assets/Form-B95s9F6L.js"), "./Pages/User/Index.vue": () => import("./assets/Index-B9SqaU3G.js") })
      );
      page2.then((module) => {
        if (module.default.layout === void 0) {
          module.default.layout = _sfc_main$2;
        }
      });
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(i18nVue, {
        lang: "id",
        resolve: (lang) => {
          const langs = /* @__PURE__ */ Object.assign({ "../../lang/php_en.json": __vite_glob_1_0, "../../lang/php_id.json": __vite_glob_1_1 });
          return langs[`../../lang/${lang}.json`].default;
        }
      }).use(modal, {
        resolve: (name) => {
          const page2 = resolvePageComponent(
            `./Modals/${name}.vue`,
            /* @__PURE__ */ Object.assign({ "./Modals/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-OiT94ETo.js"), "./Modals/Auth/Login.vue": () => import("./assets/Login-BN_cwWlH.js"), "./Modals/Auth/Recover.vue": () => import("./assets/Recover-9asQjNIy.js"), "./Modals/Auth/Register.vue": () => import("./assets/Register-jO8WntMf.js"), "./Modals/Auth/Reset.vue": () => import("./assets/Reset-hqCml_vD.js"), "./Modals/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-Bkjm2jNN.js"), "./Modals/Auth/TwoFactorEnable.vue": () => import("./assets/TwoFactorEnable-CItl1gHW.js"), "./Modals/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-6wR1NNBU.js") })
          );
          page2.then((module) => {
            if (module.default.layout === void 0) {
              module.default.layout = _sfc_main$2;
            }
          });
          return page2;
        }
      }).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(pinia).use(plugin).mixin({
        methods: {
          asset
        }
      }).component("Link", Link).component("Head", Head).component("UIHead", _sfc_main$1).component("ClientOnly", _sfc_main);
    },
    progress: {
      color: "#2299dd"
    }
  })
);
export {
  _sfc_main$a as _,
  useClient as a,
  _sfc_main$2 as b,
  _export_sfc as c,
  useConfirmStore as d,
  randomID as r,
  useToastStore as u
};
