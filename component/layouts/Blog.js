import Link from 'next/link'
export default function Blog({children}) {
  return(
    <>
      <p>Blog layout</p>
      <p>Go Home from{' '}
        <Link href="/">
          <a>here</a>
        </Link>
      </p>
      {children}
    </>
  )
}