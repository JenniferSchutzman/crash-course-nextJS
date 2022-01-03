// this is used for metatags or titles
import { server } from "../config";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Image from "next/image";
// when you plan to import a style page, the css path has to have this type of naming convention
import styles from "../styles/Layout.module.css";
// you cannot import the globals.css file and it is imported already in /pages/_app.js

export default function Home({ articles }) {
  return (
    // same rule as react in needing a parent element
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
