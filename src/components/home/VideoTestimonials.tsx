import React, { useState } from 'react';
import { Play, Clock, Star, ArrowRight, Building, Globe, Award } from 'lucide-react';
import StartFreeButton from '../StartFreeButton';
import { Stream } from '@cloudflare/stream-react';

export default function VideoTestimonials() {

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'agency',
      thumbnail: "/images/img-video-1.png",
      logo: "/icons/paragon logo.png",
      logoAlt: "Paragon Properties",
      title: "How We Transformed Our Agency",
      description: "Watch Paragon Properties explain how Coraly revolutionized their listing process and client experience.",
      highlights: [
        "Reduced listing time from 4 hours to 45 minutes",
        "Increased client satisfaction scores",
        "Freed up time for relationship building"
      ],
      duration: "0:58",
      src: "bf1bb8b9f68d06656b455e33e44a8514",
      icon: <Building className="w-6 h-6" />,
      category: "Agency Success"
    },
    {
      id: 'franchise',
      thumbnail: "/images/img-video-2.png",
      logo: "/icons/Chestertons-logo.png",
      logoAlt: "Chestertons Global",
      title: "Why We Chose Coraly Globally",
      description: "Chestertons Global Director shares why they standardized on Coraly across all international locations.",
      highlights: [
        "Implemented across 47+ global locations",
        "Consistent quality standards worldwide",
        "Significant productivity improvements"
      ],
      duration: "1:09",
      src: "9a3d0971f398a28df358b38d138b3168",
      icon: <Globe className="w-6 h-6" />,
      category: "Global Implementation"
    },
    {
      id: 'portal',
      thumbnail: "/images/img-video-3.png",
      logo: "/icons/logo-property-finder.svg",
      logoAlt: "PropertyFinder",
      title: "Industry Validation",
      description: "PropertyFinder, the largest property portal in MENA, explains why they recommend Coraly to their partners.",
      highlights: [
        "Noticeable quality improvement in listings",
        "Better user experience for buyers",
        "Strong partnership endorsement"
      ],
      duration: "1:05",
      src: "540dc777449262b47bc1d61db26d2195",
      icon: <Award className="w-6 h-6" />,
      category: "Industry Recognition"
    }
  ];

  const renderVideoModal = (video: any) => {
    if (activeVideo !== video.id) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="text-right">
            <button
              onClick={() => setActiveVideo(null)}
              className="text-gray-600 hover:bg-gray-600 border border-gray-500 border-2 hover:border-gray-600  hover:text-white rounded-xl p-1 transition-colors"
              aria-label="Close" type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              {video.icon}
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h4>
            <p className="text-gray-600">{video.description}</p>
          </div>
          <div className="relative bg-gray-900 rounded-xl mb-6 aspect-video overflow-hidden">
            <Stream
              controls
              autoplay={true}
               className="w-full h-full object-cover rounded-xl"
              responsive
              src={video.src}
            />
          </div>

          {/* Key Highlights */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h5 className="font-bold text-gray-900 mb-4">Key Highlights:</h5>
            <ul className="space-y-2">
              {video.highlights.map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <button
              type="button" aria-label="Close Video"
              onClick={() => setActiveVideo(null)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Close Video
            </button>
            <button
              type="button" aria-label="Start Free Trial"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Real Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why top agencies, global franchises, and industry leaders choose Coraly
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 flex flex-col h-full"
            >
              {/* Video Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

                {/* Play Button */}
                <button
                  type="button" aria-label="Play"
                  onClick={() => setActiveVideo(video.id)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group-hover:shadow-xl"
                >
                  <Play className="w-6 h-6 text-purple-600 ml-1" />
                </button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {video.category}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>

              {/* Content - Utilise flex-1 pour prendre tout l'espace disponible */}
              <div className="p-8 flex flex-col flex-1">
                {/* Company Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={video.logo}
                    alt={video.logoAlt}
                    className="h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {video.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {video.description}
                </p>
                <div className="mt-auto">
                  {/* Key Highlights */}
                  <div className="mb-6 flex-1 ">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {video.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 whitespace-nowrap">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-6'>
                    <button
                      type="button" aria-label="Play Video"
                      onClick={() => setActiveVideo(video.id)}
                      className="w-full  flex items-center justify-center gap-3 text-white px-6 py-4 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-2xl"
                    >
                      <Play className="w-5 h-5" />
                      <span>Play Video</span>
                      <ArrowRight className=" rtl:rotate-180  w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Join the Industry Leaders Already Winning with Coraly
            </h3>
            <p className="text-xl mb-8 opacity-90">
              See why top agencies, franchises, and portals trust Coraly for their success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartFreeButton className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
                text="Schedule Demo" />
            </div>
          </div>
        </div>

        {/* Video Modals */}
        {videos.map(video => renderVideoModal(video))}
      </div>
    </section>
  );
};
