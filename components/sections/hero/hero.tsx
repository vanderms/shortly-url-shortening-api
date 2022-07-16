import Link from "next/link";

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
          <Link href="/">
            <a
              className={`grid place-items-center text-white text-xl w-max h-14 px-10
             bg-primary rounded-full hover:bg-primary-hover mt-8 mx-auto lg:mx-0 lg:mt-10`}
            >
              Get Started
            </a>
          </Link>
        </header>
      </div>
    </section>
  );
};
