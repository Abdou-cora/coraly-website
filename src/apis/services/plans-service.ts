import { Subscription } from "../../types/plans";
import { paymentApi } from "../config";

export interface PlansResponse {
	agent: Subscription[];
	agencies: Subscription[];
}

export interface SubscriptionsResponse {
	data: {
		agent: Subscription[];
		agencies: Subscription[];
	};
	message?: string;
}

export interface UserSubscription {
	subscriptionId: string;
	plan: string;
	productName: string;
	status: string;
	createdAt: Date;
}

export interface UserSubscriptionsResponse {
	hasActiveSubscription: boolean;
	subscriptions: UserSubscription[];
}

export interface ApiError {
	message: string;
	status?: number;
}

//  all plans
export const fetchPlans = async (): Promise<PlansResponse> => {
	try {
		const response =
			await paymentApi.get<SubscriptionsResponse>("/subscriptions");
		return {
			agent: response.data.data.agent,
			agencies: response.data.data.agencies,
		};
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to fetch plans";
		const axiosError = error as { response?: { data?: { message?: string } } };
		throw new Error(axiosError.response?.data?.message || errorMessage);
	}
};

// Fetch user subscriptions
export const fetchUserSubscriptions =
	async (): Promise<UserSubscriptionsResponse> => {
		try {
			const response = await paymentApi.get<{
				data: UserSubscriptionsResponse;
			}>("/subscriptions/user/active");
			return response.data.data;
		} catch (error: unknown) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "Failed to fetch user subscriptions";
			const axiosError = error as {
				response?: { data?: { message?: string } };
			};
			throw new Error(axiosError.response?.data?.message || errorMessage);
		}
	};

// Subscription interfaces
export interface CreateSubscriptionRequest {
	planId: string;
	amount: number;
	currency: string;
	couponId?: string;
	customerEmail?: string;
	customerName?: string;
}

export interface SubscriptionResponse {
	data: {
		subscriptionId: string;
		clientSecret?: string;
		status: string;
		requiresPaymentConfirmation: boolean;
	};
}

export interface SubscriptionData {
	subscriptionId: string;
	clientSecret?: string;
	status: string;
	requiresPaymentConfirmation: boolean;
}
export interface CreateSetupIntentRequest {
	accountId: string;
	customerEmail: string;
	customerName: string;
}

export interface SetupIntentResponse {
	data: {
		clientSecret: string;
		setupIntentId: string;
	};
}

export interface SetupIntentData {
	clientSecret: string;
	setupIntentId: string;
}

export const createSubscription = async (
	params: CreateSubscriptionRequest,
): Promise<SubscriptionData> => {
	try {
		const response = await paymentApi.post<SubscriptionResponse>(
			"/subscriptions/create",
			params,
		);

		if (!response.data) {
			throw new Error("Failed to create subscription");
		}

		return response.data.data;
	} catch (error: unknown) {
		// Add logging or transform the error
		console.error("Subscription creation failed:", error);

		if (error instanceof Error) {
			throw new Error(`Subscription creation failed: ${error.message}`);
		}
		throw new Error("Failed to create subscription");
	}
};

export const createSetupIntent = async (
	params: CreateSetupIntentRequest,
): Promise<SetupIntentData> => {
	try {
		const response = await paymentApi.post<SetupIntentResponse>(
			"/subscriptions/setup-intent",
			params,
		);

		if (!response.data) {
			throw new Error("Failed to create setup intent");
		}

		return response.data.data;
	} catch (error: unknown) {
		// Add logging or transform the error
		console.error("Setup intent creation failed:", error);

		if (error instanceof Error) {
			throw new Error(`Setup intent creation failed: ${error.message}`);
		}
		throw new Error("Failed to create setup intent");
	}
};
