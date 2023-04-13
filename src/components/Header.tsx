import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex content-center justify-between flex-wrap bg-teal-500 p-6">
      <ul className="w-full flex justify-center content-center">
        <li className="text-teal-200 hover:text-white mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className=" text-teal-200 hover:text-white mr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="text-teal-200 hover:text-white mr-4">
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}