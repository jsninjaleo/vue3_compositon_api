export type ToastType = "info" | "success" | "error";

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
  duration: number;
  transition? : string;
}

export interface ToastApi {
  createToast: (toast: Toast) => void;
  destroyToast: (toast: Toast) => void;
  destroyAllToasts: () => void;
}

export interface ToastMsg {
  message: string,
  name: string,
  type: ToastType,
  duration: number
}