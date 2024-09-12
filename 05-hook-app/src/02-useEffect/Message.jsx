import { useEffect, useState } from "react";

export const Message = () => {
  const onMouseMove = ({ x, y }) => {
    // const coords = { x, y };
    setCoords({ x, y });
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h1>Usuario ya existe</h1>
      {JSON.stringify(coords)}
    </>
  );
};
