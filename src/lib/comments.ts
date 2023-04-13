export type Data = {
  id?: string;
  description: string;
  date?: string;
  url?: string;
};

type DataSet = {
  [key: string]: Data;
};

const data: Data[] = [
  {
    id: "1",
    description: "My first post comment",
    url: "first-comment",
  },
  {
    id: "2",
    description: "My second post comment",
    url: "second-comment",
  },
];

export async function getComments() {
  return data;
}

export async function getCommentById(commentId: string) {
  const dataSet: DataSet = {
    "1": {
      description: "My first post comment...",
      date: "Oct 10, 2022",
      url: "first-comment",
    },
    "2": {
      description: "My second post comment...",
      date: "Oct 20, 2022",
      url: "second-comment",
    },
    "3": {
      description: "My post comment...",
      date: "Oct 30, 2022",
      url: "third-comment",
    },
  };
  return dataSet[commentId];
}
