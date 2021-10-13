import Head from "next/head";
import Main, { siteTitle } from "../component/layouts/Main";
import utilStyles from "../styles/utils.module.css";
// import Alert from "../component/Alert";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../component/date";

export default function Home({ allPostsData }) {
  return (
    <Main home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Alert type="success">This is a success alert!</Alert>
        <Alert type="error">This is a erorr alert!</Alert> */}
      <h1>All Blogs</h1>
      <div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText} >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
