import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	login,
	register,
	verifyEmail,
	verifyToken,
} from "../services/auth-service";
import { TOKEN_KEY } from "../../constants";

export const useVerifyToken = () => {
	return useQuery({
		queryKey: ["account"],
		queryFn: verifyToken,
	});
};

export const useRegister = () => {
	return useMutation({
		mutationFn: register,
		onError: (error: Error) => {
			console.error("Registration failed:", error.message);
		},
	});
};

export const useVerifyEmail = () => {
	return useMutation({
		mutationFn: verifyEmail,
		onSuccess: (data) => {
			localStorage.setItem(TOKEN_KEY, data.token);
		},
		onError: (error: Error) => {
			console.error("Email verification failed:", error.message);
		},
	});
};

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			localStorage.setItem(TOKEN_KEY, data.token);
			queryClient.invalidateQueries({ queryKey: ["account"] });

			window.location.href = "https://dash.coralytics.com/properties";
		},
		onError: (error: Error) => {
			console.error("Login failed:", error.message);
		},
	});
};
