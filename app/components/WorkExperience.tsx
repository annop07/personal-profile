'use client';

import Image from 'next/image';
import { useState } from 'react';
import { WorkExperience as WorkExperienceType } from '../data/workExperience';
import ExperienceModal from './ExperienceModal';

interface WorkExperienceProps {
    experiences: WorkExperienceType[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default
    const [selectedExperience, setSelectedExperience] = useState<WorkExperienceType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case 'Internship':
                return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'Part-time':
                return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'Full-time':
                return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
            case 'Freelance':
                return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
            case 'Competition':
                return 'bg-pink-500/20 text-pink-400 border border-pink-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const openModal = (experience: WorkExperienceType) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedExperience(null), 300);
    };

    return (
        <>
            <div className="space-y-4">
                {experiences.map((experience, index) => {
                    const isExpanded = expandedIndex === index;
                    const hasDetails = (experience.images && experience.images.length > 0) ||
                        (experience.techStack && experience.techStack.length > 0);

                    return (
                        <div
                            key={index}
                            className="group relative bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl 
                                   hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 overflow-hidden"
                        >
                            {/* Clickable Header */}
                            <button
                                onClick={() => toggleExpand(index)}
                                className="w-full p-5 flex items-start gap-4 text-left cursor-pointer"
                            >
                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 
                                                flex items-center justify-center overflow-hidden">
                                        {experience.logo ? (
                                            <Image
                                                src={experience.logo}
                                                alt={experience.company}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-white/60 text-lg font-bold">
                                                {experience.company.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Header Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                                    {experience.company}
                                                </h3>
                                                <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${getTypeBadgeColor(experience.type)}`}>
                                                    {experience.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                {experience.position}
                                            </p>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                            {experience.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Chevron Icon */}
                                {experience.description.length > 0 && (
                                    <div className="flex-shrink-0 ml-2">
                                        <svg
                                            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Expandable Description */}
                            {experience.description.length > 0 && (
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-5 pb-5 pl-[76px]">
                                        <ul className="space-y-2 border-t border-gray-200 dark:border-white/10 pt-4">
                                            {experience.description.map((item, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex">
                                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-4">
                                            {/* View Details Button */}
                                            {hasDetails && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openModal(experience);
                                                    }}
                                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-500/20 hover:bg-gray-300 dark:hover:bg-gray-500/30 
                                                         border border-gray-300 dark:border-gray-500/30 hover:border-gray-400 dark:hover:border-gray-500/50
                                                         rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium
                                                         transition-all duration-200 flex items-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    View Details
                                                </button>
                                            )}

                                            {/* External Link Button */}
                                            {experience.link && (
                                                <a
                                                    href={experience.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-500/20 hover:bg-gray-300 dark:hover:bg-gray-500/30 
                                                         border border-gray-300 dark:border-gray-500/30 hover:border-gray-400 dark:hover:border-gray-500/50
                                                         rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium
                                                         transition-all duration-200 flex items-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Link
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            <ExperienceModal
                experience={selectedExperience}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}
