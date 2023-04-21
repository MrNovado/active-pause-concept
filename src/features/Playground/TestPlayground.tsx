import { Mesh } from 'three';
import { useRef, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';

import {
  playerReducer, //
  playerActions,
  playerSelectors,
  timeActions,
  timeSelectors,
} from '@/business';

import { Box } from '@/components';

export const TestPlayground: React.FC = () => {
  const dispatch = useDispatch();

  const isTimeRunning = useSelector(timeSelectors.running);
  const coords = useSelector(playerSelectors.coords);

  const startTime = useCallback((): void => {
    dispatch(timeActions.$$start());
  }, [dispatch]);

  const stopTime = useCallback((): void => {
    dispatch(timeActions.$$stop());
  }, [dispatch]);

  const resetPosition = useCallback((): void => {
    dispatch(playerActions.move({ x: 0, y: 0, z: 0 }));
  }, [dispatch]);

  const mesh1 = useRef<Mesh>(null);
  const mesh2 = useRef<Mesh>(null);

  useEffect(
    function updateToCurrentState() {
      if (mesh1.current && mesh2.current) {
        mesh1.current.position.x = coords.x;
        mesh2.current.position.x = coords.y;

        mesh1.current.rotation.x += 1;
        mesh2.current.rotation.x += 1;
      }
    }, //
    [coords],
  );

  useFrame(function interpolation(_, delta) {
    if (mesh1.current && mesh2.current && isTimeRunning) {
      const prevState = {
        x: mesh1.current.position.x,
        y: mesh2.current.position.x,
        z: 0,
      };

      // in ms; delta is in 0.TTTTTTTTT.. form
      const elapsedT = Math.floor(delta * 1000);
      const newState = playerReducer(
        { coords: prevState }, //
        timeActions.tick(elapsedT),
      );

      mesh1.current.position.x = newState.coords.x;
      mesh2.current.position.x = newState.coords.y;
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box
        meshRef={mesh1}
        color="green"
        selected={!isTimeRunning}
        position={[coords.x, -1.2, 0]}
        onClick={startTime}
      />
      <Box
        meshRef={mesh2}
        color="red"
        selected={isTimeRunning}
        position={[coords.y, 1.2, 0]}
        onClick={stopTime}
      />
      <Box
        color="blue"
        selected
        position={[-5, 0, 0]}
        onClick={resetPosition}
      />
    </>
  );
};
