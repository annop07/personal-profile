export interface WorkExperience {
    company: string;
    logo: string;
    position: string;
    type: 'Internship' | 'Part-time' | 'Full-time' | 'Freelance' | 'Competition';
    duration: string;
    description: string[];
    images?: string[];
    techStack?: string[];
    link?: string;
}

export const workExperiences: WorkExperience[] = [
    {
        company: 'Todoview',
        logo: '/photos/Odoo-photo/0.logo.jpg',
        position: 'Odoo ERP Developer',
        type: 'Freelance',
        duration: 'Jun 2025 - Aug 2025',
        description: [
            'Developed custom Odoo modules for Subscription Management System, enabling automated recurring billing and subscription lifecycle management for enterprise clients.',
            'Created custom invoice automation workflows that streamlined billing processes, reducing manual invoice generation time by implementing automated triggers and email notifications.',
            'Designed and implemented subscription tracking dashboard with real-time analytics for monitoring active subscriptions, revenue metrics, and customer retention rates.',
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
        techStack: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript', 'QWeb'],
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
    }
];
