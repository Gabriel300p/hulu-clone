import Head from "next/head";
import Header from "../components/Header"
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/hulu_icon.svg" />
      </Head>

      <Header/>
      <Nav/>
      <Results/>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;
//   const requests = await fetch(
//     `http://api.themoviedb.org/3${requests[genre]?.url || 
//     requests.fetchTrending.url}`);
// }
