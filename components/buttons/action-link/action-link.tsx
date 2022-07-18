import { ReactNode } from "react";
import Link from "next/link";

export const ActionLink: React.FC<{ href: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <Link href={props.href}>
      <a
        className={`grid place-items-center text-white text-xl w-max h-14 px-10
             bg-primary rounded-full hover:bg-primary-hover mx-auto lg:mx-0`}
      >
        {props.children}
      </a>
    </Link>
  );
};
