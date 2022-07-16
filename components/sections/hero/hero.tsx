import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className={`container mt-16 grid grid-cols-1 gap-[3.75rem]`}>
      <div className="max-w-[35rem] mx-auto">
        <div className="vn__hero-image"></div>
        <header>
          <h1 className="vn__sm-title-xl lg:vn__lg-title-xl">
            More than just shorter links
          </h1>
          <p className="mt-4 vn__sm-text-xl lg:vn__lg-text-xl">
            Build your brand&apos;s recognition and get detailed insights on how your links
            are performing.
          </p>
          <Link href="/">
            <a
              className={`grid place-items-center text-white text-xl w-max h-14 px-10
             bg-primary rounded-full hover:bg-primary-hover mt-8 mx-auto`}
            >
              Get Started
            </a>
          </Link>
        </header>
      </div>
    </section>
  );
};
