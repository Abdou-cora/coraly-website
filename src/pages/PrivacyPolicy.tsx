import React from 'react';
import { Shield, Eye, Users, Lock, Globe, Baby, RefreshCw, Mail, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const PrivacySection = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl mr-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export function PrivacyPolicy() {


  const { t } = useTranslation();

  return (

    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 `}>

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('privacy_policy.title')}
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {t('privacy_policy.subtitle')}
            </p>
            <div className="mt-8 flex items-center justify-center text-purple-200">
              <RefreshCw className="w-5 h-5 mr-2" />
              <span>{t('privacy_policy.lastUpdated')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">

          {/* Introduction */}
          <PrivacySection icon={Eye} title={t('privacy_policy.sections.introduction.title')}>
            <p>{t('privacy_policy.sections.introduction.content')}</p>
          </PrivacySection>

          {/* Information We Collect */}
          <PrivacySection icon={Users} title={t('privacy_policy.sections.informationWeCollect.title')}>
            <p>{t('privacy_policy.sections.informationWeCollect.content')}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-3">
                  {t('privacy_policy.sections.informationWeCollect.pii.title')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('privacy_policy.sections.informationWeCollect.pii.description')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-3">
                  {t('privacy_policy.sections.informationWeCollect.npii.title')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('privacy_policy.sections.informationWeCollect.npii.description')}
                </p>
              </div>
            </div>
          </PrivacySection>

          {/* How We Use Information */}
          <PrivacySection icon={Lock} title={t('privacy_policy.sections.howWeUse.title')}>
            <p>{t('privacy_policy.sections.howWeUse.content')}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[0, 1, 2].map((index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{t(`privacy_policy.sections.yourChoices.choices.${index}`)}</span>
                </div>
              ))}
            </div>
          </PrivacySection>

          {/* How We Share Information */}
          <PrivacySection icon={Users} title={t('privacy_policy.sections.howWeShare.title')}>
            <div className="space-y-4">
              <p>{t('privacy_policy.sections.howWeShare.content')}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800">
                  {t('privacy_policy.sections.howWeShare.legal')}
                </p>
              </div>
            </div>
          </PrivacySection>

          {/* Your Choices */}
          <PrivacySection icon={RefreshCw} title={t('privacy_policy.sections.yourChoices.title')}>
            <p>{t('privacy_policy.sections.yourChoices.content')}</p>
            <div className="space-y-3 mt-6">
              {[0, 1, 2].map((index: number) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-green-500 w-3 h-3 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-700">{t(`privacy_policy.sections.yourChoices.choices.${index}`)}</span>
                </div>
              ))}
            </div>
          </PrivacySection>

          {/* Data Security */}
          <PrivacySection icon={Shield} title={t('privacy_policy.sections.dataSecurity.title')}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
              <p>{t('privacy_policy.sections.dataSecurity.content')}</p>
            </div>
          </PrivacySection>

          {/* International Transfers */}
          <PrivacySection icon={Globe} title={t('privacy_policy.sections.internationalTransfers.title')}>
            <p>{t('privacy_policy.sections.internationalTransfers.content')}</p>
          </PrivacySection>

          {/* Children's Privacy */}
          <PrivacySection icon={Baby} title={t('privacy_policy.sections.childrensPrivacy.title')}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-800">
                {t('privacy_policy.sections.childrensPrivacy.content')}
              </p>
            </div>
          </PrivacySection>

          {/* Changes to Policy */}
          <PrivacySection icon={RefreshCw} title={t('privacy_policy.sections.changesToPolicy.title')}>
            <p>{t('privacy_policy.sections.changesToPolicy.content')}</p>
          </PrivacySection>

          {/* Contact Us */}
          <PrivacySection icon={Mail} title={t('privacy_policy.sections.contactUs.title')}>
            <div className="text-center">
              <p className="mb-6">{t('privacy_policy.sections.contactUs.content')}</p>
              <a
                href={`mailto:${t('privacy_policy.sections.contactUs.email')}`}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('privacy_policy.sections.contactUs.email')}
              </a>
            </div>
          </PrivacySection>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('privacy_policy.footer.company')}</h3>
            <p className="text-gray-600 mb-4">{t('privacy_policy.footer.tagline')}</p>
            <p className="text-sm text-gray-500">
              <strong>{t('privacy_policy.footer.dateLabel')}</strong> December 25, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

