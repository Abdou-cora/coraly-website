import axios, {
	type AxiosError,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
	type AxiosInstance,
} from "axios";
import { TOKEN_KEY } from "../../constants";

// Payment API instance
const paymentApi = axios.create({
	baseURL: import.meta.env.VITE_PUBLIC_PAYMENT_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Main API instance
const mainApi = axios.create({
	baseURL: import.meta.env.VITE_PUBLIC_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

const addAuthInterceptor = (apiInstance: AxiosInstance) => {
	apiInstance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			const token = localStorage.getItem(TOKEN_KEY);
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		},
	);

	apiInstance.interceptors.response.use(
		(response: AxiosResponse) => response,
		(error: AxiosError) => {
			// Handle common errors
			if (error.response?.status === 401) {
				// Handle unauthorized access
				localStorage.removeItem(TOKEN_KEY);
			}
			return Promise.reject(error);
		},
	);
};

// Add auth interceptors to both instances
addAuthInterceptor(paymentApi);
addAuthInterceptor(mainApi);

export { paymentApi, mainApi };
export default paymentApi;
