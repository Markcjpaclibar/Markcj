import { IconType } from "react-icons";

type SkillCardProps = {
  title: string;
  Icon: IconType;
};

export default function SkillCard({
  title,
  Icon,
}: SkillCardProps) {
  return (
    <div
      className="
        group
        flex
        h-[95px]
        w-[95px]
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-[#2A2929]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#10D312]
        hover:bg-[#303030]
        hover:shadow-[0_0_18px_rgba(16,211,18,0.15)]
      "
    >
      <Icon
        size={36}
        className="
          text-white
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#10D312]
        "
      />

      <p className="mt-2 px-2 text-center text-[11px] font-medium leading-tight text-gray-300">
        {title}
      </p>
    </div>
  );
}