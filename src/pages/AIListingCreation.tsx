import React, { useState, useEffect } from 'react';
import {
  Zap,
  Camera,
  Edit3,
  Trash2,
  Star,
  Check,
  ArrowRight,
  Play,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Plus,
  Minus,
  Clock,
  Sparkles,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Timer
} from 'lucide-react';
import StartFreeButton from '../components/StartFreeButton';

const AIListingCreation = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [likedListings, setLikedListings] = useState<number[]>([]);
  const [currentListingIndex, setCurrentListingIndex] = useState(0);
  const [currentEnhancementIndex, setCurrentEnhancementIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const toggleLike = (index: number) => {
    setLikedListings(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "AI Photo Enhancement",
      description: "Transform ordinary photos into stunning, professional-quality images that capture buyers' attention instantly.",
      hoverIcon: <Sparkles className="w-8 h-8" />
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Smart Copy Generation",
      description: "Generate compelling property descriptions that highlight key features and drive more inquiries.",
      hoverIcon: <BarChart3 className="w-8 h-8" />
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Publishing",
      description: "Publish to multiple portals simultaneously with optimized formatting for each platform.",
      hoverIcon: <Clock className="w-8 h-8" />
    }
  ];

  const listings = [
    {
      title: "Modern Luxury Apartment",
      location: "Downtown, Premium Location",
      price: "AED 2,500,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "1,850 sq ft",
      badge: "Featured",
      generationTime: "12 seconds",
      image: "/images/Before After Listing.webp"
    }
  ];

  const testimonials = [
    {
      title: "Game Changer for Our Agency",
      rating: 5,
      text: "Our partnership with Coraly is key to our success at Property Finder. The AI-powered listings have increased our conversion rates by 40%.",
      author: "Sarah Johnson, Property Finder"
    },
    {
      title: "Incredible Time Savings",
      rating: 5,
      text: "Coraly has transformed how we create and manage our property listings. The AI-powered features save us hours every day.",
      author: "Ahmed Al-Rashid, Emirates Properties"
    },
    {
      title: "Outstanding Results",
      rating: 5,
      text: "The quality of listings we can now produce with Coraly has significantly increased our client satisfaction and conversion rates.",
      author: "Maria Rodriguez, Dubai Realty Group"
    }
  ];

  const faqs = [
    {
      question: "Can I customize the enhancements to match my branding style?",
      answer: "Yes, Coraly allows you to tailor enhancements to align with your brand's unique style and visual identity. You can set custom color schemes, fonts, and layout preferences."
    },
    {
      question: "How quickly will the photo enhancements be applied?",
      answer: "Our AI-powered photo enhancements are applied instantly. Most images are processed within seconds, allowing you to create listings faster than ever."
    },
    {
      question: "What file formats are supported for photo uploads?",
      answer: "Coraly supports all major image formats including JPG, PNG, HEIC, and RAW files. Our platform automatically optimizes images for web use while maintaining quality."
    },
    {
      question: "Can I integrate Coraly with my existing CRM system?",
      answer: "Yes, Coraly integrates seamlessly with popular CRM systems and MLS platforms. We offer API access and direct integrations with Salesforce, Bitrix, and major real estate platforms."
    }
  ];

  const enhancements = [
    {
      title: "Photo Enhancement",
      before: "/images/IMG_2516 - low light.webp",
      after: "/images/687e85c949ce1f23fb39b0c5-17531223109350.jpg",
      description: "Transform dark, poorly lit photos into bright, welcoming spaces."
    },
    {
      title: "Sky Replacement",
      after: "/images/after-688268fa49ce1f23fb3a2a77.webp",
      before: "/images/before-34576w76543.webp",
      description: "Enhance property appeal instantly by replacing dull skies with vibrant, clear ones."
    },
    {
      title: "Room Staging",
      after: "/images/688268fa49ce1f23fb3a2a7.webp",
      before: "/images/empty-living-room-interior-design.webp",
      description: "Transform empty rooms into fully furnished spaces for a more inviting and professional look."
    }
  ];

  // Auto-advance enhancement carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEnhancementIndex((prev) => (prev + 1) % enhancements.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [enhancements.length]);

  return (
    <>
      {/* Enhanced Hero Section with Split-Screen */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                AI Powered Listings
              </h1>
              <p className="text-xl lg:text-2xl mb-4 opacity-90 font-semibold">
                Real Estate Property Listings That Convert
              </p>
              <p className="text-lg lg:text-xl mb-8 opacity-80 leading-relaxed">
                Transform your property listings with AI-powered content, stunning visuals, and conversion-optimized layouts that help you win more instructions and close more deals.
              </p>
              <button type="button" data-popup="signup" aria-label="Create Your First Listing" className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Play className="w-6 h-6" />
                Create Your First Listing
              </button>
            </div>

            {/* Enhanced Hero Visual - Split Screen Before/After */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Bad Listing Side */}
                  <div className="bg-white rounded-2xl p-4 shadow-2xl">
                    <div className="text-center mb-3">
                      <div className="text-red-600 font-bold text-sm mb-2">❌ Manual Listing</div>
                      <img
                        src="/images/IMG_2516 - low light.webp"
                        alt="Low-light, unedited photo"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <div className="text-xs text-gray-600 text-left">
                        "Nice house for sale. Call for details."
                      </div>
                    </div>
                    <div className="text-xs text-red-600 font-semibold">
                      ⏱️ 4+ hours to prepare and stage manually
                    </div>
                  </div>

                  {/* AI-Powered Listing Side */}
                  <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-green-400">
                    <div className="text-center mb-3">
                      <div className="text-green-600 font-bold text-sm mb-2">✨ AI-Powered with Coraly</div>
                      <img
                        src="/images/687e85c949ce1f23fb39b0c5-17531223109350.jpg"
                        alt="AI-enhanced bright, professional photo"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <div className="text-xs text-gray-800 text-left">
                        "Elegant 4-bedroom villa with landscaped gardens and modern finishes. Ready to move in."
                      </div>
                    </div>
                    <div className="text-xs text-green-600 font-semibold">
                      ⚡ Listing created in 12 seconds
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Preview */}
                <div className="bg-green-600 rounded-2xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">AI Assistant - 2:47 AM</span>
                  </div>
                  <div className="text-sm opacity-90">
                    "Hi! I saw your villa listing. Booking viewing for Saturday 2 PM. Budget confirmed: AED 4.2M ✅"
                  </div>
                  <div className="text-xs opacity-75 mt-2">
                    💤 While you were sleeping: Lead converted to appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Interactive Icons */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides all the tools you need to create stunning, high-converting property listings
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="relative inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-6 overflow-hidden">
                  <div className="transition-all duration-300 group-hover:scale-0 group-hover:rotate-180">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 scale-0 -rotate-180 group-hover:scale-100 group-hover:rotate-0">
                    {feature.hoverIcon}
                  </div>

                  {/* Sparkle animation on hover */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-purple-600 font-semibold text-sm">
                    <span>Explore feature</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Photo Enhancement Section with Interactive Slider */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-purple-600 font-semibold mb-2">AI LISTING</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Photo Enhancement that sets you apart
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The key photo enhancement features that set your listings photos apart from the competition.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Photo Enhancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Sky Replacement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Room Staging</span>
                </div>
              </div>
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Perfect Your Images" />
            </div>

            {/* Automatic Enhancement Carousel */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Enhancement Title */}
                <div className="absolute top-4 left-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {enhancements[currentEnhancementIndex].title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {enhancements[currentEnhancementIndex].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-0 aspect-[4/3]">
                  {/* Before Image */}
                  <div className="relative">
                    <img
                      src={enhancements[currentEnhancementIndex].before}
                      alt="Before enhancement"
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative">
                    <img
                      src={enhancements[currentEnhancementIndex].after}
                      alt="After enhancement"
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute bottom-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {enhancements.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentEnhancementIndex === index
                          ? 'bg-purple-600 w-6'
                          : 'bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Positioning Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/images/ChatGPT Image Jul 21, 2025, 09_32_52 PM.webp"
                  alt="AI Image Positioning demonstration"
                  className="w-full rounded-2xl aspect-video object-cover"
                />
              </div>

              {/* Mobile Preview */}
              <div className="absolute -bottom-4 -right-4 w-24 h-40 bg-gray-900 rounded-2xl p-2">
                <div className="bg-white rounded-xl h-full flex items-center justify-center text-xs text-gray-600">
                  Mobile View
                </div>
              </div>
            </div>

            <div>
              <div className="text-purple-600 font-semibold mb-2">AI LISTING</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Smart Image Positioning
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Boost your listings performance with AI-powered image positioning. Coraly automatically arranges your photos in the most effective order to maximize attention and showcase properties in their best light.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Smart photo sequencing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Mobile-optimized layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Increase conversion rates</span>
                </div>
              </div>
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Start Image Repositioning" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Property Listings Showcase with Interactive Carousel */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See AI-Generated Listings in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of professional property listings created with Coraly AI in seconds
            </p>
          </div>

          {/* Interactive Property Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Current Listing Display */}
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={listings[currentListingIndex].image}
                    alt={listings[currentListingIndex].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Property Badge */}
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    {listings[currentListingIndex].badge}
                  </div>

                  {/* Like Button */}
                  <button
                    type="button" aria-label="Like Button"
                    onClick={() => toggleLike(currentListingIndex)}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <Heart className={`w-6 h-6 ${likedListings.includes(currentListingIndex) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                </div>

                {/* Property Details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {listings[currentListingIndex].title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {listings[currentListingIndex].location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-600">
                        {listings[currentListingIndex].price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5" />
                      <span>{listings[currentListingIndex].bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5" />
                      <span>{listings[currentListingIndex].bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5" />
                      <span>{listings[currentListingIndex].sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Object Removal Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Large Object Removal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remove unwanted objects from your property photos with AI precision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-8">
              <div className="bg-white rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                <img src="/images/remove-object.png" alt="Remove Object" className='p-10' />
                <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm">
                  ✨ ENHANCEMENT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Copy Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-white/80 font-semibold mb-2">AI LISTING</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Engaging Copy and Descriptions
              </h2>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Craft the perfect property description and engaging content with AI assistance. Coraly AI analyzes key property features to generate accurate, engaging, and SEO-friendly content.
              </p>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Make your listings stand out with captivating descriptions and titles that attract potential buyers without lifting a finger.
              </p>
              <StartFreeButton className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Perfect Your Copy" />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">AI Generated Description</h3>
                  <Edit3 className="w-5 h-5 text-purple-600" />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
                  "Discover luxury living in this stunning 3-bedroom apartment featuring panoramic city views, premium finishes, and world-class amenities. Located in the heart of downtown, this modern residence offers the perfect blend of comfort and sophistication..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{testimonial.title}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-600 font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button type="button" aria-label=" View More Testimonials" className="text-purple-600 hover:text-purple-700 px-8 py-4 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-300 transition-all duration-200">
              View More Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Coraly's AI-powered listing features
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <button type="button" aria-label="question"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {activeFAQ === index ? (
                      <Minus className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {activeFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of real estate agencies already using Coraly to create listings that convert and grow their business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              text="Start Free Trial" />

            <StartFreeButton className="text-purple-600 hover:text-purple-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              text="Book a Demo" />

          </div>
        </div>
      </section>
    </>
  );
};

export default AIListingCreation;