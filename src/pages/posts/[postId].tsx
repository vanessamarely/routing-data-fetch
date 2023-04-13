import router, { useRouter } from "next/router";

export default function Post() {
  const {
    query: { postId },
  } = useRouter();

  return (
    <div>
      <h1 className="text-3xl mb-2">Single post page</h1>
      <h3 className="text-xl mb-2">This is post {postId}</h3>
      <button className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5" onClick={() => router.push('/posts')}>
        Volver
      </button>
    </div>
  );
}
