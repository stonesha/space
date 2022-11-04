import { NextPage } from "next";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

const IndexPage: NextPage = () => {
  return (
    <Layout title="space">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Astronomy Picture of the Day"
          href="/apod"
          body="Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. [1]"
        />
        <Card
          title="Asteroids - NeoWs"
          href="/asteroids"
          body="Near-Earth Objects (NEOs) are comets/asteroids that have been nudged by the gravitational attraction of nearby planets into orbits that allow them to enter the Earth's neighborhood. [2]"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
