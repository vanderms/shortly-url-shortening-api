import Link from "next/link";
import { ActionLink } from "components/buttons/action-link/action-link";

export const HeroSection: React.FC = () => {
  return (
    <section className={`container mt-4 lg:mt-[4.875rem]`}>
      <div className="max-w-[35rem] mx-auto grid grid-cols-1 gap-[3.75rem] lg:grid-cols-[35.25rem,1fr] lg:gap-[6.25rem] lg:max-w-full">
        <div className="vn__hero-image lg:order-1"></div>
        <header className="lg:mt-[3.8125rem]">
          <h1 className="vn__sm-title-xl lg:vn__lg-title-xl">
            More than just shorter links
          </h1>
          <p className="mt-4 vn__sm-text-xl lg:vn__lg-text-xl lg:mt-1">
            Build your brand&apos;s recognition and get detailed insights on how your links
            are performing.
          </p>
          <div className="mt-8 lg:mt-10">
            <ActionLink href="/">Get Started</ActionLink>
          </div>
        </header>
      </div>
    </section>
  );
};
