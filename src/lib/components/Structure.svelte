<script>
	import Product from './Product.svelte';
</script>

<div
	class="max-w-small 2xl:max-w-large mx-auto text-center mt-20 pb-20 hidden xl:flex xl:flex-col "
>
	<h2 class="text-heading-2 font-bold text-secondary-content">Company Structure</h2>
	<div class="w-[8.3rem] h-[5px] bg-primary-content rounded-3xl mt-1 mx-auto" />

	<div class="mt-14 flex justify-center">
		<!-- Left section -->
		<section class="flex flex-col items-center -mr-[5.8rem]">
			<img class="mt-40 light-img" src="/images/top-left-line.svg" alt="" />
			<img class="mt-40 dark-img" src="/images/top-left-line-dark.svg" alt="" />
			<div class="flex -ml-14">
				<!-- Mobile Products -->
				<section>
					<img class="light-img" src="/images/bottom-left-line.svg" alt="" />
					<img class="dark-img" src="/images/bottom-left-line-dark.svg" alt="" />
					<div class="-ml-40">
						<Product category="Mobile Products" product="Werugo" iconPath="/images/werugo.svg" />
					</div>
				</section>

				<!-- Web Products -->
				<section>
					<img class="light-img" src="/images/bottom-right-line.svg" alt="" />
					<img class="dark-img" src="/images/bottom-right-line-dark.svg" alt="" />
					<Product category="Web Products" product="Dashboard" iconPath="/images/dashboard.svg" />
				</section>
			</div>
		</section>

		<!-- Center section -->
		<section class="flex flex-col items-center space-y-1 -mr-[7.2rem]">
			<div
				class="h-[7.625rem] w-[7.625rem] rounded-full bg-primary grid place-items-center card-shadow dark: -mb-5 z-10"
			>
				<img class="h-[3.75rem] object-contain" src="/images/apprecial.svg" alt="" />
			</div>
			<div class="px-10 py-7 rounded-2xl border-2 border-base-200 text-center space-y-1">
				<p class="text-secondary-content text-2xl font-medium">Apprecial LTD.</p>
				<p class="text-secondary-content/50 text-sm font-medium">Parent company</p>
			</div>
		</section>

		<!-- Right section -->
		<section class="flex flex-col items-center -mr-40">
			<img class="mt-40 light-img" src="/images/top-right-line.svg" alt="" />
			<img class="mt-40 dark-img" src="/images/top-right-line-dark.svg" alt="" />
			<div class="flex flex-col items-center -mr-80">
				<div class="box h-[5.75rem] w-[15rem]">
					<p class="text-secondary-content/90 text-2xl font-medium">Games</p>
				</div>
				<div class="h-[4.375rem] w-1 bg-base-200" />
				<div class="product-icon card-shadow z-10">
					<img class="h-[3.75rem] object-contain" src="/images/playplix.svg" alt="" />
				</div>
			</div>
			<div
				class="px-8 py-5 flex space-x-8 rounded-2xl border-2 border-base-200 w-[40rem] -mt-5 -ml-20"
			>
				<p class="text-secondary-content/50 text-lg text-start flex-1">
					Apprecial’s subsidiary company, PlayPlix is a dedicated digital venue for mobile games. We
					aim to reinvent the future of gaming by bringing the innovative gaming ideas to life and
					introducing new levels of excitement.
				</p>
				<div class="h-full w-1 bg-base-200" />
				<div class="text-center w-[30%] space-y-1 mt-2">
					<p class="text-secondary-content text-2xl font-medium">PlayPlix</p>
					<p class="text-secondary-content/50 text-sm font-medium">SUBSIDIARY COMPANY</p>
					<div class="flex items-center justify-center space-x-1">
						<a
							class="text-secondary-content text-sm font-medium border-b border-secondary-content pb-0.5"
							href="/"
						>
							Open website
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-4 h-4 text-secondary-content"
						>
							<path
								fill-rule="evenodd"
								d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
								clip-rule="evenodd"
							/>
							<path
								fill-rule="evenodd"
								d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
