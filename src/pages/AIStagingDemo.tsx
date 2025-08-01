import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Check, Star, Zap, TrendingUp, Eye, DollarSign } from 'lucide-react';

const AIStagingDemo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [stagingProgress, setStagingProgress] = useState(0);
  const [showBenefits, setShowBenefits] = useState(false);

  const styles = [
    { id: 'modern', name: 'Modern', color: 'from-blue-500 to-cyan-500' },
    { id: 'luxury', name: 'Luxury', color: 'from-purple-600 to-pink-500' },
    { id: 'minimalist', name: 'Minimalist', color: 'from-gray-600 to-gray-800' },
    { id: 'boho', name: 'Boho', color: 'from-orange-500 to-red-500' },
    { id: 'classic', name: 'Classic', color: 'from-green-500 to-emerald-500' }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-5 h-5" />, text: '+12% higher selling price', delay: 0 },
    { icon: <Eye className="w-5 h-5" />, text: '+340% more listing views', delay: 500 },
    { icon: <DollarSign className="w-5 h-5" />, text: 'AED 3,000 saved per listing', delay: 1000 }
  ];

  const partnerLogos = [
    { name: 'PropertyFinder', logo: '/icons/logo-property-finder.svg' },
    { name: 'Bayut', logo: '/Bayut-1024x416.png' },
    { name: 'Rightmove', logo: null }
  ];

  const scenes = [
    { name: 'Hook', duration: 5000 },
    { name: 'AI Staging', duration: 15000 },
    { name: 'Style Selector', duration: 15000 },
    { name: 'Benefits', duration: 10000 },
    { name: 'Social Proof', duration: 10000 },
    { name: 'CTA', duration: 10000 }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, scenes]);

  // Staging progress animation
  useEffect(() => {
    if (currentScene === 1 && isPlaying) {
      setStagingProgress(0);
      const progressTimer = setInterval(() => {
        setStagingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 2;
        });
      }, 150);
      return () => clearInterval(progressTimer);
    }
  }, [currentScene, isPlaying]);

  // Benefits animation
  useEffect(() => {
    if (currentScene === 3) {
      setShowBenefits(true);
    } else {
      setShowBenefits(false);
    }
  }, [currentScene]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (currentScene === scenes.length - 1) {
      setCurrentScene(0);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setCurrentScene(0);
    setStagingProgress(0);
    setIsPlaying(true);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 0: // Hook (0:00-0:05)
        return (
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            <div className="relative">
              <img
                src="/images/staging_coraly_branded.webp"
                alt="Empty room before staging"
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                Empty Room
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                See this turn into a beautifully staged home...
              </h3>
              <p className="text-2xl text-purple-600 font-semibold">
                in 15 seconds.
              </p>
            </div>
          </div>
        );

      case 1: // AI Staging in Action (0:05-0:20)
        return (
          <div className="text-center">
            <div className="relative mb-8">
              <img
                src="/images/staging_coraly_branded.webp"
                alt="AI staging transformation"
                className={`w-full h-64 lg:h-80 object-cover rounded-xl transition-all duration-500 ${stagingProgress > 50 ? 'brightness-110 contrast-110' : 'brightness-100'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/20 rounded-xl"></div>

              {/* Progress overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="text-white font-medium">AI Transformation in Progress...</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${stagingProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-white text-sm mt-2">{stagingProgress}% Complete</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI designs 5 styles: Modern, Luxury, Minimalist, Boho, Classic
            </h3>
          </div>
        );

      case 2: // Interactive Style Selector (0:20-0:35)
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Choose your style below
            </h3>

            <div className="relative mb-8">
              <img
                src="/images/staging_coraly_branded.webp"
                alt={`${selectedStyle} style staging`}
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                {selectedStyle} Style
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {styles.map((style) => (
                <button type="button" aria-label={style.name}
                  key={style.id}
                  onClick={() => handleStyleSelect(style.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedStyle === style.id
                      ? `bg-gradient-to-r ${style.color} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        );

      case 3: // Result Benefits (0:35-0:45)
        return (
          <div className="text-center">
            <div className="relative mb-8">
              <img
                src="/images/staging_coraly_branded.webp"
                alt="Staged room with benefits"
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-6">Results You Can Expect</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center gap-3 text-xl font-semibold transition-all duration-500 ${showBenefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        style={{ transitionDelay: `${benefit.delay}ms` }}
                      >
                        <div className="p-2 bg-white/20 rounded-full">
                          {benefit.icon}
                        </div>
                        {benefit.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600">
              <span className="font-semibold text-purple-600">AI staging costs nothing extra</span> — unlimited transformations
            </p>
          </div>
        );

      case 4: // Social Proof Flash (0:45-0:55)
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Optimized for UAE and Global Portals
            </h3>

            <div className="flex justify-center items-center gap-8 mb-8">
              {partnerLogos.map((partner, index) => (
                <div key={index} className="flex items-center justify-center h-16 w-32">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="text-gray-600 font-semibold text-sm">
                      {partner.name}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">Loved by 200+ UAE agents</span>
              </div>
              <p className="text-gray-600">Join the professionals who've transformed their listings</p>
            </div>
          </div>
        );

      case 5: // CTA Close (0:55-1:05)
        return (
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Want to transform your listings like this?
            </h2>

            <div className="space-y-4 mb-8">
              <button type="button" aria-label="Try AI Staging Free" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto">
                <Zap className="w-6 h-6" />
                Try AI Staging Free
                <ArrowRight className="w-6 h-6" />
              </button>

              <button type="button" aria-label="book a guided demo" className="text-purple-600 hover:text-purple-700 px-6 py-3 rounded-full font-medium transition-colors duration-200">
                Or book a guided demo for your team →
              </button>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">30-day free trial • No credit card required</span>
              </div>
              <p className="text-green-600 text-sm">Start transforming your listings in under 5 minutes</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Video Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">See AI Staging in Action</h2>
            <p className="opacity-90">Watch the transformation magic happen in real-time</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm opacity-90">
              Scene {currentScene + 1} of {scenes.length}
            </div>
            <div className="flex gap-2">
              {!isPlaying ? (
                <button type="button" aria-label="play"
                  onClick={handlePlay}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
                >
                  <Play className="w-6 h-6" />
                </button>
              ) : (
                <button
                  type="button" aria-label="pause"
                  onClick={handlePause}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
                >
                  <Pause className="w-6 h-6" />
                </button>
              )}
              <button
                type="button" aria-label="rotate"
                onClick={handleRestart}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-2 opacity-80">
            {scenes.map((scene, index) => (
              <span key={index} className={index <= currentScene ? 'opacity-100' : 'opacity-50'}>
                {scene.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video Content */}
      <div className="p-8 lg:p-12 min-h-[500px] flex items-center">
        {renderScene()}
      </div>

      {/* Interactive Controls */}
      {currentScene === 2 && (
        <div className="bg-gray-50 p-6 border-t">
          <p className="text-center text-gray-600 text-sm">
            ✨ Click any style above to see instant transformation
          </p>
        </div>
      )}
    </>
  );
};

export default AIStagingDemo;