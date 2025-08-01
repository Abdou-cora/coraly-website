import { useState, useEffect } from 'react';
import { ArrowRight, Check, Play, Instagram, Video, Home, Cuboid as Cube, BarChart3 } from 'lucide-react';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import StartFreeButton from '../components/StartFreeButton';

const AIMarketingAssets = () => {

  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const assets = [
    {
      type: "15‑sec Promo Video",
      visual: "Phone mockup auto‑subtitle",
      benefit: "Boosts social engagement 2×",
      icon: <Video className="w-8 h-8" />,
      mockup: "/images/15-sec Promo Video.webp",
      description: "Professional property videos with automatic subtitles and branding"
    },
    {
      type: "Instagram Carousels",
      visual: "1080×1080 post set",
      benefit: "Faster brand consistency",
      icon: <Instagram className="w-8 h-8" />,
      mockup: "/images/Instagram Carrousel.webp",
      description: "Ready-to-post social media content optimized for engagement"
    },
    {
      type: "Virtual Staging",
      visual: "Empty → Furnished slider",
      benefit: "Saves £800 per room",
      icon: <Home className="w-8 h-8" />,
      mockup: "/images/virtual staging.webp",
      description: "Transform empty spaces into beautifully furnished rooms"
    },
    {
      type: "2D→3D Plans",
      visual: "Floor plan morph animation",
      benefit: "Increased buyer confidence",
      icon: <Cube className="w-8 h-8" />,
      mockup: "/images/d to 3D FloorPlan.png",
      description: "Interactive 3D floor plans from simple 2D drawings"
    }
  ];

  // Auto-rotate assets
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAssetIndex((prev) => (prev + 1) % assets.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [assets.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                On‑brand marketing collateral, generated in minutes.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Coraly creates videos, social tiles, virtual staging and 3D floor plans straight from your listing data.
              </p>
              <button type="button" data-popup="signup" aria-label="See Asset Generator" className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                See Asset Generator
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Rotating Carousel Mockup */}
            <div className="relative">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="relative aspect-square rounded-2xl overflow-hidden ">
                  {/* Current Asset Display */}
                  <div className="absolute inset-0 transition-all duration-500">
                    <img
                      src={assets[currentAssetIndex].mockup}
                      alt={assets[currentAssetIndex].type}
                      className="w-full h-full object-contain bg-transparent"
                    />

                    {/* Benefit Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full text-center font-semibold">
                        {assets[currentAssetIndex].benefit}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Navigation Dots */}
                <div className="flex justify-center mt-6 gap-3">
                  {assets.map((_, index) => (
                    <button
                      type="button" aria-label="Navigation"
                      key={index}
                      onClick={() => setCurrentAssetIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentAssetIndex === index
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use-Case Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Marketing Asset Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to market properties professionally across all channels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {assets.map((asset, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300">
                    {asset.icon}
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Asset</h4>
                        <p className="text-purple-600 font-semibold text-lg">{asset.type}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Visual Idea</h4>
                        <p className="text-gray-700">{asset.visual}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Benefit</h4>
                        <p className="text-green-600 font-semibold">{asset.benefit}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{asset.description}</p>

                    <button type="button" data-popup="signup" aria-label="See Example" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                      <Play className="w-4 h-4" />
                      See Example
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Creation Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional Property Videos in Minutes
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your property photos into engaging video content with automatic subtitles, music, and branding. Perfect for social media and portal listings.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Automatic subtitle generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Brand-consistent styling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Multiple format exports</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Royalty-free music library</span>
                </div>
              </div>
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Create Video Now" />
            </div>

            <div className="relative">
              <div className="rounded-3xl shadow-2xl">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/15-sec Promo Video.webp"
                    alt="Property video mockup"
                    className="w-full h-full object-cover"
                  />

                  {/* Video UI Overlay */}
                  <div className="absolute inset-0 bg-black/20">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 text-white p-3 rounded-lg text-sm">
                        <p>🏡 Stunning 3BR apartment with city views</p>
                        <p>📍 Prime downtown location</p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      LIVE
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Floor Plans Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 sm:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <ImageComparisonSlider />
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">2D Plan</span> → <span className="font-semibold text-purple-600">Interactive 3D</span>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Generated in 30s
                  </div>
                </div>
              </div>
            </div>


            <div className="order-1 sm:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transform 2D Plans into Interactive 3D
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Upload any 2D floor plan and watch it transform into an interactive 3D visualization that helps buyers understand the space layout and flow.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Automatic room detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Accurate detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Embeddable on websites</span>
                </div>
              </div>
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Create 3D Plan" />

            </div>
          </div>
        </div>
      </section>

      {/* Social Media Templates */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Social Media Ready Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instantly create on-brand social content optimized for each platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram Post */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-200">
              <div className=" overflow-hidden mb-6 h-[500px] ">
                <img
                  src="/images/post-instagram-2.png"
                  alt="Instagram post template"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Instagram Posts</h3>
              <p className="text-gray-600 mb-4 text-center">Square format with property highlights and branding</p>
              <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold">
                <Instagram className="w-4 h-4" />
                <span>1080×1080 optimized</span>
              </div>
            </div>

            {/* Story Template */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-200">
              <div className="rounded-2xl shadow-xl overflow-hidden mb-6 h-[500px] ">
                {/* Phone Frame for Story */}
                <div className="bg-black rounded-[2rem] p-2 shadow-2xl w-fit h-full">
                  {/* 📌 removed aspect ratio */}
                  <div className="bg-white relative rounded-[1.5rem] overflow-hidden w-fit h-full">
                    {/* Story Content */}
                    <div className="p-2 flex items-center justify-center h-full text-white">
                      <div className="rounded-lg bg-gradient-to-r from-gray-100 to-blue-50 p-1 custom-scroll">
                        <img
                          src="/images/Instagram Reel.webp"
                          alt="Instagram Reel"
                          className="w-full h-full rounded-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Story Templates</h3>
              <p className="text-gray-600 mb-4 text-center">Vertical format for Instagram and Facebook stories</p>
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Video className="w-4 h-4" />
                <span>1080×1920 format</span>
              </div>
            </div>

            {/* LinkedIn Post */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6 h-[500px] ">
                {/* LinkedIn Interface */}
                <div className="bg-[#0077B5] h-12 flex items-center px-4">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mr-3">
                    <span className="text-[#0077B5] font-bold text-sm">in</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                </div>

                {/* LinkedIn Post Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">JS</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">John Smith</div>
                      <div className="text-xs text-gray-500">Real Estate Agent</div>
                      <div className="text-xs text-gray-400">2h</div>
                    </div>
                  </div>

                  <div className="h-[320px] overflow-y-auto rounded-lg mb-3 bg-gradient-to-r from-gray-100 to-blue-50 p-1 custom-scroll">
                    <img
                      src="/images/Linkedin Post.webp"
                      alt="LinkedIn post template"
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="flex gap-6 text-xs text-gray-500">
                    <span>👍 12 likes</span>
                    <span>💬 3 comments</span>
                    <span>🔄 2 shares</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">LinkedIn Posts</h3>
              <p className="text-gray-600 mb-4 text-center">Professional format for business <br />networking</p>
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <BarChart3 className="w-4 h-4" />
                <span>Business optimized</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Marketing Assets That Drive Results
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">+62%</div>
              <div className="text-lg font-semibold opacity-90">social reach</div>
              <div className="text-sm opacity-75 mt-1">More people see your listings</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4×</div>
              <div className="text-lg font-semibold opacity-90">content output</div>
              <div className="text-sm opacity-75 mt-1">Create more marketing materials</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">AED 0</div>
              <div className="text-lg font-semibold opacity-90">design outsourcing</div>
              <div className="text-sm opacity-75 mt-1">No more expensive designers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Professional Marketing Assets?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of agents already using Coraly to create stunning marketing materials that drive engagement and sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              text="See Asset Generator" />
            <StartFreeButton className="text-purple-600 hover:text-purple-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              text="View Examples" />
         
          </div>
        </div>
      </section>

    </>
  );
};

export default AIMarketingAssets;