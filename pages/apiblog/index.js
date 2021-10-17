import { getApiPosts } from "../../lib/apiPosts";
import Link from "next/link";

export default function ApiBlog({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/apiblog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getApiPosts();

  return {
    props: {
      posts,
    },
  };
}
