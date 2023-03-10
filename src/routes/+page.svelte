<script>
	import Hero from '$lib/components/Hero.svelte';
	import Werugo from '$lib/components/Werugo.svelte';
	import Structure from '$lib/components/Structure.svelte';
	import About from '../lib/components/About.svelte';
	import OurProduct from '$lib/components/OurProduct.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import gsap from "gsap"
	import ScrollSmoother from "$lib/script/gsap/ScrollSmoother";
	import ScrollToPlugin from '$lib/script/gsap/ScrollToPlugin';
	import { onMount } from 'svelte';
	onMount(()=>{
		//gsap smooth scroll
		gsap.registerPlugin(ScrollSmoother,ScrollToPlugin);
		ScrollSmoother.create({
			wrapper:"#smooth-wrapper",
			content:"#smooth-content",
			smooth:1,
			effects: true,  
			smoothTouch: 0.1,  
		})
	})
</script>

<div class="bg-primary min-h-screen" id="smooth-wrapper">
	<div id="smooth-content">
		<div>
			<Hero />
		</div>
	
		<div class="relative z-10 ">
			<About />
			<Structure />
	
			<div
				class="absolute -z-10 top-[32%] h-[38rem] w-full bg-gradient-to-b from-primary-content/10 to-transparent"
			/>
		</div>
		<div class="bg-secondary relative overflow-hidden">
			<OurProduct/>
		</div>
		<div
			style="background: linear-gradient(101.14deg, #000000 0%, rgba(0, 0, 0, 0.83) 100%);"
		>
			<Werugo />
		</div>
	
		<div class="bg-secondary sectiontime">
			<Timeline/>
		</div>
	</div>
</div>
