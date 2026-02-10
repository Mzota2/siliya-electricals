export interface SiteConfig {
  appTitle: string;
  appDescription: string;
  brandImageUrl?: string;
  defaultBusinessName?: string;
  defaultContactEmail?: string;
  defaultContactPhone?: string;
  appUrl?: string;
  // Developer contact details for escalations (admins → developers)
  developerSupportEmail?: string;
  developerSupportPhone?: string;
  developerSupportName?: string;
  // AI support display information
  aiSupportName?: string;
  aiSupportDescription?: string;
}

export const SITE_CONFIG: SiteConfig = {
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || 'Siliya Electricals',
  appDescription:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Your trusted partner for quality electrical solutions, appliances, and expert services. Powering homes and businesses with reliability, safety, and innovation.',
  brandImageUrl:
    process.env.NEXT_PUBLIC_BRAND_IMAGE_URL || 'https://siliya-electricals.vercel.app/logo.png',
  defaultBusinessName: process.env.NEXT_PUBLIC_DEFAULT_BUSINESS_NAME || 'Siliya Electricals',
  defaultContactEmail: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_EMAIL || 'hie@siliya-electricals.techcure.tech',
  defaultContactPhone: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_PHONE || '+265 981 819 389',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://siliya-electricals.vercel.app',
  developerSupportEmail: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_EMAIL || 'support@techcure.tech',
  developerSupportName: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_NAME || 'TechCure Support',
  developerSupportPhone: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_PHONE || '+265 981 819 389',
  // AI support show name & description when present
  aiSupportName: process.env.NEXT_PUBLIC_AI_SUPPORT_NAME || 'AI Support',
  aiSupportDescription: process.env.NEXT_PUBLIC_AI_SUPPORT_DESCRIPTION || 'Automated assistance — responses are suggestions. Use Request human support for help.',
};
