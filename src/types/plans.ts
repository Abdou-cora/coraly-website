export type Subscription = {
	plan: string;
	priceId: string;
	name: string;
	description: string | null;
	interval: "day" | "week" | "month" | "year";
	price: SubscriptionPrices;
	priceType: "per_unit" | "tiered";
	features?: string[];
};

export type SubscriptionPrices = {
	currency: string;
	amount: number | null;
};

export interface CheckoutData {
	email: string;
	fullName: string;
	country: string;
	postalCode: string;
}

export interface CouponValidationRequest {
	code: string;
	planId: string;
	amount: number;
}

export interface CouponValidationResponse {
	success: boolean;
	data: {
		couponId: string;
		originalAmount: number;
		discountAmount: number;
		finalAmount: number;
		discountType: "percentage" | "fixed";
		discountValue: number;
		code: string;
		description?: string;
		valid: boolean;
		message?: string;
	};
	message?: string;
}

export interface AppliedCoupon {
	couponId: string;
	code: string;
	discount: number;
	type: "percentage" | "fixed";
	discountValue: number;
	description?: string;
	originalAmount?: number;
	finalAmount?: number;
}

export interface PricingBreakdown {
	subtotal: number;
	couponDiscount: number;
	planDiscount: number;
	tax: number;
	total: number;
}
