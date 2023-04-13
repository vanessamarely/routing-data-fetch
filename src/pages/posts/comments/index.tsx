import { useRouter } from "next/router";
import { getComments } from "../../../lib/comments";

type Comment = {
  id: string;
  description: string;
};

type CommentsProps = { comments: Comment[] };

const Comments = ({ comments }: CommentsProps) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Comments</h1>

      <ul className="mt-6">
        {comments.map(({ description, id }: Comment) => (
          <li
            key={id}
            className="bg-sky-500 cursor-pointer hover:bg-sky-700 p-16 text-slate-300 mt-4 rounded"
            onClick={() => router.push(`${router.route}/${id}`)}
          >
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;

export async function getServerSideProps() {
  const comments = await getComments();
  return {
    props: {
      comments,
    },
  };
}
