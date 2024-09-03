import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveContext } from "../contexts/ActiveContext";

export const useSectionInView = (sectionName: string, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeOfLastClick } = useActiveContext();
  // console.log(sectionName);
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
