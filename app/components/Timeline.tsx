interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  color: 'blue' | 'yellow' | 'green' | 'red';
}

const colorClasses = {
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
};

export default function Timeline() {
  const timeline: TimelineItem[] = [
    {
      company: 'Khon Kaen University',
      role: 'B.S. Computer Science',
      period: '2022 - Now',
      description: 'got my degree to make my parents proud',
      color: 'yellow',
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-white">Timeline</h2>

      <div className="relative pl-4 pt-4">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700" />
        <div className="space-y-6">
        {timeline.map((item, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 transition-transform duration-200 group-hover:-translate-y-1">
              <div className="flex items-start gap-2 pt-4">
                <span className={`w-2 h-2 rounded-full ${colorClasses[item.color]} mt-1.5 flex-shrink-0`}></span>
                <h3 className="text-white font-medium text-sm">{item.company}</h3>
              </div>

              <div className="pl-4 sm:pl-0 sm:p-4">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-gray-400 italic text-xs">{item.role}</p>
                  <span className="text-gray-400 text-xs ml-4 whitespace-nowrap">{item.period}</span>
                </div>
                <ul className="list-disc list-inside mt-1">
                  <li className="text-gray-300 text-xs leading-relaxed">{item.description}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}