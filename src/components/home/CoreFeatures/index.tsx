import { useState, useEffect, useRef } from 'react';
import {
    Zap,
    Globe,
    MessageSquare,
    Play,
    ArrowRight,
    CheckCircle,
    TrendingUp,
    Clock,
    Star,
    Users,
    BarChart3,
    ArrowDown,
    Target,
    Award,
    Smartphone,
    Timer
} from 'lucide-react';
import BeforeAfterComparison from './BeforeAfterComparison';

export default function CoreFeatures() {


    const [isVisible, setIsVisible] = useState(false);
    const [activeDemo, setActiveDemo] = useState<string | null>(null);
    const [stagingProgress, setStagingProgress] = useState(0);
    const [publishingStep, setPublishingStep] = useState(0);
    const [leadConversationStep, setLeadConversationStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Demo animations
    useEffect(() => {
        if (activeDemo === 'create') {
            setStagingProgress(0);
            const timer = setInterval(() => {
                setStagingProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        return 100;
                    }
                    return prev + 8;
                });
            }, 120);
            return () => clearInterval(timer);
        }
    }, [activeDemo]);

    useEffect(() => {
        if (activeDemo === 'publish') {
            setPublishingStep(0);
            const timer = setInterval(() => {
                setPublishingStep(prev => {
                    if (prev >= 6) {
                        clearInterval(timer);
                        return 6;
                    }
                    return prev + 1;
                });
            }, 800);
            return () => clearInterval(timer);
        }
    }, [activeDemo]);

    useEffect(() => {
        if (activeDemo === 'convert') {
            setLeadConversationStep(0);
            const timer = setInterval(() => {
                setLeadConversationStep(prev => {
                    if (prev >= 4) {
                        clearInterval(timer);
                        return 4;
                    }
                    return prev + 1;
                });
            }, 1500);
            return () => clearInterval(timer);
        }
    }, [activeDemo]);

    const portals = [
        { name: 'PropertyFinder', color: 'bg-blue-500' },
        { name: 'Bayut', color: 'bg-green-500' },
        { name: 'Dubizzle', color: 'bg-orange-500' },
        { name: 'Rightmove', color: 'bg-red-500' },
        { name: 'Zoopla', color: 'bg-purple-500' },
        { name: 'Your Website', color: 'bg-pink-500' }
    ];

    const conversationSteps = [
        { type: 'incoming', message: "Hi, interested in the villa listing", time: "2:47 AM" },
        { type: 'ai', message: "Available! 5BR with pool. Budget range?", time: "2:47 AM" },
        { type: 'incoming', message: "AED 3-4M range", time: "2:48 AM" },
        { type: 'ai', message: "Perfect match! Booking Saturday 2 PM viewing", time: "2:48 AM" },
        { type: 'system', message: "✅ Qualified lead • Agent notified at 8 AM", time: "2:49 AM" }
    ];

    const renderDemo = (demoType: string) => {
        if (activeDemo !== demoType) return null;

        switch (demoType) {
            case 'create':
                return (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">AI Staging Transformation</h4>
                                <p className="text-gray-600">Watch professional staging happen in real-time</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="relative">
                                    <img
                                        src="/before image - empty living room.jpg"
                                        alt="Empty room before staging"
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Before: Empty Room
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        src="/after image - Modern Style.jpeg"
                                        alt="Staged room after AI processing"
                                        className={`w-full h-48 object-cover rounded-lg transition-all duration-500 ${stagingProgress === 100 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                                            }`}
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        After: Modern Style
                                    </div>
                                    {stagingProgress === 100 && (
                                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <CheckCircle className="w-4 h-4" />
                                            Complete
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">AI Processing...</span>
                                    <span className="text-sm text-blue-600 font-bold">{stagingProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-300"
                                        style={{ width: `${stagingProgress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {stagingProgress === 100 && (
                                <div className="text-center bg-green-50 rounded-xl p-6 mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                    <h5 className="font-bold text-green-700 text-xl mb-2">Transformation Complete!</h5>
                                    <p className="text-green-600 mb-4">Professional listing ready in 15 seconds</p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-700">AED 3,000</div>
                                            <div className="text-xs text-green-600">Saved vs traditional</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-green-700">15 sec</div>
                                            <div className="text-xs text-green-600">Total time</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-green-700">40%</div>
                                            <div className="text-xs text-green-600">Faster sales</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button" aria-label="Close Demo"
                                    onClick={() => setActiveDemo(null)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Close Demo
                                </button>
                                <button
                                    type="button" aria-label="Start Free Trial"
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                                    Start Free Trial
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'publish':
                return (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Global Publishing Machine</h4>
                                <p className="text-gray-600">Watch your listing go live across 100+ portals</p>
                            </div>

                            <div className="text-center mb-8">
                                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg">
                                    <div className="text-xl font-bold">Dubai Villa - AED 4.2M</div>
                                    <div className="text-sm opacity-90">5 Bed • Pool • Garden</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                {portals.map((portal, index) => (
                                    <div
                                        key={portal.name}
                                        className={`p-4 rounded-xl border-2 transition-all duration-500 ${publishingStep > index
                                            ? 'border-green-200 bg-green-50'
                                            : 'border-gray-200 bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-6 h-6 flex items-center justify-center">
                                                {portal.name === 'PropertyFinder' ? (
                                                    <img
                                                        src="/logo-en PRopertyfinder.jpg"
                                                        alt="PropertyFinder"
                                                        className="max-h-4 max-w-full object-contain"
                                                    />
                                                ) : portal.name === 'Bayut' ? (
                                                    <img
                                                        src="/Bayut-1024x416.png"
                                                        alt="Bayut"
                                                        className="max-h-4 max-w-full object-contain"
                                                    />
                                                ) : (
                                                    <div className={`w-4 h-4 rounded-full ${publishingStep > index ? 'bg-green-500' : portal.color
                                                        } flex items-center justify-center`}>
                                                        <span className="text-white text-xs font-bold">
                                                            {portal.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-semibold text-gray-900 text-sm">{portal.name}</span>
                                        </div>
                                        {publishingStep > index ? (
                                            <div className="flex items-center gap-1 text-green-600">
                                                <CheckCircle className="w-4 h-4" />
                                                <span className="text-xs font-medium">Live</span>
                                            </div>
                                        ) : (
                                            <div className="text-xs text-gray-400">Pending...</div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {publishingStep >= 6 && (
                                <div className="text-center bg-green-50 rounded-xl p-6 mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                    <h5 className="font-bold text-green-700 mb-1">Global Launch Complete!</h5>
                                    <p className="text-sm text-green-600">Live on 100+ portals • Reaching 50M+ monthly searchers</p>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button" aria-label="Close Demo"
                                    onClick={() => setActiveDemo(null)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Close Demo
                                </button>
                                <button
                                    type="button" aria-label="Dominate My Market"
                                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                                    Dominate My Market
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'convert':
                return (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">24/7 Lead Conversion</h4>
                                <p className="text-gray-600 mb-2">2:47 AM - While you were sleeping</p>
                            </div>

                            <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
                                <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                                    <Smartphone className="w-6 h-6" />
                                    <div>
                                        <div className="font-semibold">Hassan Al-Mahmoud</div>
                                        <div className="text-xs opacity-90">Dubai Investor</div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 space-y-3 max-h-80 overflow-y-auto">
                                    {conversationSteps.slice(0, leadConversationStep + 1).map((step, index) => (
                                        <div key={index} className={`${step.type === 'system' ? 'text-center' :
                                            step.type === 'ai' ? 'flex justify-end' : 'flex justify-start'
                                            }`}>
                                            {step.type === 'system' ? (
                                                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                                    {step.message}
                                                </div>
                                            ) : (
                                                <div className={`max-w-[85%] p-3 rounded-lg ${step.type === 'ai'
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-200 text-gray-800'
                                                    }`}>
                                                    <p className="text-sm">{step.message}</p>
                                                    <p className="text-xs opacity-70 mt-1">{step.time}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {leadConversationStep >= 4 && (
                                <div className="text-center bg-green-50 rounded-xl p-4 mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                    <h5 className="font-bold text-green-700 mb-1">Lead Converted!</h5>
                                    <p className="text-sm text-green-600">Qualified appointment booked • Agent notified</p>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button" aria-label="Close Demo"
                                    onClick={() => setActiveDemo(null)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Close Demo
                                </button>
                                <button
                                    type="button" aria-label="Never Miss Another Lead"
                                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                                    Never Miss Another Lead
                                </button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="py-12 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Problem Statement */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        While Your Competitors Struggle With Manual Work,{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            You Could Be Closing 3x More Deals
                        </span>
                    </h2>
                </div>

                {/* Before/After Comparison Image */}
                <BeforeAfterComparison />

                {/* Section 1: CREATE */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        {/* Visual (60% width) */}
                        <div className="relative lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                {/* Center-Split Before/After Visual */}
                                <div className="grid grid-cols-2 gap-0 relative aspect-[576/232]">
                                    <div className="relative">
                                        <img
                                            src="/images/Before Image - Listing Enhancement Section.png"
                                            alt="Empty room before staging"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Before Coraly
                                        </div>
                                        {/* Before content overlay */}
                                        <div className="absolute top-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <div className="text-xs text-gray-600 mb-1">📷 Dark, blurry living room photo</div>
                                            <div className="text-xs text-gray-600 mb-1">📝 Plain title: "Nice home for sale"</div>
                                            <div className="text-xs text-red-600 font-medium">🕒 Time: 3–4 hours manual work</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="/images/After Image - Listing Enhancement Section.png"
                                            alt="Staged room"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            With Coraly
                                        </div>
                                        {/* After content overlay */}
                                        <div className="absolute top-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <div className="text-xs text-gray-600 mb-1">📷 Brightened, staged, sky enhanced</div>
                                            <div className="text-xs text-gray-600 mb-1">📝 SEO copy: "Luxury 3BR Apartment with Panoramic Views"</div>
                                            <div className="text-xs text-green-600 font-medium">⏱️ Coraly: Ready in 15 seconds</div>
                                        </div>
                                    </div>

                                    {/* Center divider with arrow */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-2 border-gray-200">
                                        <ArrowRight className="w-4 h-4 text-purple-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating time badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-lg">
                                <div className="text-sm font-bold">⏱️ 15 seconds total</div>
                            </div>
                        </div>

                        {/* Content (40% width) */}
                        <div className="lg:col-span-2">
                            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
                                <Zap className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                From Raw Photos to Ready-to-Sell Listings in Seconds
                            </h3>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Coraly instantly transforms any photo into a high-converting listing with pro-level enhancements, smart SEO copy, and staging. All done in seconds.
                            </p>

                            {/* 3 Column Benefit Highlights */}
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                                    <div className="text-3xl mb-3">💡</div>
                                    <h4 className="font-bold text-gray-900 mb-2">AI Photo Enhancements</h4>
                                    <p className="text-sm text-gray-600">Lighting fix, sky replacement, object removal, virtual staging</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                                    <div className="text-3xl mb-3">✍️</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Instant SEO-Optimized Descriptions</h4>
                                    <p className="text-sm text-gray-600">Smart titles + branded copy to attract clicks</p>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                                    <div className="text-3xl mb-3">🚀</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Listings That Sell Faster</h4>
                                    <p className="text-sm text-gray-600">Up to 40% more views and leads</p>
                                </div>
                            </div>


                            <button type="button" aria-label="Try Coraly Free"
                                data-popup="signup"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Try Coraly Free
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Transition Element */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium">
                            <span>Then instantly...</span>
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Section 2: PUBLISH */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content (40% width) */}
                        <div>
                            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6">
                                <Globe className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                📢 Get Maximum Exposure. Unlock More Offers. Earn Bigger Commissions.
                            </h3>

                            <p className="text-lg text-gray-600 mb-8 font-medium">
                                List once, publish everywhere in seconds.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-600 mb-1 flex items-center justify-center gap-1">
                                        <TrendingUp className="w-5 h-5" />
                                        340%
                                    </div>
                                    <div className="text-xs text-green-600">More views</div>
                                    <div className="text-xs text-gray-500 mt-1">vs single-portal publishing</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-600 mb-1 flex items-center justify-center gap-1">
                                        <Globe className="w-5 h-5" />
                                        100+
                                    </div>
                                    <div className="text-xs text-green-600">Portals in 10 sec</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        <Timer className="w-3 h-3 inline mr-1 animate-pulse" />
                                        automated
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <div className="text-2xl font-bold text-green-600 mb-1 flex items-center justify-center gap-1">
                                        <Users className="w-5 h-5" />
                                        50M+
                                    </div>
                                    <div className="text-xs text-green-600">Monthly searchers</div>
                                    <div className="text-xs text-gray-500 mt-1">global reach</div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Instant multi-portal publishing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Automatic format optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Real-time price sync</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700 font-medium">Distribute to top portals in UAE, UK, and global markets</span>
                                </div>
                            </div>

                            <button type="button" aria-label="Dominate My Market"
                                data-popup="signup"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Play className="w-6 h-6" />
                                Dominate My Market
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Visual (60% width) */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl shadow-2xl p-8">
                                {/* Central property */}
                                <div className="text-center mb-8">
                                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg">
                                        <div className="text-xl font-bold">Dubai Villa - AED 4.2M</div>
                                        <div className="text-sm opacity-90">5 Bed • Pool • Garden</div>
                                        <div className="mt-2 text-xs bg-white/20 rounded-full px-3 py-1">
                                            Publishing to all portals...
                                        </div>
                                    </div>

                                    {/* Flow arrows radiating out */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                        <div className="relative w-32 h-32">
                                            {/* Animated arrows pointing to portals */}
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                                                <ArrowRight className="w-4 h-4 text-green-500 rotate-[-45deg] animate-pulse" />
                                            </div>
                                            <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                                                <ArrowRight className="w-4 h-4 text-green-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                            </div>
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                                                <ArrowRight className="w-4 h-4 text-green-500 rotate-45 animate-pulse" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                            <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                                                <ArrowRight className="w-4 h-4 text-green-500 rotate-180 animate-pulse" style={{ animationDelay: '0.6s' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Portal flow animation */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <img
                                                src="/icons/logo-property-finder.svg"
                                                alt="PropertyFinder"
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">PropertyFinder</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <img
                                                src="/icons/bayut_logo_2x_20072020.png"
                                                alt="Bayut"
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">Bayut</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <img
                                                src="/icons/dubizzle_logo.png"
                                                alt="Bayut"
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">Dubizzle</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <img
                                                src="/icons/Rightmove_logo.png"
                                                alt="Bayut"
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">Rightmove</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <img
                                                src="/icons/Zoopla-logo-Purple-RGBPNG.png"
                                                alt="Zoopla"
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">Zoopla</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <div className="h-6 flex items-center justify-center mb-2">
                                            <div className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs font-bold">
                                                <span className="text-white text-xs font-bold">Your Site</span>
                                            </div>
                                        </div>
                                        <div className="text-xs font-medium text-gray-700">Your Website</div>
                                        <div className="text-xs text-green-600 mt-1">✓ Published</div>
                                    </div>
                                </div>

                                {/* Global map visualization */}
                                <div className="bg-blue-50 rounded-xl p-4 text-center">
                                    <div className="text-lg font-bold text-blue-600 mb-2">Global Reach</div>
                                    <div className="text-sm text-blue-600">UAE • UK • Global Markets</div>
                                    <div className="text-xs text-gray-600 mt-1">
                                        <button type="button" aria-label="portals"
                                            className="text-purple-600 hover:text-purple-700 underline">+ 95 more portals</button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating counter */}
                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold flex items-center gap-2">
                                    <Timer className="w-6 h-6 animate-pulse" />
                                    10 sec
                                </div>
                                <div className="text-sm opacity-90">Publishing time</div>
                            </div>
                        </div>
                    </div>

                    {/* Transition Element */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium">
                            <span>While you sleep...</span>
                            <ArrowDown className="w-5 h-5 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Section 3: CONVERT */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual (60% width) */}
                        <div className="relative">
                            {/* WhatsApp Mobile Mockup */}
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                                {/* WhatsApp Header */}
                                <div className="bg-green-600 text-white p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Hassan Al-Mahmoud</div>
                                            <div className="text-xs opacity-90">🟢 Online • 2:47 AM</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Conversation */}
                                <div className="bg-gray-50 p-4 space-y-4 min-h-[320px]">
                                    {/* Buyer Message */}
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                                            <p className="text-sm">Hi, is the Emirates Hills villa still available? Budget is 4M AED.</p>
                                            <p className="text-xs text-gray-500 mt-1">2:47 AM</p>
                                        </div>
                                    </div>

                                    {/* AI Response */}
                                    <div className="flex justify-end">
                                        <div className="bg-green-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[85%]">
                                            <p className="text-sm">Yes! Perfect match. 5BR villa, 4.2M AED. Can I book you a viewing this Saturday?</p>
                                            <p className="text-xs opacity-80 mt-1">2:48 AM</p>
                                        </div>
                                    </div>

                                    {/* Buyer Response */}
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                                            <p className="text-sm">Yes, Saturday works!</p>
                                            <p className="text-xs text-gray-500 mt-1">2:49 AM</p>
                                        </div>
                                    </div>

                                    {/* AI Booking Confirmation */}
                                    <div className="flex justify-end">
                                        <div className="bg-green-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[85%]">
                                            <p className="text-sm">✅ Booked! Saturday 2 PM<br />📧 Details sent to your email<br />Agent will call you at 9 AM tomorrow</p>
                                            <p className="text-xs opacity-80 mt-1">2:49 AM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Results Notification */}
                                <div className="bg-blue-50 border-t border-gray-200 p-4">
                                    <div className="text-center">
                                        <div className="text-sm font-medium text-blue-700 mb-2">🌙 While you were sleeping:</div>
                                        <div className="space-y-1 text-xs text-blue-600">
                                            <div>✅ Lead qualified & viewing booked</div>
                                            <div>✅ Agent Ahmed notified for 8 AM</div>
                                            <div>💰 Potential: AED 4.2M deal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">30 sec</div>
                                <div className="text-sm opacity-90">Response time</div>
                            </div>
                        </div>

                        {/* Content (40% width) */}
                        <div>
                            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                                <MessageSquare className="w-8 h-8" />
                            </div>

                            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Never Miss a Lead Again
                            </h3>

                            <p className="text-xl text-purple-600 font-semibold mb-8">
                                AI answers, qualifies, and books appointments 24/7
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="text-center p-4 bg-purple-50 rounded-xl">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">30 sec</div>
                                    <div className="text-xs text-purple-600">Response time</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-xl">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">60%</div>
                                    <div className="text-xs text-purple-600">More qualified leads</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-xl">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                                    <div className="text-xs text-purple-600">Availability</div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">⚡</div>
                                    <span className="text-gray-700 font-medium">30-second response time, any hour</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">🎯</div>
                                    <span className="text-gray-700 font-medium">60% more qualified leads outside business hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">📅</div>
                                    <span className="text-gray-700 font-medium">Automatic appointment booking while you sleep</span>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="bg-purple-50 rounded-xl p-6 mb-8">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-700 font-medium mb-3">
                                    "I wake up to 3 qualified appointments every morning. It's like having a sales team that never sleeps."
                                </blockquote>
                                <cite className="text-sm text-gray-600">— Maria S., Dubai</cite>
                            </div>

                            <button
                                type="button" aria-label="Start Converting"
                                data-popup="signup"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Play className="w-6 h-6" />
                                Start Converting 24/7
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Unified Outcome Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-12 lg:p-16">
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            The Result: Agencies Growing{' '}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                3x Faster Than Competition
                            </span>
                        </h3>

                        {/* Growth visualization */}
                        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="text-center">
                                    <div className="text-gray-600 font-medium mb-2">Month 1</div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">8 listings</div>
                                    <div className="text-xl text-gray-600">AED 240K revenue</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-purple-600 font-medium mb-2">Month 6 with Coraly</div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">24 listings</div>
                                    <div className="text-xl text-purple-600">AED 720K revenue</div>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2">
                                <TrendingUp className="w-6 h-6 text-purple-600" />
                                <span className="text-lg font-semibold text-purple-600">The Coraly Effect</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                type="button" aria-label="Start My Growth Engine"
                                data-popup="signup"
                                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                <Award className="w-6 h-6" />
                                Start My Growth Engine
                            </button>
                        </div>
                    </div>
                </div>

                {/* Render Active Demo */}
                {activeDemo && renderDemo(activeDemo)}
            </div>
        </section>
    );
};

