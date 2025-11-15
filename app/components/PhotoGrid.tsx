'use client';

import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  rotation: number;
}

export default function PhotoGrid() {
  const photos: Photo[] = [
    { src: '/photos/photo1.jpg', alt: 'Photo 1', rotation: -3 },
    { src: '/photos/photo2.jpg', alt: 'Photo 2', rotation: 2 },
    { src: '/photos/photo3.jpg', alt: 'Photo 3', rotation: -2 },
    { src: '/photos/photo4.jpg', alt: 'Photo 4', rotation: 3 },
  ];

  return (
    <div className="flex items-center justify-center">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative perspective-1000"
          style={{
            transform: `rotate(${photo.rotation}deg)`,
            transition: 'transform 0.3s ease',
            marginLeft: index > 0 ? '-30px' : '0',
            zIndex: index,
          }}
        >
          <div
            className="relative w-48 h-64 shadow-xl cursor-pointer transition-all duration-500 ease-out overflow-hidden rounded-sm"
            style={{
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateY(180deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg)';
            }}
          >
            <div
              className="absolute inset-0 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </div>

            <div
              className="absolute inset-0 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <p className="text-white text-center px-4 text-sm">
                  {photo.alt} - Behind the scenes
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}