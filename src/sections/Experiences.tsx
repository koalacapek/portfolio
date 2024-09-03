import { ExpTimeline } from "../components/ExpTimeline";
import { useSectionInView } from "../hooks/useSectionInView";

const Experiences = () => {
  const { ref } = useSectionInView("Experiences");

  return (
    <section id="experiences" ref={ref} className="h-fit">
      <div className="w-full">
        <ExpTimeline />
      </div>
    </section>
  );
};

export default Experiences;
