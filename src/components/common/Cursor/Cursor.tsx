import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
interface Pointer {
  x: number;
  y: number;
  tx: number;
  ty: number;
  dist: number;
  scale: number;
  speed: number;
  circRadius: number;
}

const CursorAnimation: React.FC = () => {
  const polylineRef = useRef<SVGPolylineElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const [pointer, setPointer] = useState<Pointer>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    tx: window.innerWidth / 2,
    ty: window.innerHeight / 2,
    dist: 0,
    scale: 1,
    speed: 2,
    circRadius: 12,
  });
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const debounceCounterRef = useRef<number>(0);
  const debounceRemoveLineRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const total = 12;
  const gap = 30;

  const updatePointerCoords = (newPointer: Pointer): Pointer => {
    const dist = Math.abs(
      newPointer.x - newPointer.tx + (newPointer.y - newPointer.ty)
    );
    const scale = Math.max(
      newPointer.scale + ((100 - dist * 8) * 0.01 - newPointer.scale) * 0.1,
      0.25
    );

    return {
      ...newPointer,
      dist,
      scale,
      tx: newPointer.tx + (newPointer.x - newPointer.tx) / newPointer.speed,
      ty: newPointer.ty + (newPointer.y - newPointer.ty) / newPointer.speed,
    };
  };

  const drawLine = () => {
    setPointer((prevPointer) => {
      const updatedPointer = updatePointerCoords(prevPointer);

      pointsRef.current.push({
        x: updatedPointer.tx,
        y: updatedPointer.ty,
      });

      while (pointsRef.current.length > total) {
        pointsRef.current.shift();
        if (pointsRef.current.length > gap) {
          for (let i = 0; i < 5; i++) {
            pointsRef.current.shift();
          }
        }
      }

      if (polylineRef.current) {
        const pointsArr = pointsRef.current.map(
          (point) => `${point.x},${point.y}`
        );
        polylineRef.current.setAttribute("points", pointsArr.join(" "));
      }

      if (circleRef.current) {
        circleRef.current.setAttribute("cx", String(updatedPointer.x));
        circleRef.current.setAttribute("cy", String(updatedPointer.y));
        circleRef.current.setAttribute(
          "r",
          String(updatedPointer.scale * updatedPointer.circRadius)
        );
      }

      if (debounceCounterRef.current > 0) {
        debounceCounterRef.current--;
        requestAnimationFrame(drawLine);
      }

      return updatedPointer;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPointer((prevPointer) => ({
        ...prevPointer,
        x: e.clientX,
        y: e.clientY,
      }));
      debounceCounterRef.current = 0;
      drawLine();

      if (debounceRemoveLineRef.current) {
        clearTimeout(debounceRemoveLineRef.current);
      }
      debounceRemoveLineRef.current = setTimeout(() => {
        debounceCounterRef.current = 12;
        drawLine();
      }, 80);
    };

    const handleMouseDown = () => {
      setPointer((prevPointer) => ({ ...prevPointer, circRadius: 6 }));
      drawLine();
    };

    const handleMouseUp = () => {
      setPointer((prevPointer) => ({ ...prevPointer, circRadius: 13 }));
      drawLine();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <S.CursorStyleContainer
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <polyline
        ref={polylineRef}
        className="drawing_line_polyline"
        style={{
          fill: "none",
          stroke: "#07bceb97",
          strokeWidth: 2,
        }}
      />
      <circle
        ref={circleRef}
        className="drawing_line_circle"
        style={{
          fill: "#07bceb97",
        }}
      />
    </S.CursorStyleContainer>
  );
};

export default CursorAnimation;
