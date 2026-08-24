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
        bg-[#0A1628]/50
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#34D399]
        hover:bg-[#0A1628]/80
        hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]
      "
    >
      <Icon
        size={36}
        className="
          text-gray-200
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#34D399]
        "
      />

      <p className="mt-2 px-2 text-center text-[11px] font-medium leading-tight text-gray-300 transition-colors duration-300 group-hover:text-white">
        {title}
      </p>
    </div>
  );
}