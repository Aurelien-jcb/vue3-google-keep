import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { camelize, getCurrentInstance, toHandlerKey } from 'vue'
import { Store } from 'vuex';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showToast = <S>(store: Store<S>, message: string, success: boolean) => {
  const variant = success ? "default" : "destructive";
  store.dispatch("showToast", { message, variant });
};
