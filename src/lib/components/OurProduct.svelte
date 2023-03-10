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
	const quotes = document.querySelectorAll(".quote2");
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
      	duration: 0.4,
			opacity: 0,
			scale: 0,
			y: 120,
			rotationX: 180,
			transformOrigin: '0% 50% -50',
			ease: 'back',
			stagger: 0.01
    });
  });
}
</script>


<div class="max-w-small 2xl:max-w-large  mx-auto  flex px-4">
	<div class="flex flex-row justify-between  items-center pt-16 pb-56 lg:pb-80">
		<div class="flex flex-col space-y-10 sm:space-y-28 w-full">
			<div class="flex flex-col space-y-3">
				<h1 class="text-secondary-content text-2xl sm:text-[40px] font-bold">Our Products</h1>
				<span>
					<img src="ourProduct/line.svg" class="" alt="" />
				</span>
			</div>

			<div class="flex sm:hidden h-[494px] relative">
				<img src="ourProduct/product-dashboard.png" class="absolute -right-4 h-[494px] w-full border-[6px] border-r-0 rounded-r-none border-black rounded-3xl outline outline-4 outline-offset-0 outline-white " alt="">
			</div>

			<div class="space-y-6 box1">
				<div class="flex space-x-3 ">
					<img src="nav/dasboard-icon.svg" class="w-9" alt="" />
					<h1 class="text-secondary-content text-2xl sm:text-[40px] font-bold">Dashboard</h1>
				</div>
				<p class="quote2 text-secondary-content/70 font-normal text-base sm:text-lg sm:w-[28rem]">
					Unlock the full potential of Apprecial's mobile-based services with our intuitive and
					feature-rich dashboard. It allows you to stay in control by providing remote access so you
					can easily manage your subscriptions, track account activity, or connect with our support
					team, all from one convenient location.
				</p>
				<button class="bg-primary-content  px-4 py-[0.6rem] rounded-xl">
					<span class="text-white text-lg font-normal">Learn more</span>
				</button>
				<button
					class="flex space-x-3 border-primary-content justify-center py-1 rounded-lg w-[11rem] border-[1.5px]"
				>
					<div>
						<img src="ourProduct/appreicial-icon.svg" class="mt-1" alt="" />
					</div>
					<div class="text-secondary-content text-left font-bold">
						<p class="text-xs">Manage on the</p>
						<h3 class="text-xl">Dashboard</h3>
					</div>
				</button>
			</div>
		</div>
		<div class="lg:flex hidden">
			<img
				src="ourProduct/product-dashboard.png"
				class="absolute -right-[25%] xl:-right-0 top-20  border-[6px] border-r-0 rounded-r-none border-black rounded-[2.5rem] outline outline-4 outline-offset-0 outline-white shadow"
				alt=""
			/>
		</div>
	</div>
</div>

<style>
	.shadow {
		--tw-shadow: 12px 12px 35px 15px rgb(0 0 0 / 0.25);
		--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
