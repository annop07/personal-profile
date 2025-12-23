import Image from 'next/image';

interface TechIconProps {
    name: string;
    className?: string;
}

export default function TechIcon({ name, className = "w-8 h-8" }: TechIconProps) {
    // Map tech names to skillicons.dev icon names
    const iconMap: Record<string, string> = {
        'Next.js': 'nextjs',
        'TS': 'ts',
        'TypeScript': 'ts',
        'Node': 'nodejs',
        'Prisma': 'prisma',
        'RN': 'react',
        'React Native': 'react',
        'Express': 'express',
        'WS': 'socketio',
        'Socket.IO': 'socketio',
        'Spring': 'spring',
        'PG': 'postgres',
        'PostgreSQL': 'postgres',
        'FM': 'react',
        'TW': 'tailwind',
        'Tailwind': 'tailwind',
        'Laravel': 'laravel',
        'PHP': 'php',
        'MySQL': 'mysql',
        'MongoDB': 'mongodb',
        'Python': 'python',
        'FastAPI': 'fastapi',
        'Docker': 'docker',
        'Expo': 'react',
        'Cloudinary': 'gcp',
    };

    const iconName = iconMap[name] || name.toLowerCase();
    const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
    const theme = isDark ? 'dark' : 'light';

    return (
        <img
            src={`https://skillicons.dev/icons?i=${iconName}&theme=${theme}`}
            alt={name}
            className={className}
        />
    );
}
