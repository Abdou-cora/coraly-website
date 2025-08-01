import { TOKEN_KEY } from "../../constants";
import { mainApi } from "../config";
import { AxiosError } from  "axios";

export interface Account {
	id: string;
	email: string;
	name?: string;
}

export interface RegisterCredentials {
	email: string;
	password: string;
	name: string;
}

export interface AuthResponse {
	token: string;
	account: Account;
}

export interface ApiResponse<T> {
	data: T;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

// Register user
export async function register(
	credentials: RegisterCredentials,
): Promise<boolean> {
	try {
		const response = await mainApi.post<ApiResponse<AuthResponse>>(
			"/accounts",
			credentials,
		);

		return response.status === 201;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("Failed to register user");
	}
}

export async function verifyToken(): Promise<Account> {
	try {
		const response = await mainApi.get<Account>("/check-token");
		return response.data;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Token verification failed: ${error.message}`);
		}
		throw new Error("Token verification failed");
	}
}

export function getToken(): string | null {
	return localStorage.getItem(TOKEN_KEY);
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
	return !!getToken();
}

export async function verifyEmail(token: string): Promise<AuthResponse> {
	try {
		const response = await mainApi.post<AuthResponse>("/verify_email", {
			token,
		});
		return response.data;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(
				`Email verification failed: ${error.response?.data?.message || error.message}`,
			);
		}
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("Email verification failed");
	}
}

export async function login(
	credentials: LoginCredentials,
): Promise<AuthResponse> {
	try {
		const response = await mainApi.post<AuthResponse>("/login", credentials);
		return response.data;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(
				`Login failed: ${error.response?.data?.message || error.message}`,
			);
		}
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("Login failed");
	}
}
