import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, Shield, User } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useRegister } from "../../apis";
import { Link, useParams } from "react-router-dom";

// Build Zod Schema with i18n translations
const buildSignUpSchema = (t: any) =>
	z
		.object({
			name: z.string().min(2, t("sign_up.validation.name.min")).max(50, t("sign_up.validation.name.max")),
			email: z.string().email(t("sign_up.validation.email.invalid")),
			password: z.string().min(8, t("sign_up.validation.password.min")),
			confirmPassword: z.string(),
			acceptTerms: z.literal(true).refine((val) => val === true, {
				message: t("sign_up.validation.acceptTerms.required"),
			}),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: t("sign_up.validation.confirmPassword.mismatch"),
			path: ["confirmPassword"],
		});

type SignUpFormData = z.infer<ReturnType<typeof buildSignUpSchema>>;

export const SignUpForm: React.FC = () => {

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const { t } = useTranslation();
	const schema = buildSignUpSchema(t);
	const { lng } = useParams();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SignUpFormData>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const { mutateAsync, isSuccess, isPending, error } = useRegister();

	const onSubmit = async (data: SignUpFormData) => {
		try {
			await mutateAsync(data);
			reset();
		} catch (err) {
			console.error("Registration failed:", err);
		}
	};

	return (
		<div className="space-y-6">
			{isSuccess && (
				<div className="flex items-center gap-2 p-4 text-sm text-green-800 bg-green-100 rounded-lg">
					<svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<div>{t("sign_up.message_success")}</div>
				</div>
			)}

			{error && (
				<div className="flex items-center gap-2 p-4 text-sm text-red-800 bg-red-100 rounded-lg">
					<svg className="w-5 h-5 text-red-600"
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="none" >
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 9v2m0 4h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<div>{t("sign_up.message_error")}</div>
				</div>
			)
			}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-6 [&:dir(rtl)]:dir-rtl"
			>
				{/* Name Field */}
				<div className="space-y-2 ">
					<label
						htmlFor="full_name"
						className="block text-sm font-medium text-gray-700"
					>
						{t("sign_up.full_name")}
						<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 rtl:left-auto rtl:right-3" />
						<input
							id="full_name"
							type="text"
							placeholder={t("sign_up.enter_name")}
							className={`w-full px-4 py-3 pl-12 rtl:pl-4 rtl:pr-12 rounded-lg border border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none
        ${errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
							{...register("name")}
						/>
					</div>
					{errors.name && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span> {errors.name.message}
						</p>
					)}
				</div>

				{/* Email Field */}
				<div className="space-y-2">
					<label
						htmlFor="email_address"
						className="block text-sm font-medium text-gray-700"
					>
						{t("sign_up.email_address")}
						<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5  rtl:left-auto rtl:right-3" />
						<input
							id="email_address"
							type="email"
							placeholder={t("sign_up.enter_email")}
							className={`
                 w-full px-4 py-3 pl-12 rounded-lg rtl:pl-4 rtl:pr-12 border border-gray-300  focus:border-purple-200  focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none
                ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              `}
							{...register("email")}
						/>
					</div>
					{errors.email && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>
							{errors.email.message}
						</p>
					)}
				</div>

				{/* Password Field */}
				<div className="space-y-2">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						{t("sign_up.password")}
						<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<Lock className="  rtl:left-auto rtl:right-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder={t("sign_up.enter_password")}
							className={` w-full px-4 py-3 pl-12 rounded-lg rtl:pl-4 rtl:pr-12 border border-gray-300  focus:border-purple-200  focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none
                ${errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              `}
							{...register("password")}
						/>
						<button
							 type="button" aria-label="Show password"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
						>
							{showPassword ? (
								<EyeOff className="h-5 w-5" />
							) : (
								<Eye className="h-5 w-5" />
							)}
						</button>
					</div>
					{errors.password && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>
							{errors.password.message}
						</p>
					)}
				</div>

				{/* Confirm Password Field */}
				<div className="space-y-2">
					<label
						htmlFor="confirm-password"
						className="block text-sm font-medium text-gray-700"
					>
						{t("sign_up.confirm_password")}
						<span className="text-red-500 ml-1">*</span>
					</label>
					<div className="relative">
						<Shield className=" rtl:left-auto rtl:right-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
						<input
							id="confirm-password"
							type={showConfirmPassword ? "text" : "password"}
							placeholder={t("sign_up.enter_confirm_password")}
							className={` w-full px-4 py-3 pl-12 rounded-lg rtl:pl-4 rtl:pr-12 border border-gray-300  focus:border-purple-200  focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none
                ${errors.confirmPassword ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              `}
							{...register("confirmPassword")}
						/>
						<button
							 type="button" aria-label="Show password"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
						>
							{showConfirmPassword ? (
								<EyeOff className="h-5 w-5" />
							) : (
								<Eye className="h-5 w-5" />
							)}
						</button>
					</div>
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>
							{errors.confirmPassword.message}
						</p>
					)}
				</div>

				{/* Terms and Conditions */}
				<div className="space-y-2">
					<div className="flex items-center gap-3">
						<input
							type="checkbox"
							id="acceptTerms"
							className={`
    mt-1 h-5 w-5
    appearance-none
    border-2 border-purple-400
    rounded
    focus:ring-2 focus:ring-purple-300
    checked:border-purple-600
    checked:bg-[url("data:image/svg+xml,%3Csvg%20viewBox='0%200%2016%2016'%20fill='none'%20stroke='%236b21a8'%20stroke-width='3'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline%20points='3.5%208.5%206.5%2011.5%2012.5%204.5'/%3E%3C/svg%3E")]
    bg-no-repeat bg-center bg-transparent
    transition-all duration-150
    ${errors.acceptTerms ? "border-red-500 focus:ring-red-400" : ""}
  `}
							{...register("acceptTerms")}
						/>

						<label htmlFor="acceptTerms" className="text-sm text-gray-700">
							{t("sign_up.terms")}{" "}
							<a
								href="/terms-and-conditions"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[linear-gradient(100.93deg,_#9A7FEC_44.05%,_#FEBADF_64.81%)]  bg-clip-text text-transparent font-medium underline"
							>
								{t("sign_up.terms_conditions")}
							</a>
							<span className="text-red-500 ml-1">*</span>
						</label>
					</div>
					{errors.acceptTerms && (
						<p className="text-red-500 text-sm flex items-center gap-1">
							<span className="text-xs">⚠</span>
							{errors.acceptTerms.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit" aria-label="creating account"
					className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full"
					disabled={isPending}
				>
					{isPending ? `${t("sign_up.creating_account")}` : `${t("sign_up.create_account")}`}
				</button>

				{/* Login Link */}
				<div className="text-center">
					<p className="text-sm text-gray-600">
						{t("sign_up.already_have_an_account")}{" "}
						<Link
							to={`/${lng}/sign-in`}
							className="bg-[linear-gradient(100.93deg,_#9A7FEC_44.05%,_#FEBADF_64.81%)]  bg-clip-text text-transparent font-medium underline"
						>
							{t("sign_up.sign_in_here")}
						</Link>
					</p>
				</div>
			</form>
		</div >
	);
};
