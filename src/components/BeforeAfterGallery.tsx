import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSet {
    combinedImage: string;
    title: string;
    description: string;
}

const beforeAfterSets: BeforeAfterSet[] = [
    {
        title: "Kitchen Enhancement",
        combinedImage: "/images/img-kitchen.webp",
        // after: "/images/688268fa49ce1f23fb3.webp",
        description: "Transform dark kitchens into bright, inviting spaces"
    },
    {
        title: "Bedroom Staging",
        combinedImage: "/images/img-bedroom.webp",
        // after: "/images/688268fa49ce1f23fb3a2a7.webp",
        description: "Add warmth and comfort to bedroom spaces"
    },
    {
        title: "Exterior Enhancement",
        combinedImage: "/images/img-exterior.webp",
        // after: "/images/688268fa49ce1f33948264320.webp",
        description: "Boost curb appeal with professional exterior shots"
    },
    {
        title: "Night to Day",
        combinedImage: "/images/img-low-light.webp",
        // after: "/images/687e85c949ce1f23fb39b0c5-17531223109350.jpg",
        description: "Convert dark evening shots to bright daylight"
    },
    {
        title: "Virtual Staging",
        combinedImage: "/images/img-living-room.webp",
        // after: "/images/688268fa49ce1f23fb3a2a77-17533809861430.webp",
        description: "Furnish empty rooms with beautiful staging"
    },
    {
        title: "Remove Object",
        combinedImage: "/images/Before after object removal.webp",
        // after: "/images/After with tags.webp",
        description: "Erase unwanted items for a cleaner space"
    }
];

const BeforeAfterGallery: React.FC = () => {

    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    // Auto-advance gallery
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterSets.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [beforeAfterSets.length]);

    const nextGalleryItem = () => {
        setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterSets.length);
    };

    const prevGalleryItem = () => {
        setCurrentGalleryIndex((prev) => (prev - 1 + beforeAfterSets.length) % beforeAfterSets.length);
    };

    return (
        <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative">
                    {/* Single Before/After Image */}
                    <div className="relative">
                        <img
                            src={beforeAfterSets[currentGalleryIndex].combinedImage}
                            alt="Before and After comparison"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Enhancement Info */}
                    <div className="absolute top-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {beforeAfterSets[currentGalleryIndex].title}
                            </h3>
                            <p className="text-gray-600">
                                {beforeAfterSets[currentGalleryIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button type="button" aria-label="Chevron Left"
                onClick={prevGalleryItem}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button type="button" aria-label="Chevron Right"
                onClick={nextGalleryItem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
                <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-3">
                {beforeAfterSets.map((_, index) => (
                    <button
                        key={index}
                        type="button" aria-label="navigation"
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentGalleryIndex === index
                            ? 'bg-purple-600 scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BeforeAfterGallery;