import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, Zap, Eye, Sun, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import StartFreeButton from '../components/StartFreeButton';

const PhotoEnhancement = () => {

  const [sliderValue, setSliderValue] = useState(50);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const beforeAfterSets = [
    {
      title: "Kitchen Enhancement",
      before: "/images/spacious-dining-room-utc.webp",
      after: "/images/688268fa49ce1f23fb3.webp",
      description: "Transform dark kitchens into bright, inviting spaces"
    },
    {
      title: "Bedroom Staging",
      before: "/images/empty-living-room-interior-design.webp",
      after: "/images/688268fa49ce1f23fb3a2a7.webp",
      description: "Add warmth and comfort to bedroom spaces"
    },
    {
      title: "Exterior Enhancement",
      before: "/images/such-a-beautiful-day-2.webp",
      after: "/images/688268fa49ce1f33948264320.webp",
      description: "Boost curb appeal with professional exterior shots"
    },
    {
      title: "Night to Day",
      before: "/images/IMG_2516 - low light.webp",
      after: "/images/687e85c949ce1f23fb39b0c5-17531223109350.jpg",
      description: "Convert dark evening shots to bright daylight"
    },
    {
      title: "Virtual Staging",
      before: "/images/an-empty-living-room.webp",
      after: "/images/688268fa49ce1f23fb3a2a77-17533809861430.webp",
      description: "Furnish empty rooms with beautiful staging"
    },
    {
      title: "Remove Object",
      before: "/images/Before without tags.webp",
      after: "/images/After with tags.webp",
      description: "Erase unwanted items for a cleaner space"
    }
  ];

  const agencyLogos = [
    { name: 'Chestertons', src: '/icons/Chestertons-logo.png' },
    { name: 'RE/MAX', src: '/icons/remax.png' },
    { name: 'Paragon', src: '/icons/paragon logo.png' },
    { name: 'PropertyFinder', src: '/icons/logo-property-finder.svg' },
    { name: 'Thinkprop Dubai', src: '/icons/Think-Prop-Logo.png' },
    { name: 'Propspace Dubai', src: '/icons/669e89f3c21cdf40e3e03b25_Logo PropSpace.png' },
  ];

  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterSets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [beforeAfterSets.length]);


  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn dull property shots into scroll‑stopping visuals.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                AI corrects lighting, sharpens details, and virtually stages empty rooms – instantly.
              </p>
              <button type="button" data-popup="signup" aria-label="Enhance a Photo" className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Enhance a Photo
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Before/After Slider */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900">
                  {/* Before Image */}
                  <img
                    src="/images/After with tags.webp"
                    alt="Before enhancement"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                </div>

                <p className="text-center text-white/80 mt-4 text-sm">
                  Drag to reveal the transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Enhancement Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform any property photo with AI-powered enhancements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Low-light Fix */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low‑light Fix</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automatically brighten dark photos and enhance natural lighting to showcase properties at their best.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Intelligent brightness adjustment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Shadow detail recovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Natural color correction</span>
                </div>
              </div>
            </div>

            {/* Window View Retouch */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Window View Retouch</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Enhance window views and exterior visibility to highlight property's location and natural light.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sky enhancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">View clarity improvement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Glare reduction</span>
                </div>
              </div>
            </div>

            {/* Virtual Staging */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Staging</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Add beautiful furniture and decor to empty rooms, helping buyers visualize the space's potential.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">40+ furniture styles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Room-appropriate layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use-Case Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Trusted by Leading Companies
              </h3>
              <div className="relative overflow-hidden mb-8 ">
                <div className="flex items-center animate-scroll">
                  {agencyLogos.map((logo, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-8 flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-12 w-32 object-contain cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                  {agencyLogos.map((logo, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-8 flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-12 w-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">+47%</div>
              <div className="text-lg text-gray-700 font-semibold">click‑through on portal feeds</div>
              <p className="text-gray-600 mt-2">Enhanced photos drive significantly more engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Carousel */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Enhancement Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformations across different property types
            </p>
          </div>

          <BeforeAfterGallery />
          {/* 
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={beforeAfterSets[currentGalleryIndex].before}
                      alt="Before enhancement"
                      className="w-[100%] h-[500px] object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                      Before
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={beforeAfterSets[currentGalleryIndex].after}
                      alt="After enhancement"
                      className="w-[100%] h-[500px] object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                      After
                    </div>
                  </div>
                </div>


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

            <button
              onClick={prevGalleryItem}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextGalleryItem}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex justify-center mt-8 gap-3">
              {beforeAfterSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentGalleryIndex === index
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Conversion Metrics Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              Enhanced Photos Drive Real Results
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">2.8×</div>
                <div className="text-lg font-semibold opacity-90">time‑on‑listing</div>
                <div className="text-sm opacity-75 mt-1">Buyers spend more time viewing</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">↓26%</div>
                <div className="text-lg font-semibold opacity-90">bounce rate</div>
                <div className="text-sm opacity-75 mt-1">Fewer visitors leave immediately</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">97%</div>
                <div className="text-lg font-semibold opacity-90">photo approval rate</div>
                <div className="text-sm opacity-75 mt-1">Agents love the results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Property Photos?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of agents already using Coraly to create stunning visuals that sell properties faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              text="Enhance a Photo" />
            <StartFreeButton className="text-purple-600 hover:text-purple-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              text="See More Examples" />
          </div>
        </div>
      </section>

      {/* Mouse move handler for slider */}
      {isDragging && (
        <div
          className="fixed inset-0 z-50 cursor-ew-resize"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderValue(percentage);
          }}
          onMouseUp={() => setIsDragging(false)}
        />
      )}
    </>
  );
};

export default PhotoEnhancement;