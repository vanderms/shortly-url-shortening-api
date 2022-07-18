import { useId } from "react";
import { ActionLink } from "components/buttons/action-link/action-link";

export const CallToActionSection: React.FC = () => {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="bg-bgdark py-[5.625rem] vn__boost-pattern relative lg:py-[3.5625rem]"
    >
      <div className="container flex flex-col gap-4 items-center relative z-10 lg:gap-8">
        <h2 className="vn__sm-title-md lg:vn__lg-title-md !text-white" id={titleId}>
          Boost your links today
        </h2>
        <div>
          <ActionLink href="/">Get Started</ActionLink>
        </div>
      </div>
    </section>
  );
};
