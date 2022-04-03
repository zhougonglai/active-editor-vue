import { defineNuxtPlugin } from '#app'

let nodeList = {};

function createDocumentHandle(el, binding) {
  return function(e) {
    const target = e.target
    // console.log(el, e.target, binding.arg);
    if (el.contains(target) || binding.arg.contains(target)) {
      return false
    }
    if (binding.arg) {
      binding.value(e)
    }
  }
}
const handler = (e) => {
  const { documentHandler } = nodeList
  if (documentHandler) {
    documentHandler(e)
  }
}

const clickOutside = {
  beforeMount(el, binding) {
    window.addEventListener('click', handler)
    nodeList = {
      documentHandler: createDocumentHandle(el, binding)
    };
  },
  updated(el, binding) {
    nodeList = {
      documentHandler: createDocumentHandle(el, binding)
    };
  },
  unmounted() {
    window.removeEventListener('click', handler)
  }
}


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutside)
})
