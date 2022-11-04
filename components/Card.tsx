import Tilt from "react-parallax-tilt";
import Link from "next/link";

interface CardProps {
  title: string;
  body: string;
  href: string;
}

const Card = ({ title, href, body }: CardProps) => {
  return (
    <Tilt
      perspective={500}
      className="border-2 rounded-md p-1 hover:from-blue-600 hover:via-teal-500 hover:to-purple-500 bg-gradient-to-r shadow-md"
    >
      <Link href={href}>
        <div className="w-full h-full bg-[#f6f6f6] p-3">
          <p className="font-medium text-lg">{title}</p>
          <p className="text-base">{body}</p>
        </div>
      </Link>
    </Tilt>
  );
};

export default Card;
