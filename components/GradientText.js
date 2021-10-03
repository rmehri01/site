import {
  useRef, useEffect, useState, useCallback
} from 'react';

const useAnimationFrame = (callback) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }

      if (time < 10000) {
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback]);
};

const makeLinearGradient = (base, rgbs) => {
  const rgbStrings = rgbs.map(({ r, g, b }, i) => `rgb(${r}, ${g}, ${b}) ${base + i * 100}%`)
  return `linear-gradient(90deg, ${rgbStrings.join(',')})`
}

export default function GradientText({ text, rgbs }) {
  const [base, setBase] = useState(-(rgbs.length - 1) * 100);

  const increaseBase = (deltaTime) => setBase((prevBase) => {
    const delta = prevBase < 0 ? deltaTime * 0.15 : 0;
    return prevBase + delta;
  });
  const increaseBaseMemoized = useCallback(increaseBase, []);
  useAnimationFrame(increaseBaseMemoized);

  return (
    <strong
      className="bg-clip-text"
      style={{
        backgroundImage: makeLinearGradient(base, rgbs),
        WebkitTextFillColor: 'transparent'
      }}
    >
      {text}
    </strong>
  );
}
