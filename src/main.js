import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		currentColor: "#FB6107"
	}
});

export default app;