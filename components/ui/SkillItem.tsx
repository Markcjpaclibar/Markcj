type SkillItemProps = {
  name: string;
  icon: string;
};

export default function SkillItem({
  name,
  icon,
}: SkillItemProps) {
  return (
    <div className="group flex h-[100px] w-[100px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#2A2929] transition-all duration-300 hover:-translate-y-2 hover:border-[#10D312]/50 hover:shadow-[0_0_20px_rgba(16,211,18,0.15)]">
      <img
        src={icon}
        alt={name}
        className="h-10 w-10 object-contain"
      />

      <p className="mt-3 text-xs text-gray-300">
        {name}
      </p>
    </div>
  );
}