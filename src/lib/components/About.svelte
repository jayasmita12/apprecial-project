<script>
	const cards = [
		{
			title: 'Mission',
			description:
				'To provide eclectic, energetic, efficacious digital products that empower people to improve their productivity, achieve their goals, and bolster both personal and business lives.',
			iconPath: '/images/mission.svg',
			iconPosition: 'top-3 -left-12'
		},
		{
			title: 'Vision',
			description:
				'To improve productivity and enhance connectivity worldwide by leveraging the power of the internet.',
			iconPath: '/images/vision.svg',
			iconPosition: 'top-8 -left-5'
		},
		{
			title: 'Our Values',
			description:
				'At Apprecial, we believe our users are our greatest asset. By providing exceptional service and embracing customer feedback, we prioritise what matters and hold the key to creating solutions that revolutionise online experiences.',
			iconPath: '/images/values.svg',
			iconPosition: '-top-3 -left-7'
		}
	];
	import gsap from "gsap";
	import SplitText from '$lib/script/gsap/SplitText';
	import ScrollTrigger from '$lib/script/gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	onMount(()=>{
		gsap.registerPlugin(SplitText,ScrollTrigger);
		scroll()
	})

	function scroll() {
	const quotes = document.querySelectorAll(".quote1");
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
    quote.anim = gsap.from(quote.split.lines, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 70%",
      },
		  duration:1,
			opacity: 0,
			rotationX: -120,
			force3D: true,
			transformOrigin: 'top center -150',
			stagger: 0.1
    });
  });
}
	
</script>

<div class="bg-gradient-to-b from-secondary to-transparent mt-10 ellipse">
	<section
		class="max-w-small 2xl:max-w-large mx-auto flex flex-col lg:flex-row lg:space-x-40 space-y-10 lg:space-y-0 pt-20 px-4"
	>

	<img class="w-[24.5rem] object-contain self-center" src="images/about.svg" alt=""/>
	
		
		<div class="box2 ">
			<h2 class="text-2xl sm:text-heading-2 text-center sm:text-left font-bold text-secondary-content">What is Apprecial?</h2>
			<div class="flex justify-center sm:justify-start"><div class="w-[8.3rem] h-[5px] bg-primary-content rounded-3xl mt-3 flex " /></div>
			<p class="quote1 text-base sm:text-lg font-normal text-center sm:text-left text-secondary-content/70 mt-4">
				Apprecial is a Software-As-A-Service (SAAS) internet company dedicated to developing
				innovative applications that make your everyday life easier and more enjoyable.
			</p>

			<p class="quote1 text-base sm:text-lg text-center sm:text-left text-secondary-content/60 mt-6">
				At Apprecial, we are pushing the boundaries of innovation with our cutting-edge applications
				designed to enhance your productivity. By fusing inspiration and dedication, we’re
				revolutionising the way you interact with the internet, taking your experience to new
				heights. With facility, faculty, and fecundity, our goal is to not only modernise your
				digital persona and presence, but also to inspire a positive change in your personal and
				professional competencies.
			</p>
		</div>
	</section>

	<section class="max-w-small 2xl:max-w-large mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-14 px-8 sm:px-4">
		{#each cards as card}
			<div
				class="relative z-10  rounded-3xl bg-primary  overflow-hidden text-center px-5 pt-5 card-shadow"
			>
				<img
					class="absolute -z-10 w-[12.5rem] object-contain opacity-10 {card.iconPosition}"
					src={card.iconPath}
					alt=""
				/>
				<h3 class="text-[20px] sm:text-heading-3 text-secondary-content font-medium">{card.title}</h3>
				<p class="text-base sm:text-lg text-secondary-content/60 mt-1 sm:mt-5 mb-5">{card.description}</p>
			</div>
		{/each}
	</section>
</div>

<style>
	.ellipse {
		-webkit-clip-path: ellipse(145% 100% at 50% 100%);
		clip-path: ellipse(145% 100% at 50% 100%);
	}
</style>
