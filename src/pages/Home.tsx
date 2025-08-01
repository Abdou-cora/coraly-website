import CoreFeatures from "../components/home/CoreFeatures";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import Hero from "../components/home/hero/Hero";
import CRMIntegration from "../components/home/integration/CRMIntegration";
import Pricing from "../components/home/Pricing";
import SocialProof from "../components/home/social-proof/SocialProof";
import Testimonials from "../components/home/Testimonials";
import VideoTestimonials from "../components/home/VideoTestimonials";


export function Home() {

    return (
        <>
            <Hero />
            <SocialProof />
            <CRMIntegration />
            <CoreFeatures />
            <VideoTestimonials />
            <Testimonials />
            <Pricing />
            <FAQ />
            <FinalCTA />
        </>
    );
}