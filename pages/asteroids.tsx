import { GetServerSideProps, NextPage } from "next";
import type { Asteroid } from "@/lib/types";

import Layout from "@/components/Layout";
import AsteroidCard from "@/components/AsteroidCard";
import { Modal } from "@mantine/core";
import useStore from "@/lib/useStore";
import shallow from "zustand/shallow";

export const getServerSideProps: GetServerSideProps = async () => {
  let date = new Date();
  const pastDate = date.getDate() - 7;
  date.setDate(pastDate);

  const dateString = date.toISOString().split("T")[0];

  const data = (
    await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateString}&api_key=${process.env.NASA_API_KEY}`
    ).then((res) => res.json())
  )["near_earth_objects"];

  const dates = Object.keys(data);

  return {
    props: { dates, data },
  };
};

interface AsteroidsPageProps {
  dates: string[];
  data: {
    [key: string]: Asteroid[];
  };
}

const AsteroidsPage: NextPage<AsteroidsPageProps> = ({ dates, data }) => {
  const [selectedAsteroid, asteroidModalIsOpen, setAsteroidsModal] = useStore(
    (state) => [
      state.selectedAsteroid,
      state.asteroidModalIsOpen,
      state.setAsteroidsModal,
    ],
    shallow
  );

  return (
    <Layout title="Asteroids">
      <p className="text-center mb-2">
        Click on an asteroid name for more information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {dates.map((date) => (
          <div key={date} className="flex flex-col space-y-1">
            <p className="text-lg font-semibold">{date}</p>
            {data[date].map((asteroid: Asteroid) => (
              <AsteroidCard asteroid={asteroid} key={asteroid.id} />
            ))}
          </div>
        ))}
      </div>
      <Modal
        opened={asteroidModalIsOpen}
        onClose={() => setAsteroidsModal(false)}
        title="Detailed Asteroid Information"
      >
        {selectedAsteroid ? (
          <div>
            <p>{selectedAsteroid.name}</p>
            <p
              className={`${
                selectedAsteroid.is_potentially_hazardous_asteroid
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >{`${
              selectedAsteroid.is_potentially_hazardous_asteroid
                ? "Potentially Hazardous Asteroid"
                : "Non-Hazardous Asteroid"
            }`}</p>
          </div>
        ) : (
          <></>
        )}
      </Modal>
    </Layout>
  );
};

export default AsteroidsPage;
