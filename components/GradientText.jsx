import {
  useRef, useEffect, useState, useCallback,
} from 'react';

const useAnimationFrame = (callback, delay, done) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined && delay < time) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }

      if (!done) {
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback, delay, done]);
};

const makeLinearGradient = (base, rgbs) => {
  const rgbStrings = rgbs.map(({ r, g, b }, i) => `rgb(${r}, ${g}, ${b}) ${base + i * 100}%`);
  return `linear-gradient(90deg, ${rgbStrings.join(',')})`;
};

export default function GradientText({
  text, rgbs, delay = 0,
}) {
  const [base, setBase] = useState(-(rgbs.length - 1) * 100);
  const [done, setDone] = useState(false);

  const increaseBase = (deltaTime) => setBase((prevBase) => {
    let delta = deltaTime * 0.15;
    if (prevBase >= 0) {
      delta = 0;
      setDone(true);
    }
    return prevBase + delta;
  });
  const increaseBaseMemoized = useCallback(increaseBase, []);
  useAnimationFrame(increaseBaseMemoized, delay, done);

  return (
    <strong
      className="bg-clip-text"
      style={{
        backgroundImage: makeLinearGradient(base, rgbs),
        WebkitTextFillColor: 'transparent',
        WebkitBoxDecorationBreak: 'clone',
      }}
    >
      {text}
    </strong>
  );
}
