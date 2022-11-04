import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";

import Layout from "@/components/Layout";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  ).then((res) => res.json());

  return {
    props: { data },
  };
};

interface ApodPageProps {
  data: {
    date: Date;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
    copyright?: string;
  };
}

const ApodPage: NextPage<ApodPageProps> = ({ data }) => {
  const { height, width } = useViewportSize();

  return (
    <Layout title="Astronomy Picture of the Day">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold text-center mx-auto mb-2">
          {data.title}
        </h2>
        <Image
          src={data.url}
          alt="Astronomy Picture of the day"
          height={height / 3}
          width={width * 0.75}
          className="mx-auto"
        />
        <hr className="my-2" />
        <h3>{data.explanation}</h3>
        <p>{data.copyright}</p>
      </div>
    </Layout>
  );
};

export default ApodPage;
