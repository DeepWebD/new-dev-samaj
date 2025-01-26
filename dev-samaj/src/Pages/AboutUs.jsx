import { useEffect } from "react";
import { useUiContext } from "../context/UiContext";
const AboutUs = () => {
  const { setShowCard } = useUiContext();
  useEffect(() => {
    setShowCard(false);
  }, []);
  return (
    <div className="flex h-[80vh] justify-center flex-col items-center p-2  mt-[80px] bg-slate-300 font-bold text-4xl text-slate-200">
      AboutUs
    </div>
  );
};

export default AboutUs;
