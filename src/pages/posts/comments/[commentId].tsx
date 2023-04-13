import { Data, getCommentById } from "@/lib/comments";
import { useRouter } from "next/router";

export default function CommentId({
  comment: { description, date },
}: {
  comment: Data;
}) {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl mb-2">Single Comment page</h1>
      <p className="text-xl mb-2">{description}</p>
      <button
        className="rounded text-sm bg-indigo-600 text-white p-1.5 mt-2"
        onClick={() => router.push("/posts/comments")}
      >
        Volver a Todos los comentarios
      </button>
    </div>
  );
}

export async function getServerSideProps({
  query: { commentId },
}: {
  query: { commentId: string };
}) {
  const comment = await getCommentById(commentId);
  console.log(commentId)
  return {
    props: {
      comment,
    },
  };
}
