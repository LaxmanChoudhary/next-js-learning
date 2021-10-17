const postUrl = "https://jsonplaceholder.typicode.com/posts/"

export async function getApiPosts(){
  const res = await fetch(postUrl)
  const posts = await res.json()

  return posts.slice(0, 5)
}

export async function getApiAllPostsId() {
  const res = await fetch(postUrl)
  const posts = await res.json()

  return posts.map(post => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  })
}

export async function getApiPostWithId(id) {
  const res = await fetch(postUrl+id.toString())
  const post = await res.json()
  return post
}