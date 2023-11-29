export type Note = {
  id?: number,
  title: string;
  content: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};