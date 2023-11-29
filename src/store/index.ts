import { createStore } from 'vuex';
import toast from '@/store/modules/toast';
import note from '@/store/modules/note';

export default createStore({
  modules: {
    toast,
    note
  }
});