<template>
  <div class="toast-container top-9 right-6 fixed">
    <transition-group name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'rounded-lg border-2 relative rounded w-54 py-4 mb-3 justify-between font-medium text-center',
          toast.type === 'info' && 'border-blue-600 text-blue-600',
          toast.type === 'success' && 'border-green-600 text-green-600',
          toast.type === 'error' && 'border-red-600 text-red-600',
          toast.transition
        ]"
      >
        {{ toast.message }}
      </div>
    </transition-group>
  </div>
  <slot />
</template>
  
<script lang="ts">
import { provide, ref } from 'vue';
import { toastInjectKey } from '../constants/injectionKeys'
import { Toast } from '../types'

export default {
  name: 'ToastProvider',
  setup() {
    const toasts = ref<Toast[]>([]);

    const createToast = (toast: Toast): void => {
      toast.transition = 'animate-toast_show_toast';
      toast.id = Date.now();
      toasts.value.push(toast);
      setTimeout(() => {
        if(toasts.value.indexOf(toast) > -1) destroyToast(toast);
      }, toast.duration);
    }

    const destroyToast = (toast: Toast): void => {
      const index = toasts.value.indexOf(toast);
      toasts.value[index].transition = 'animate-toast_hide_toast';
      setTimeout(() => toasts.value.splice(0, 1), 400);
    }

    const destroyAllToasts = (): void => {
      toasts.value.map((item)=>{
        item.transition = 'animate-toast_hide_toast';
        return item;
      });
      setTimeout(() => toasts.value = [], 400);
    }

    provide(toastInjectKey, { createToast, destroyToast, destroyAllToasts })

    return {
      toasts,
    };
  },
};
</script>
  