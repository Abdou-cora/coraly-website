import type { routing } from "@/i18n/routing";

export type IconProps = React.HTMLAttributes<SVGElement>;

export type PropertyStatus =
	| "For Sale"
	| "For Rent"
	| "Sold"
	| "New"
	| "Featured";

export interface Property {
	id: string;
	images: string[];
	price: number;
	address: string;
	bedrooms: number;
	bathrooms: number;
	squareFeet: number;
	status: PropertyStatus;
	description?: string;
	yearBuilt?: number;
	new?: boolean;
}

export type FeatureProps = {
	id: string;
	title: string;
};

export type Direction = "rtl" | "ltr";

export type FaqItem = {
	question: string;
	answer: string;
};

////////////////////////////////////////////////////////////
export interface ImageData {
	id: string;
	originalImage: string;
	enhancedImage: string;
	progress: number;
}

export interface SliderProps {
	images: ImageData[];
	startIndex?: number;
	onSlide?: (index: number) => void;
}

export interface ProgressBarProps {
	progress: number;
}

export interface ThumbnailItemProps {
	image: ImageData;
}

export interface ImageComparisonSliderProps {
	beforeImage: string;
	afterImage: string;
}

export interface PhotoEditAction {
	id: string;
	titleKey: string;
	icon: React.ComponentType<{ className?: string }>;
}

export interface ImageVariant {
	id: string;
	src: string;
	alt: string;
	title: string;
}

export interface StyleSelectorProps {
	selectedStyle: string;
	styles: string[];
	onStyleChange: (style: string) => void;
	showDropdown: boolean;
	onToggleDropdown: (show: boolean) => void;
}

export interface PropertyStyle {
	name: string;
	images: ImageVariant[];
}

export interface SeamlessIntegrationItem {
	number?: number;
	icon?: React.ReactNode;
	titleKey: string;
	descriptionKey: string;
}

export interface ComprehensiveTestimonials {
	id: string;
	name: string;
	slug: string;
	rating: number;
	testimonial: string;
	image: string;
	position: string;
	company: string;
}

export interface PageSEOProps {
	title: string;
	description?: string;
	image?: string;
	locale: string;
	[key: string]: unknown;
}

export type Locale = (typeof routing.locales)[number];

export type Params = Promise<{
	locale: Locale;
	id?: string;
}>;
