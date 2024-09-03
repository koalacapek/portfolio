import { ExpTimeline } from "../components/ExpTimeline";
import { useSectionInView } from "../hooks/useSectionInView";

const Experiences = () => {
  const { ref } = useSectionInView("Experiences");
  return (
    <section id="experiences" ref={ref}>
      <div className="w-full h-fit">
        <ExpTimeline />
      </div>
    </section>
  );
};

export default Experiences;
