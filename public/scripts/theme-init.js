(() => {
	const root = document.documentElement;
	let resolved = "light";
	try {
		const cookieValue = document.cookie
			.split("; ")
			.find((row) => row.startsWith("theme="))
			?.split("=")[1];
		const stored =
			cookieValue === "light" ||
			cookieValue === "dark" ||
			cookieValue === "system"
				? cookieValue
				: "system";
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		if (stored === "system") {
			resolved = prefersDark ? "dark" : "light";
		} else {
			resolved = stored;
		}
	} catch (_e) {
		// cookie access may be blocked in some environments
	}
	root.dataset.mode = resolved;
	root.style.colorScheme = resolved;
})();
