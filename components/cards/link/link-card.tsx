import { useState } from "react";

interface LinkCardProps {
  url: string;
  shortened: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ url, shortened }) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  return (
    <article
      className={`px-4 pt-3 pb-4 bg-white grid grid-cols-1 rounded-md text-stress 
      lg:grid-cols-[1fr,15rem,6.5rem] lg:gap-6 lg:items-center lg:pt-4
    `}
    >
      <h3 className="truncate">{url}</h3>
      <span className="mt-3 w-full h-[1px] bg-text opacity-25 lg:hidden"></span>
      <p className="mt-3 text-primary font-bold lg:justify-self-end lg:mt-0">{shortened}</p>
      <button
        disabled={hasCopied}
        className={`flex items-center justify-center mt-3 w-full h-10 bg-primary 
          hover:bg-primary-hover rounded-md  d lg:mt-0
          disabled:bg-secondary
        `}
        onClick={() => {
          navigator.clipboard
            .writeText(shortened)
            .then(() => {
              setHasCopied(true);
              window.setTimeout(() => {
                setHasCopied(false);
              }, 3000);
            })
            .catch((e) => console.log(e.message));
        }}
      >
        <span className="font-bold text-white">{hasCopied ? "Copied!" : "Copy"}</span>
      </button>
    </article>
  );
};
