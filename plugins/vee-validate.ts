import { defineRule } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);
  defineRule("max", max);
});
