<template>
  <div>
    <ul class="notifications fixed top-8 right-5"></ul>
    <div class="flex flex-col items-center justify-center gap-6 w-screen h-screen">
      <div class="flex justify-center items-center" v-for="item in toastButtons" :key="item.message">
        <button @click.prevent="callToast(item)"
          :class="[
            'inline-block py-4 text-xl text-white rounded-xl w-64 duration-150 ease-in-out',
            item.type === 'info' && 'hover:bg-blue-600 bg-blue-500',
            item.type === 'success' && 'hover:bg-green-600 bg-green-500',
            item.type === 'error' && 'hover:bg-red-600 bg-red-500',
          ]"
        >
          {{ item.name }}
        </button>
      </div>
      <button 
        @click.prevent="deleteAllToasts()"
        class="inline-block py-4 text-xl text-white rounded-xl w-64 duration-150 ease-in-out hover:bg-gray-600 bg-gray-500"
        >
        Delete all messages
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from './composables/useToast';
import { ref, Ref } from 'vue'
import { ToastMsg } from './types'

const { addToast, removeAllToasts } = useToast();

const ToastButtons: ToastMsg[] = [
    {
        message: "This is a info message.",
        name: "Show info message",
        type: "info",
        duration: 3000,
    },
    {
        message: "This is a success message.",
        name: "Show success message",
        type: "success",
        duration: 3000,
    },
    {
        message: "This is an error message.",
        name: "Show error message",
        type: "error",
        duration: 3000,
    }
]
const toastButtons: Ref<ToastMsg[]> = ref(ToastButtons)

const callToast = (msg: ToastMsg): void => {
  addToast(msg.type, msg.message, msg.duration);
}

const deleteAllToasts = (): void => {
  removeAllToasts();
}
</script>