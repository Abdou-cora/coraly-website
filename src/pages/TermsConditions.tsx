import { CheckCircle, FileText, Mail, Shield, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TermsCondition() {

  const { t } = useTranslation();

	return (
		<>
			<header className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 shadow-lg border-b border-gray-100">
				<div className="container mx-auto px-4 py-12">
					<div className="text-center max-w-4xl mx-auto">
						<div className="flex justify-center mb-6">
							<div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg">
								<FileText className="w-12 h-12 text-white" />
							</div>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
							{t("terms_condition.header_terms_conditions")}
						</h1>
						<p className="text-xl text-white mb-8 leading-relaxed">
							{t("terms_condition.description_terms")}
						</p>
						<a
							href="/login"
							className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
						>
							{t("terms_condition.get_started")}
						</a>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 py-16">
				<div className="flex flex-col lg:flex-row gap-12">
					<div className="lg:w-2/3">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										1
									</span>
									{t("terms_condition.introduction")}
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg">
									{t("terms_condition.desc_introduction")}
								</p>
							</div>

							{/* Section 2 */}
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										2
									</span>
									{t("terms_condition.Acceptance_Terms")}
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg">
									{t("terms_condition.accessing_or_using_services")}
								</p>
							</div>

							{/* Section 3 */}
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										3
									</span>
									{t("terms_condition.account_registration_use")}
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg">
									{t("terms_condition.access_certain_features_of_services")}
								</p>
							</div>

							{/* Section 4 */}
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										4
									</span>
									{t("terms_condition.user_content")}
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg">
									{t("terms_condition.services_may_allow_you_to_submit")}
								</p>
							</div>

							{/* Section 5 */}
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										5
									</span>
									{t("terms_condition.prohibited_content_activities")}
								</h3>
								<div className="space-y-4">
									{[
										"uploading_posting_transmitting",
										"impersonating_person_entity",
										"interfering_with_disrupting",
										"using_the_ervices_to_exploit",
										"violating_any_intellectual_property",
										"attempting_to_gain_unauthorized",
									].map((key) => (
										<div key={key} className="flex items-start gap-3">
											<CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
											<p className="text-gray-700 leading-relaxed">{t(key)}</p>
										</div>
									))}
								</div>

								<p className="text-gray-700 leading-relaxed text-lg mt-6">
									{t("terms_condition.reserve_the_right_to_terminate")}
								</p>
							</div>

							{/* Remaining Sections */}
							{[
								{
									number: 6,
									titleKey: "intellectual_property",
									contentKey: "the_services_and_their_content",
								},
								{
									number: 7,
									titleKey: "disclaimer_of_warranties",
									contentKey: "the_services_are_provided",
								},
								{
									number: 8,
									titleKey: "limitation_of_liability",
									contentKey: "the_maximum_extent_permitted",
								},
								{
									number: 9,
									titleKey: "indemnification",
									contentKey: "you_agree_to_indemnify_and_hold_us_harmless",
								},
								{
									number: 10,
									titleKey: "governing_law_and_dispute",
									contentKey: "terms_shall_be_governed",
								},
								{
									number: 11,
									titleKey: "entire_agreement",
									contentKey: "terms_constitute_the_entire_agreement",
								},
								{
									number: 12,
									titleKey: "amendments",
									contentKey: "we_reserve_the_right_to_amend",
								},
							].map((section) => (
								<div key={section.number} className="mb-12">
									<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
										<span
											className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
										>
											{section.number}
										</span>
										{section.number}. {t(section.titleKey as string)}
									</h3>
									<p className="text-gray-700 leading-relaxed text-lg">
										{t(section.contentKey as string)}
									</p>
								</div>
							))}

							{/* Contact Section */}
							<div className="mb-12">
								<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
									<span
										className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold rtl:ml-4 ltr:mr-4`}
									>
										13
									</span>
									{t("terms_condition.contact_us")}
								</h3>
								<p className="text-gray-700 leading-relaxed text-lg mb-4">
									{t("terms_condition.if_you_have_any_questions_about_these")}
								</p>
								<a
									href="mailto:info@coralytics.com"
									className={`text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors duration-200 flex items-center rtl:flex-row-reverse`}
								>
									<Mail className={`w-5 h-5 rtl:ml-2 ltr:mr-2`} />
									info@coralytics.com
								</a>
							</div>

							{/* Last Update */}
							<div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
								<p className="text-gray-700 leading-relaxed text-lg">
									<strong className="font-semibold text-purple-900">
										{t("terms_condition.date_of_last_update")}
									</strong>{" "}
									December 25, 2023
								</p>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:w-1/3 space-y-8">
						{/* CTA Card 1 */}
						<div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
							<div className="text-center">
								<Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
								<h3 className="text-2xl font-bold mb-4">
									{t("terms_condition.header_terms_conditions")}
								</h3>
								<p className="text-purple-100 mb-6 leading-relaxed">
									{t("terms_condition.description_terms")}
								</p>
								<a
									href="/login"
									className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
								>
									{t("terms_condition.get_started")}
								</a>
							</div>
						</div>

						{/* CTA Card 2 */}
						<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
							<div className="text-center">
								<div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Star className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{t("terms_condition.increase_your_roi_with")}
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									{t("terms_condition.let_s_talk_to_us")}
								</p>
								<a
									href="/login"
									className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
								>
									{t("terms_condition.get_started")}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
