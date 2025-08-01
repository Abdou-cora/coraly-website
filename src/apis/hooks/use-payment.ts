import { useMutation } from "@tanstack/react-query";
import {
	type CreateSetupIntentRequest,
	type CreateSubscriptionRequest,
	createSetupIntent,
	createSubscription,
} from "../services/plans-service";

export const useCreateSubscription = () => {
	return useMutation({
		mutationFn: async (params: CreateSubscriptionRequest) => {
			try {
				return await createSubscription(params);
			} catch (error: unknown) {
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				throw new Error(`Failed to create subscription: ${errorMessage}`);
			}
		},
		onError: (error: Error) => {
			console.error("Subscription creation error:", error);
		},
		retry: false,
	});
};

export const useCreateSetupIntent = () => {
	return useMutation({
		mutationFn: async (params: CreateSetupIntentRequest) => {
			try {
				return await createSetupIntent(params);
			} catch (error: unknown) {
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				throw new Error(`Failed to create setup intent: ${errorMessage}`);
			}
		},
	});
};
