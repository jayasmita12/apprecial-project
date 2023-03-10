<script>
	import gsap from "gsap";
	import SplitText from '$lib/script/gsap/SplitText';
	import ScrollTrigger from '$lib/script/gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	onMount(()=>{
		gsap.registerPlugin(SplitText,ScrollTrigger);
		scroll()
	})

function scroll() {
	const quotes = document.querySelectorAll(".quote3");
  	quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 80%",
      },
	  duration: 0.6, scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:"back", stagger: 0.02
    });
  });
}
</script>


<div class="max-w-small 2xl:max-w-large px-4 mx-auto  lg:relative">
	<div class="flex flex-col lg:flex-row justify-between space-x-0  lg:space-x-32  w-full  py-0 lg:py-24">
		<div class="w-full lg:w-[59%]  self-center flex justify-center lg:justify-start lg:self-end lg:relative">
			<img
				src="werugo/mobile2.png"
				class="w-[20rem] shadow relative -top-32 lg:absolute lg:-top-[42.6rem] bottom-0  border-4 border-black  
				rounded-[2.5rem] outline outline-2 outline-offset-0 outline-white card-shadow"
				alt=""
			/>
		</div>
		<div class="space-y-5 w-full relative -top-20 lg:top-0 self-end ">
			<div class="flex space-x-2 sm:space-x-4">
				<img src="werugo/werugo-logo.svg" class="w-8 sm:w-12" alt="" />
				<h1 class="text-white text-2xl sm:text-[42px] self-center font-semibold">Werugo</h1>
			</div>
			<p class="quote3 text-white/70 font-normal text-sm sm:text-lg  sm:w-[25rem]">
				A ground-breaking device tracker application for iOS and Android devices, Werugo offers
				advanced features such as voice-activated device location, real-time tracking, and remote
				control capabilities, making it reliable for ensuring security. It's like having a personal
				assistant for your devices, minus the coffee runs.
			</p>
			<button class="bg-primary-content  px-4 py-[0.6rem] rounded-xl">
				<span class="text-white text-lg font-normal">Learn more</span>
			</button>
			<div class="flex sm:flex-row flex-col space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 ">
				<a href="/"><img src="werugo/playstore.svg" alt="" /></a>
				<a href="/">
					<button
						class="flex space-x-3 border-base-200 justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"
					>
						<div>
							<img src="werugo/apple.svg" class="mt-1" alt="" />
						</div>
						<div class="text-white font-bold">
							<p class="text-xs font-thin">Download on the</p>
							<h3 class="text-xl">AppStore</h3>
						</div>
					</button>
				</a>
				<a href="/">
					<button
						class="flex space-x-3 border-base-200 justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"
					>
						<div>
							<img src="ourProduct/appreicial-icon.svg" class="mt-1" alt="" />
						</div>
						<div class="text-white text-left font-bold">
							<p class="text-xs font-thin">Manage on the</p>
							<h3 class="text-xl">Dashboard</h3>
						</div>
					</button>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.shadow {
		--tw-shadow: 5px 5px 45px 10px rgb(0 0 0 / 0.25);
		--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
