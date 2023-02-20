import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "components/card";
import { WhatContent, WhyContent, HowContent } from "constants/landingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphy</title>
        <meta name="description" content="Graph your data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="cards">
        <Card
          key={1}
          cardHeader="What?"
          cardInfo={WhatContent.slice(0, 60) + "..."}
          showModal={true}
          modalText={WhatContent}
        />

        <Card
          key={2}
          cardHeader="Why?"
          cardInfo={WhyContent.slice(0, 60) + "..."}
          showModal={false}
          modalText={WhyContent}
        />

        <Card
          key={3}
          cardHeader="How?"
          cardInfo={HowContent.slice(0, 60) + "..."}
          showModal={false}
          modalText={HowContent}
        />
      </div>
    </>
  );
}
