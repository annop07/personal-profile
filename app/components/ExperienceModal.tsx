'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { WorkExperience } from '../data/workExperience';

interface ExperienceModalProps {
    experience: WorkExperience | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when modal opens or experience changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [experience]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !experience) return null;

    const images = experience.images || [];
    const hasImages = images.length > 0;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl 
                            max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center
                             bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200
                             border border-white/20"
                >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-8 border-b border-white/10">
                    <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                                      flex items-center justify-center overflow-hidden flex-shrink-0">
                            {experience.logo ? (
                                <Image
                                    src={experience.logo}
                                    alt={experience.company}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            ) : (
                                <div className="text-white/60 text-3xl font-bold">
                                    {experience.company.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-2">{experience.company}</h2>
                            <p className="text-xl text-gray-300 mb-2">{experience.position}</p>
                            <p className="text-sm text-gray-400">{experience.duration}</p>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                {hasImages && (
                    <div className="relative bg-black/30 p-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Gallery</h3>
                        <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden">
                            <Image
                                src={images[currentImageIndex]}
                                alt={`${experience.company} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                            />

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
                                                 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200
                                                 border border-white/20"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
                                                 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200
                                                 border border-white/20"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 rounded-full
                                          text-white text-sm border border-white/20">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        {images.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                                                  ${idx === currentImageIndex
                                                ? 'border-blue-500 ring-2 ring-blue-500/50'
                                                : 'border-white/20 hover:border-white/40'}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Description */}
                <div className="p-8">
                    <h3 className="text-lg font-semibold text-white mb-4">What I Did</h3>
                    <ul className="space-y-3">
                        {experience.description.map((item, idx) => (
                            <li key={idx} className="text-gray-300 leading-relaxed flex">
                                <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                {experience.techStack && experience.techStack.length > 0 && (
                    <div className="px-8 pb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {experience.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg
                                             text-sm text-gray-300 hover:bg-white/20 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
