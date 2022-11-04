import type { Asteroid } from "@/lib/types";
import useStore from "@/lib/useStore";

interface AsteroidCardProps {
  asteroid: Asteroid;
}

const AsteroidCard: React.FC<AsteroidCardProps> = ({ asteroid }) => {
  const setAsteroidsModal = useStore((state) => state.setAsteroidsModal);
  const setSelectedAsteroid = useStore((state) => state.setSelectedAsteroid);

  return (
    <div
      className="border-2 rounded-md p-1 cursor-pointer hover:from-blue-600 hover:via-teal-500 hover:to-purple-500 bg-gradient-to-r"
      onClick={() => {
        setSelectedAsteroid(asteroid);
        setAsteroidsModal(true);
      }}
    >
      <div className="w-full h-full bg-[#f6f6f6] p-3">
        <p className="text-bold">{asteroid.name}</p>
      </div>
    </div>
  );
};

export default AsteroidCard;
