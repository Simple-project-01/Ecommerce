import React from "react";
import BgPage from "../../assets/images/common-section.jpg";

interface Props {
  title: string;
}

const CommonSection: React.FC<Props> = ({ title }) => {
  return (
    <section className="relative">
      <img className="w-full lg:h-[35vh] h-[30vh] object-cover" src={BgPage} alt="Background" />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-white text-center">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;