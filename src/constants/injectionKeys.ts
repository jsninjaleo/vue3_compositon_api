import { InjectionKey } from 'vue';
import { ToastApi } from '../types'; 

export const toastInjectKey: InjectionKey<ToastApi> = Symbol('customToast');