import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl mb-8">All Posts</h1>
      <p className="mb-4">
        This page contains the list of posts in this application
      </p>
      <ul className="list-none list-inside border border-indigo-600 rounded p-1.5 m-1.5">
        <li className="mb-2">
          <Link href="/posts/A">sample post A</Link>
        </li>
        <li className="mb-2">
          <Link href="/posts/B">sample post B</Link>
        </li>
        <li className="mb-2">
          <Link href="/posts/C">sample post C</Link>
        </li>
      </ul>
      <button
        className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5"
        onClick={() => router.push("posts/category?query=value2")}
      >
        Ir a Post de categoria
      </button>

      <button
        className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5"
        onClick={() => router.push("posts/comments")}
      >
        Ir a Comentarios
      </button>
    </div>
  );
}
