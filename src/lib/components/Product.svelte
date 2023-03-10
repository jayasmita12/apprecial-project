<script>
	export let category = '';
	export let product = '';
	export let iconPath = '';
</script>

<div class="flex flex-col items-center">
	<div class="box h-[5.75rem] w-[15rem]">
		<p class="text-secondary-content/90 text-2xl font-medium">{category}</p>
	</div>
	<div class="h-[23.313rem] w-1 bg-base-200" />
	<div class="product-icon card-shadow z-10">
		<img
			class="{product == 'Dashboard' ? 'h-[2.75rem]' : 'h-[3.7rem]'} object-contain"
			src={iconPath}
			alt=""
		/>
	</div>
	<div
		class="w-[16.563rem] py-7 rounded-2xl border-2 border-base-200 text-center -mt-5 z-0 space-y-1"
	>
		<p class="text-secondary-content text-2xl font-medium">{product}</p>
		<p class="text-secondary-content/50 text-sm font-medium">Product</p>
		<a
			class="text-secondary-content text-sm font-medium border-b border-secondary-content pb-0.5"
			href="/"
		>
			Learn more below
		</a>
	</div>
</div>
