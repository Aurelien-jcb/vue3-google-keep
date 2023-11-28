import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()

interface State {
  showToast: boolean;
}

const state: State = {
  showToast: false
};

const mutations = {
  show_toast(state: State, payload: { message: string; variant: "default" | "destructive" }) {
    toast({
      description: payload.message,
      variant: payload.variant,
    });
    state.showToast = true;
  },
};

const actions = {
  showToast({ commit }: { commit: any }, payload: { message: string; success: boolean }) {
    const variant = payload.success ? "default" : "destructive";
    commit("show_toast", { message: payload.message, variant });
  },
};

export default {
  state,
  mutations,
  actions
}

