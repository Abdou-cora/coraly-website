import { type UseQueryOptions, useQuery } from "@tanstack/react-query";
import {
	type PlansResponse,
	type UserSubscriptionsResponse,
	fetchPlans,
	fetchUserSubscriptions,
} from "../services/plans-service";

// Query keys for React Query
export const planKeys = {
	all: ["subscriptions"] as const,
	lists: () => [...planKeys.all, "list"] as const,
	details: () => [...planKeys.all, "detail"] as const,
	detail: (id: string) => [...planKeys.details(), id] as const,
};

export const userSubscriptionKeys = {
	all: ["user-subscriptions"] as const,
	lists: () => [...userSubscriptionKeys.all, "list"] as const,
	details: () => [...userSubscriptionKeys.all, "detail"] as const,
	detail: (id: string) => [...userSubscriptionKeys.details(), id] as const,
};

// Hook to fetch all plans
export const usePlans = (
	options?: Omit<UseQueryOptions<PlansResponse, Error>, "queryKey" | "queryFn">,
) => {
	return useQuery({
		queryKey: planKeys.lists(),
		queryFn: fetchPlans,
		...options,
	});
};

// Hook to fetch user subscriptions
export const useUserSubscriptions = (
	options?: Omit<
		UseQueryOptions<UserSubscriptionsResponse, Error>,
		"queryKey" | "queryFn"
	>,
) => {
	return useQuery({
		queryKey: userSubscriptionKeys.lists(),
		queryFn: fetchUserSubscriptions,
		...options,
	});
};
