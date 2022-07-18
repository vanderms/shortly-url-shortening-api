import { ShortenerForm } from "components/forms/shortener/shortener-form";
import { LinkCard } from "components/cards/link/link-card";
import { useShortener } from "services/hooks/use-shortener";
import { useId } from "react";

export const ShortenerSection: React.FC = () => {
  const { links } = useShortener();
  const titleId = useId();

  return (
    <section className={`mt-[5.5rem] `} aria-labelledby={titleId}>
      <h2 className="sr-only" id={titleId}>
        Link Shortener
      </h2>
      <div
        className="container bg-bgdark p-6 relative 
        vn__shortener-pattern rounded-xl overflow-hidden md:px-16 md:py-[3.25rem]"
      >
        <div className="relative z-10">
          <ShortenerForm />
        </div>
      </div>
      <div className="mt-[-5rem] h-20 bg-bglight w-full lg:mt-[-5.25rem] lg:h-[5.25rem]"></div>
      {links.length > 0 && (
        <div className="pt-6 bg-bglight">
          <ul className="container flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard url={link.url} shortened={link.shortened} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
