import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLogin } from "../../apis/hooks/use-auth";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";

const buildLoginSchema = (t: any) =>
	z.object({
		email: z.string().email(t("sign_up.validation.email.invalid")),
		password: z.string().min(1, t("sign_up.validation.password.required"))
	});

type LoginFormData = z.infer<ReturnType<typeof buildLoginSchema>>;

export const LoginForm: React.FC = () => {

	const { lng } = useParams();
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false);

	const loginSchema = buildLoginSchema(t);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: "onChange"
	});

	const { mutateAsync, isSuccess, isPending, error } = useLogin();

	const onSubmit = async (data: LoginFormData) => {
		try {
			await mutateAsync(data);
		} catch (error: unknown) {
			console.error("Login failed:", error);
		}
	};

	return (
		<div className="space-y-6">
			{isSuccess && (
				<div className="flex items-center gap-2 mb-4 p-4 text-sm text-green-800 bg-green-100 rounded-lg" role="alert">
					<svg className="w-5 h-5 flex-shrink-0 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<div>{t("sign_up.success_login")}</div>
				</div>
			)}

			{error && (
				<div className="flex items-center gap-2 mb-3 p-4 text-sm text-red-800 bg-red-100 rounded-lg" role="alert">
					<svg className="w-5 h-5 text-red-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.994-1.85L21 18V6c0-1.054-.816-1.918-1.85-1.994L19 4H5c-1.054 0-1.918.816-1.994 1.85L3 6v12c0 1.054.816 1.918 1.85 1.994L5 20z" />
					</svg>
					<div>{error.message || t("sign_up.error_login")}</div>
				</div>
			)}

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div className="space-y-2">
					<label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
						{t("sign_up.email_address")}<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5  rtl:left-auto rtl:right-3" />
						<input
							id="email_address"
							type="email"
							placeholder={t("sign_up.enter_email")}
							className={`w-full px-4 py-3 pl-12 rtl:pl-4 rtl:pr-12 rounded-lg border border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none  ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
							{...register("email")}
						/>
					</div>
					{errors.email && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>{errors.email.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
						{t("sign_up.password")}<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5  rtl:left-auto rtl:right-3" />
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder={t("sign_up.enter_your_password")}
							className={`w-full px-4 py-3 pl-12 rtl:pl-4 rtl:pr-12 rounded-lg border border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none   ${errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""} `}
							{...register("password")}
						/>
						<button
							 type="button" aria-label="Show Password"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
						>
							{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
						</button>
					</div>
					{errors.password && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>{errors.password.message}
						</p>
					)}
				</div>

				<button
					type="submit"  aria-label="Sign up"
					className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full"
					disabled={isPending}
				>
					{isPending ? t("sign_up.signing_in") : t("sign_up.sign_in")}
				</button>

				<div className="text-center">
					<p className="text-sm text-gray-600">
						{t("sign_up.dont_have_an_account")} {" "}
						<Link
							to={`/${lng}/sign-up`}
							className="bg-[linear-gradient(100.93deg,_#9A7FEC_44.05%,_#FEBADF_64.81%)] bg-clip-text text-transparent font-medium underline"
						>
							{t("sign_up.sign_up_here")}
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};
