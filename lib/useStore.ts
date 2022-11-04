import create from "zustand";
import { Asteroid } from "@/lib/types";

interface State {
  selectedAsteroid: Asteroid | null;
  setSelectedAsteroid: (asteroid: Asteroid) => void;

  asteroidModalIsOpen: boolean;
  setAsteroidsModal: (isOpen: boolean) => void;
}

const useStore = create<State>((set) => ({
  selectedAsteroid: null,
  setSelectedAsteroid: (asteroid) =>
    set(() => ({ selectedAsteroid: asteroid })),

  asteroidModalIsOpen: false,
  setAsteroidsModal: (isOpen) => set(() => ({ asteroidModalIsOpen: isOpen })),
}));

export default useStore;
