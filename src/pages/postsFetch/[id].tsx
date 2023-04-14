import { getPostDetails, getPostIdList } from "../../lib/post";
import { Data, Params } from "./type";

export default function Post({ postData }: { postData: Data }) {
  console.log(postData)
  return (
    <div className="bg-gray-800 p-16 text-gray-100">
      <div className="text-center font-bold text-3xl">{postData.title}</div>
      <div className="text-justify my-8 text-gray-200">
        {postData.description}
      </div>
      <div className="text-gray-400">Published On: {postData.date}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params ) {
  console.log(params)
  const postData = await getPostDetails(params.id);
  console.log(postData)
  return {
    props: {
      postData,
    },
  };
}
