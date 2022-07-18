import Link from "next/link";

const FooterNavSubSection: React.FC<{
  title: string;
  links: { href: string; text: string }[];
}> = (props) => {
  return (
    <li className="text-center lg:text-left">
      <span className="block font-bold mb-[1.375rem] text-base">{props.title}</span>
      <ul className="flex flex-col gap-2.5">
        {props.links.map((link) => (
          <li key={link.text}>
            <Link href={link.href}>
              <a className="text-[#BFBFBF] hover:text-primary [font-size:0.9375rem] [line-height:1.375rem]">
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const SocialMediaLink: React.FC<{ href: string; className: string; ariaLabel: string }> = (
  props
) => {
  return (
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-white hover:bg-primary w-6 h-6 ${props.className}`}
    ></a>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bgdarkest text-white py-14 lg:pt-[4.4375rem] lg:pb-[4.5rem]">
      <div className="container grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-[17.5rem,1fr,10.5rem] lg:gap-[6.25rem] lg:items-start">
        <Link href="/">
          <a
            aria-label="homepage"
            className="bg-white w-[7.5rem] h-[2.0625rem] vn__logo-svg"
          ></a>
        </Link>

        <ul className="flex flex-col gap-10 lg:flex-row">
          <FooterNavSubSection
            title="Features"
            links={[
              { href: "/", text: "Link Shortening" },
              { href: "/", text: "Branded Links" },
              { href: "/", text: "Analytics" },
            ]}
          />
          <FooterNavSubSection
            title="Resources"
            links={[
              { href: "/", text: "Blog" },
              { href: "/", text: "Developers" },
              { href: "/", text: "Support" },
            ]}
          />
          <FooterNavSubSection
            title="Company"
            links={[
              { href: "/", text: "About" },
              { href: "/", text: "Our Team" },
              { href: "/", text: "Careers" },
              { href: "/", text: "Contact" },
            ]}
          />
        </ul>
        <ul className="flex gap-6 items-center">
          <li>
            <SocialMediaLink
              href="https://www.facebook.com"
              ariaLabel="facebook"
              className="vn__facebook-icon"
            />
          </li>
          <li>
            <SocialMediaLink
              href="https://www.twitter.com"
              ariaLabel="twitter"
              className="vn__twitter-icon"
            />
          </li>
          <li>
            <SocialMediaLink
              href="https://www.pinterest.com"
              ariaLabel="pinterest"
              className="vn__pinterest-icon"
            />
          </li>
          <li>
            <SocialMediaLink
              href="https://www.instagram.com"
              ariaLabel="instagram"
              className="vn__instagram-icon"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
