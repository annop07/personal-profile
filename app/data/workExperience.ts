export interface WorkExperience {
    company: string;
    logo: string;
    position: string;
    type: 'Internship' | 'Part-time' | 'Full-time' | 'Freelance' | 'Competition' | 'Teaching Assistant';
    duration: string;
    location?: string;
    description: string[];
    images?: string[];
    techStack?: string[];
    link?: string;
}

export const workExperiences: WorkExperience[] = [
    {
        company: 'Gofive',
        logo: '',
        position: 'Software Engineer Intern',
        type: 'Internship',
        duration: 'Apr 2026 - Jun 2026',
        location: 'Bangkok, Thailand',
        description: [
            'Developed a multi-database architecture that isolates client data across separate databases for enterprise-scale tenants.',
            'Worked inside a large production codebase and its release workflow, collaborating with engineers across teams.',
        ],
    },
    {
        company: 'Khon Kaen University',
        logo: '',
        position: 'Teaching Assistant',
        type: 'Teaching Assistant',
        duration: 'Nov 2025 - Present',
        location: 'Khon Kaen, Thailand',
        description: [
            'Selected to assist two core CS courses — Object-Oriented Programming (Nov 2025 – Mar 2026) and Data Structures (Jun – Oct 2026).',
            'Run lab sessions and review student code, giving written feedback on design and correctness.',
        ],
    },
    {
        company: 'Todoview',
        logo: '/photos/Odoo-photo/0.logo.jpg',
        position: 'Freelance Software Developer',
        type: 'Freelance',
        duration: 'Jun 2025 - Present',
        location: 'Remote, Thailand',
        description: [
            'Built a custom Odoo 19 POS (Python, JavaScript/OWL, PostgreSQL 17) unifying point-of-sale, inventory, purchasing and HR across 8 in-house modules — multi-warehouse receiving, FEFO lot and expiry handling, and PO replenishment from the stock screen with supplier cost history.',
            'Built daily price planning with a full changelog and an export that pushes prices to in-store DIGI SM-100EV label scales; added manager-only discount control, PromptPay QR payments and Thai VAT-summary receipts.',
            'Covered inventory and pricing with Python unit tests and 11 Playwright E2E specs, deployed via Docker Compose across separate dev and production environments.',
            'Also built the same client’s water-distribution ERP — QR-scanned delivery tracking (zxing-browser) with a full audit log and role-based access across 4 roles.',
        ],
        images: [
            '/photos/Odoo-photo/1.main.png',
            '/photos/Odoo-photo/2.apps.png',
            '/photos/Odoo-photo/3.subscription.png',
            '/photos/Odoo-photo/4.invoice.png',
            '/photos/Odoo-photo/5.auto-subscriptionlist.png',
            '/photos/Odoo-photo/6.create-subscription.png',
            '/photos/Odoo-photo/odoo-email.png',
        ],
        techStack: ['Odoo 19', 'Python', 'JavaScript / OWL', 'PostgreSQL 17', 'QWeb', 'Playwright', 'Docker Compose'],
    },
    {
        company: 'TBL (Thai Beverage Logistics)',
        logo: '/photos/thai-bev/ThaiBev-Logo.png',
        position: '10 SAI DEV Innovation Camp TBL',
        type: 'Competition',
        duration: 'May 2024',
        description: [
            'Joined 10 SAI DEV Innovation Camp, working on developing a centralized logistics technology platform, applying development skills and innovative thinking to support digital transformation in logistics operations.',
        ],
        link: 'https://www.facebook.com/share/p/1BGsQXwEpt/',
    },
    {
        company: 'PTT Soft Power Project',
        logo: '/photos/ptt/ptt.jpg',
        position: 'TGIF – Technology Is Fun: Next-Gen Technology Upskilling Program',
        type: 'Competition',
        duration: 'Jul 2023',
        description: [
            'Participated in the TGIF – Technology Is Fun program under the PTT Soft Power Project University Road Show, gaining exposure to emerging digital technologies, industry trends, and the application of technology to support creative economy and soft power development.',
        ],
        link: 'https://www.kku.ac.th/th/149872/',
    },
];
