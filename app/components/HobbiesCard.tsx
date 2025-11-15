interface HobbiesCardProps {
  title: string;
  description: string;
  stat: string;
  statColor?: string;
}

export default function HobbiesCard({
  title,
  description,
  stat,
  statColor = 'text-red-500'
}: HobbiesCardProps) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all duration-200 hover:bg-zinc-900/70 hover:-translate-y-1 h-full flex flex-col">
        <h3 className="text-white font-medium text-sm mb-2">{title}</h3>
        <p className="text-gray-400 text-xs mb-3 flex-grow leading-relaxed">{description}</p>
        <p className={`${statColor} font-medium text-xs`}>{stat}</p>
      </div>
    </div>
  );
}