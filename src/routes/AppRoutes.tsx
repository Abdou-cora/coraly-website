import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/signUp";
import AICopywriting from "../pages/AICopywriting";
import PhotoEnhancement from "../pages/PhotoEnhancement";
import AIMarketingAssets from "../pages/AIMarketingAssets";
import LeadQualification from "../pages/LeadQualification";
import AIListingCreation from "../pages/AIListingCreation";
import EmailVerification from "../components/login/email-verification";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { TermsCondition } from "../pages/TermsConditions";
import BlogPost from "../pages/BlogPost";
import Blogs from "../pages/Blogs";

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lng" element={<Home />} />

        <Route path="/:lng/sign-in" element={<Login />} />
        <Route path="/:lng/sign-up" element={<SignUp />} />
        <Route path="/:lng/verify-email" element={<EmailVerification />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        <Route path="/:lng/terms-condition" element={<TermsCondition />} />
        <Route path="/:lng/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:lng/ai-listing-creation" element={<AIListingCreation />} />
        <Route path="/:lng/photo-enhancement" element={<PhotoEnhancement />} />
        <Route path="/:lng/ai-copywriting" element={<AICopywriting />} />
        <Route path="/:lng/ai-marketing-assets" element={<AIMarketingAssets />} />
        <Route path="/:lng/lead-qualification" element={<LeadQualification />} />

        <Route path="/:lng/blogs" element={<Blogs />} />
        <Route path="/:lng/blog/:postId" element={<BlogPost />} />
        <Route path="/:lng/blog/*" element={<Blogs />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
