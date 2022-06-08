import { useState, useEffect } from "react";

export function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[0, 5, 10]}
      rotation={[0, 0, 0]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

export function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[9, 0, 2]}
      rotation={[20, 20, 20]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

export function RimLight({ brightness, color, selected }) {
  const [position, setPosition] = useState({
    x: 0,
    y: -1,
    z: 1,
  });

  useEffect(() => {
    const setPoint = (event) => {
      if (selected !== "spotlight") {
        setPosition(position);
        return;
      }

      switch (event.keyCode) {
        case 100:
          setPosition({
            x: position.x + 1,
            y: position.y,
            z: position.z,
            r: position.r,
          });
          return;
        case 97:
          setPosition({
            x: position.x - 1,
            y: position.y,
            z: position.z,
            r: position.r,
          });
          return;
      }
    };

    window.addEventListener("keypress", setPoint);
  }, [selected, position]);

  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[position.x, position.y, position.z]}
      rotation={[0, 0, 0]}
      penumbra={5}
      castShadow
    />
  );
}
