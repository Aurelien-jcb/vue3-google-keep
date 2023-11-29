import type { Note } from "@/types";
import * as Api from "@/api/index"

interface State {
  notes: Note[]
}

const state: State = {
  notes: []
};

// const getters = {
//   allNotes: (state: { notes: Note[]; }) => state.notes,
// };

const mutations = {
  get_notes(state: { notes: any; }, notes: any) {
    return state.notes = notes
  },
  add_note(state: { notes: Note[] }, note: Note) {
    state.notes.push(note);
  },
  delete_note(state: { notes: any[]; }, id: any) {
    state.notes = state.notes.filter((note) => note.id != id);
  },
  update_todo(state: { notes: any[]; }, note: any) {
    let index = state.notes.findIndex((note) => note.id == note.id);
    if (index != -1) {
      state.notes[index] = note;
    }
  },
};

const actions = {
  async getAllNotes({ commit }: { commit: any }) {
    const notes = Api.getAllNotes();
    commit('get_notes', notes);
  },
  addNote({ commit }: { commit: any }, note: Note) {
    commit("add_note", note);
  },
  deleteNote({ commit }: { commit: any }, id: Number) {
    commit("delete_note", id);
  },
  updateNote({ commit }: { commit: any }, note: Note) {
    commit("update_note", note);
  }
}

export default {
  state,
  mutations,
  actions
}