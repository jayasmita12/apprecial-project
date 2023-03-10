<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { isDark } from '$lib/stores/globalStore';
	import ScrollSmoother from "$lib/script/gsap/ScrollSmoother";
	import gsap from "gsap"

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			if (theme == 'dark') $isDark = true;
		} else {
			const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');
			if (browserTheme.matches) {
				$isDark = true;
				localStorage.setItem('theme', 'dark');
			}
		}

		gsap.registerPlugin(ScrollSmoother);
		ScrollSmoother.create({
			wrapper:"#smooth-wrapper",
			content:"#smooth-content",
			smooth:1,
			effects: true,  
			smoothTouch: 0.1,  
		})
	});
</script>

<main class="bg-primary rounded-2xl" id="smooth-wrapper">
	<div id="smooth-content">
		<div>
			<Nav />
		</div>
		<div>
			<slot />
		</div>
		<div >
			<Footer />
		</div>
	</div>
</main>
