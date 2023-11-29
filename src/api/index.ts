import { Note } from "@/types"

const notes: Note[] = [
  {
    id: 1,
    title: 'note 1',
    content: 'Contenu'
  }
]

export const getAllNotes = () => {
  return notes;
};
