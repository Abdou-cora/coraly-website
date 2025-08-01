
import { CouponValidationResponse, PricingBreakdown } from "../../types/plans";
import { paymentApi } from "../config";

export interface ValidateCouponParams {
	couponCode: string;
	amount: number;
}

export interface CalculatePricingParams {
	planPrice: number;
	planDiscount?: number;
	appliedCoupon?: {
		couponId: string;
		code: string;
		discount: number;
		type: "percentage" | "fixed";
		discountValue: number;
		originalAmount?: number;
		finalAmount?: number;
	} | null;
}

export const validateCoupon = async (
	params: ValidateCouponParams,
): Promise<CouponValidationResponse> => {
	try {
		const response = await paymentApi.post<CouponValidationResponse>(
			"/coupons/check",
			params,
		);
		return response.data;
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to validate coupon";
		const axiosError = error as { response?: { data?: { message?: string } } };
		throw new Error(axiosError.response?.data?.message || errorMessage);
	}
};

// Calculate pricing breakdown
export const calculatePricing = (
	params: CalculatePricingParams,
): PricingBreakdown => {
	const { planPrice, planDiscount = 0, appliedCoupon } = params;

	// Calculate plan discount
	const planDiscountAmount = planPrice * (planDiscount / 100);
	const subtotalAfterPlanDiscount = planPrice - planDiscountAmount;

	// Calculate coupon discount
	let couponDiscount = 0;
	if (appliedCoupon) {
		// If we have the final amount from the API, use it directly
		if (
			appliedCoupon.finalAmount !== undefined &&
			appliedCoupon.originalAmount !== undefined
		) {
			couponDiscount = appliedCoupon.originalAmount - appliedCoupon.finalAmount;
		} else {
			// Fallback to the old calculation method
			if (appliedCoupon.type === "percentage") {
				couponDiscount =
					subtotalAfterPlanDiscount * (appliedCoupon.discount / 100);
			} else {
				couponDiscount = Math.min(
					appliedCoupon.discount,
					subtotalAfterPlanDiscount,
				);
			}
		}
	}

	// Calculate final subtotal
	const subtotal = subtotalAfterPlanDiscount - couponDiscount;

	// Calculate total (no tax for now)
	const total = subtotal;

	return {
		subtotal: planPrice,
		couponDiscount,
		planDiscount: planDiscountAmount,
		tax: 0, // No tax for now
		total,
	};
};
