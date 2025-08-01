import type React from "react";
import { Icons } from "../components/icons";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../components/login/login-form";


export const Login: React.FC = () => {
    
  const { t } = useTranslation();

	return (
		<section className="relative min-h-screen bg-gradient-to-br flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>

			<div className="w-full max-w-md relative z-10">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="text-center mb-8">
						<div className="flex items-center justify-center mb-4">
							<Icons.logo className="h-[52px] w-[150px] md:h-[50px] md:w-[170px]" />
						</div>
						<p className="text-gray-600">{t("sign_up.login_description")}</p>
					</div>
					<LoginForm />
				</div>
			</div>
		</section>
	);
};
