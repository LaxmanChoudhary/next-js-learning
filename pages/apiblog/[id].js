import { getApiAllPostsId, getApiPostWithId } from "../../lib/apiPosts"

export default function EachApiPost({post}) {
  return (
    <div>
      <h1></h1>
      <p>{post.title}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getApiAllPostsId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const post = await getApiPostWithId(params.id)
  console.log(post)
  return {
    props: {
      post
    }
  }
}