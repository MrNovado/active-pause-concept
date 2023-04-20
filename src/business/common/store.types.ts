export type AppState = {
  time: {
    running: boolean;
  };

  player: {
    coords: {
      x: number;
      y: number;
      z: number;
    };
  };
};
