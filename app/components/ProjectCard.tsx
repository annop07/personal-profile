interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: { label: string; color: string }[];
}

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all duration-200 hover:bg-zinc-900/70 hover:-translate-y-1">
        <h3 className="text-white font-medium text-sm mb-2">{title}</h3>
        <p className="text-gray-400 text-xs mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-medium rounded-md ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}