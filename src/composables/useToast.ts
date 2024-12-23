import { inject } from 'vue'
import { ToastApi, ToastType } from '../types'
import { toastInjectKey } from '../constants/injectionKeys'

export const useToast = () => {
  const toastApi = inject(toastInjectKey) as ToastApi;

  const addToast = (type: ToastType, message: string, duration = 3000): void => {
    const toast = { id: Date.now(), type, message, duration }
    toastApi.createToast(toast);
  }

  const removeAllToasts = (): void => {
    toastApi.destroyAllToasts();
  }

  return {
    addToast,
    removeAllToasts,
  }
}
