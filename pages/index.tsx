import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "components/navbar/navbar";

const Home: NextPage = () => {
  const name = "Shortly - more than just shorter links";
  const title = name;
  const description = "Challenge Url Shortening API, by Frontend Mentor";
  const url = "";

  return (
    <>
      <Head>
        <meta property="og:site_name" content={name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={url + "assets/preview.jpg"} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content={url}></meta>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>
        
      </main>
    </>
  );
};

export default Home;
