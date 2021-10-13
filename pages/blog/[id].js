import Head from 'next/head'
import Main from '../../component/layouts/Main'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../component/date';
import utilStyles from '../../styles/utils.module.css'

const EachBlog = ({postData}) => {
  return (
    <Main>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingx1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Main>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props:{
      postData
    }
  }
}

export default EachBlog;
