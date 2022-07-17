import { ShortenerForm } from "components/forms/shortener/shortener-form";
import { LinkCard } from "components/cards/link/link-card";

const shortenedLinks = [
  {
    id: 1,
    url: "https://www.frontendmentor.io",
    shortened: "https://rel.ink/k4lKyk	",
  },
  {
    id: 2,
    url: "https://twitter.com/frontendmentor",
    shortened: "https://rel.ink/k4lKyk	",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/companies-big-and-fast-ones",
    shortened: "https://rel.ink/k4lKyk	",
  },
];

export const ShortenerSection: React.FC = () => {
  return (
    <section className={`mt-[5.5rem] `} aria-labelledby="nv__shortener-section-title">
      <h2 className="sr-only" id="nv__shortener-section-title">
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
      {shortenedLinks.length > 0 && (
        <div className="pt-6 bg-bglight">
          <ul className="container flex flex-col gap-6">
            {shortenedLinks.map((link) => (
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
