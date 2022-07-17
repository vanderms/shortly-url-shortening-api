import { ShortenerForm } from "components/forms/shortener/shortener-form";

export const ShortenerSection: React.FC = () => {
  return (
    <section
      className={`container mt-[5.5rem] bg-bgdark p-6 relative 
        vn__shortener-pattern rounded-xl overflow-hidden md:px-16 md:py-[3.25rem]`}
      aria-labelledby="nv__shortener-section-title"
    >
      <h2 className="sr-only" id="nv__shortener-section-title">
        Link Shortener
      </h2>
      <div className="relative z-10">
        <ShortenerForm />
      </div>
    </section>
  );
};
