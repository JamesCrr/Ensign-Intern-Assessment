import { useState, useEffect, useRef } from "react";

export default function NotificationPill(props) {
  const [started, setStarted] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);
  const animationInterval = useRef(null);

  useEffect(() => {
    if (started == true) {
      return;
    }

    let newInterval = setInterval(() => {
      setAnimationIndex((prevState) => prevState + 1);
    }, props.transitionTime);
    animationInterval.current = newInterval;
    setStarted(true);

    // Cleanup once unmount
    return () => {
      clearInterval(animationInterval.current);
    };
  }, []);
  useEffect(() => {
    if (animationInterval.current == null) return;

    if (animationIndex >= props.animationClasses.length) {
      clearInterval(animationInterval.current);
      props.onAnimationFinished();
    }
  }, [animationIndex]);

  return (
    <div
      className={`fixed inline-block z-10 top-0 left-1/2 ${props.animationClasses[animationIndex]}`}
      style={{ animationFillMode: "forwards" }}
    >
      <div className="w-28 md:w-40 text-center mr-auto ml-auto p-2 rounded-full bg-green-300">
        <p className="text-sm md:text-base">{props.message}</p>
      </div>
    </div>
  );
}
