import { useTranslation } from "react-i18next";
import { Icons } from "../components/icons";
import { SignUpForm } from "../components/login/sign-up-form";

export const SignUp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
      <div className="w-full max-w-md relative z-10 mt-4 mb-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Icons.logo className="h-[52px] w-[150px] md:h-[50px] md:w-[170px]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t("sign_up.create_account")}
            </h1>
            <p className="text-gray-600">{t("sign_up.description")}</p>
          </div>
          {/* Form */}
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};
