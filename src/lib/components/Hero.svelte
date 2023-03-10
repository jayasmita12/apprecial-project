<script>
	import gsap from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	import { onMount } from 'svelte';
	let value = 'Improving Productivity, Enhancing Connectivity';
	onMount(() => {
		gsap.registerPlugin(TextPlugin);
		typeWritter();
	});
	const typeWritter = () => {
		gsap.to('#cursor', {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
			ease: 'power2.inOut'
		});

		let tl = gsap.timeline({ repeat: -1 });
		let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
		tlText.to('.title', { duration: 4, text: { value } });
		tl.add(tlText);
	};
</script>

<div class="max-w-small 2xl:max-w-large mt-10 mb-14 px-4 flex flex-col gap-y-16 sm:gap-y-0 mx-auto">
	<div
		class="flex sm:flex-row flex-col justify-between items-center space-x-0 lg:space-x-10  gap-y-8 sm:gap-y-0"
	>
		<div class="space-y-2  sm:space-y-5 w-full  order-last sm:order-fast">
			<div class="flex">
				<!-- svelte-ignore a11y-missing-content -->
				<h1
					class="title text-secondary-content  text-2xl lg:text-4xl xl:text-[50px] leading-normal lg:leading-relaxed font-bold xl:leading-normal "
				>
					<span class="h-[30px] lg:h-[50px] self-center w-1 bg-secondary-content " id="cursor" ></span>
				</h1>
			</div>
			<p class="text-secondary-content/60 text-base sm:text-lg font-normal ">
				Apprecial creates innovative digital products that make your day-to-day life more
				manageable.
			</p>
			<button class="flex  bg-primary-content px-4 py-[0.6rem] rounded-xl space-x-2 ">
				<span>
					<img src="hero/dashboard-white-logo.svg" class="mt-[7px]" alt="" />
				</span>
				<span class="text-white text-lg font-normal"> Dashboard </span>
			</button>
		</div>
		<div class=" flex justify-end order-fast sm:order-last ">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				src="hero/Apprecialweb_animation_Light.mp4"
				type="video/mp4"
				class="w-[65rem] 2xl:w-[70rem]  light-img"
				autoplay
				loop
				muted
				playsinline
			/>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				src="hero/Apprecialweb_animation_Dark.mp4"
				type="video/mp4"
				class="w-[65rem] 2xl:w-[70rem] dark-img"
				autoplay
				loop
				muted
				playsinline
			/>
		</div>
	</div>
	<a href="/"
		><center class="space-y-2">
			<img class="light-img animate animate-bounce w-8 sm:w-10" src="hero/explore.svg" alt="" />
			<img
				class="dark-img animate animate-bounce w-8 sm:w-10"
				src="hero/explore-white.svg"
				alt=""
			/>
			<p class="text-secondary-content  text-xs sm:text-sm">EXPLORE</p>
		</center></a
	>
</div>
