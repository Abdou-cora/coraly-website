export const TOKEN_KEY = "usertoken";

// Currency formatting utility
export const formatCurrency = (
	amount: number | null | undefined,
	currency = "USD",
): string => {
	try {
		const safeAmount = amount ?? 0;
		const safeCurrency = currency || "USD";
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: safeCurrency,
		}).format(safeAmount);
	} catch (_) {
		// Fallback to simple formatting if Intl fails
		return `${currency || "USD"} ${(amount ?? 0).toFixed(2)}`;
	}
};

// Get currency symbol
export const getCurrencySymbol = (currency = "USD"): string => {
	return (
		new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currency,
		})
			.formatToParts(0)
			.find((part) => part.type === "currency")?.value || "$"
	);
};
