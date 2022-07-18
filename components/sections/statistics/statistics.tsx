import { StatisticsCard } from "components/cards/statistics/statistics-card";
import { useId } from "react";

export const StatisticsSection: React.FC = () => {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} className="py-20 bg-bglight lg:py-[7.5rem]">
      <div className="container">
        <header className="max-w-[33.75rem] mx-auto">
          <h2 id={titleId} className="vn__sm-title-md lg:vn__lg-title-md">
            Advanced Statistics
          </h2>
          <p className="mt-4 vn__sm-text-md lg:vn__lg-text-md">
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </header>
        <div className="mt-12 relative lg:mt-14">
          <div className="vn__statistics-pattern absolute inset-0 grid place-items-center"></div>
          <ul className="flex flex-col items-center gap-12 relative z-10 lg:flex-row">
            <li>
              <StatisticsCard
                icon="/assets/icon-brand-recognition.svg"
                title="Brand Recognition"
                description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              />
            </li>
            <li className="lg:mt-11">
              <StatisticsCard
                icon="/assets/icon-detailed-records.svg"
                title="Detailed Records"
                description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              />
            </li>
            <li className="lg:mt-[5.5rem]">
              <StatisticsCard
                icon="/assets/icon-fully-customizable.svg"
                title="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
