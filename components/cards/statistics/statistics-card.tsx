import Image from "next/image";

interface StatisticsCardProps {
  icon: string;
  title: string;
  description: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = (props) => {
  return (
    <article className="pt-11 max-w-md">
      <div className="flex items-center flex-col px-8 pb-10 bg-white rounded-md lg:items-start">
        <div className="mt-[-2.75rem] h-[5.5rem] w-[5.5rem] grid place-items-center rounded-full bg-bgdark">
          <Image src={props.icon} width={40} height={40} alt="" />
        </div>
        <h3 className="vn__sm-title-sm text-center mt-[2.0625rem] lg:text-left">
          {props.title}
        </h3>
        <p className="vn__sm-text-sm text-center mt-3 lg:text-left">{props.description}</p>
      </div>
    </article>
  );
};
