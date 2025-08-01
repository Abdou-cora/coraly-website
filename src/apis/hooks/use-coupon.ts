import { useMutation } from "@tanstack/react-query";
import {
	type ValidateCouponParams,
	validateCoupon,
} from "../services/coupon-service";

export const useCouponValidation = () => {
	return useMutation({
		mutationFn: async (params: ValidateCouponParams) => {
			try {
				return await validateCoupon(params);
			} catch (error: unknown) {
				// Convert any error to a proper Error object
				const errorMessage =
					error instanceof Error ? error.message : "Failed to validate coupon";
				throw new Error(errorMessage);
			}
		},
		onError: (error: Error) => {
			console.error("Coupon validation error:", error);
		},
		retry: false, // Don't retry on failure
	});
};
