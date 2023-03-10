<script>
	import { page } from '$app/stores';
	import { isDark } from '$lib/stores/globalStore';

	$: routeId = $page.route.id;

	const changeTheme = () => {
		document.documentElement.dataset.theme = $isDark ? 'light' : 'dark';
		let theme = $isDark ? 'light' : 'dark';
		document.cookie = `theme=${theme};max-age=31536000;path="/"`;
		localStorage.setItem('theme', `${theme}`);
	};
</script>

<nav class="max-w-small 2xl:max-w-large mx-auto px-4 ">
	<div class="flex flex-row justify-between py-3">
		<div>
			<a href="/" class="hidden sm:flex"><img src="nav/apprecial-logo.svg" alt="" /></a>
			<div href="/" class="visible sm:hidden">
				{#if !$isDark}
								<img src="nav/hamburger.svg" class="w-6" alt="" />
							{:else}
								<img src="nav/hamburger-white.svg" class="w-6" alt="" />
							{/if}
			</div>
		</div>
		<ul class="hidden lg:flex flex-row space-x-10 text-secondary-content  self-center">
			<a href="/"><li class="text-lg font-medium " class:tabactive={routeId === '/'}>Home</li></a>
			<a href="/"
				><li class="text-lg font-medium " class:tabactive={routeId === '/about'}>About</li></a
			>
			<a href="/products"
				><li class="text-lg font-medium " class:tabactive={routeId === '/products'}>Products</li></a
			>
			<a href="/timeline"
				><li class="text-lg font-medium " class:tabactive={routeId === '/timeline'}>Timeline</li></a
			>
		</ul>

		<div class="flex self-center space-x-4">
			<button
				class="hidden sm:flex border-primary-content border-2 px-4 py-2 rounded-xl space-x-2 "
			>
				<span>
					<img src="nav/dasboard-icon.svg" class="mt-[7px]" alt="" />
				</span>
				<span class="text-primary-content text-lg font-medium"> Dashboard </span>
			</button>
			<div class="self-center">
				<label class="toggles" for="myToggle">
					<input
						class="toggle__input"
						on:change={changeTheme}
						bind:checked={$isDark}
						data-toggle-theme="light,dark"
						name=""
						type="checkbox"
						id="myToggle"
					/>
					<div class="toggle__fill">
						<span class="toggle__button flex justify-center items-center">
							{#if !$isDark}
								<img src="nav/sun.svg" class="w-4" alt="" />
							{:else}
								<img src="nav/moon.svg" class="w-4" alt="" />
							{/if}
						</span>
					</div>
				</label>
			</div>
		</div>
	</div>
</nav>

<style>
	.toggles {
		--width: 44px;
		--height: calc(var(--width) / 2);
		--border-radius: calc(var(--height) / 2);
		display: inline-block;
		cursor: pointer;
	}

	.toggle__input {
		display: none;
	}

	.toggle__fill {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--border-radius);
		background: #000000;
		transition: background 0.2s;
	}
	.toggle__button {
		position: absolute;
		top: -2px;
		left: -2px;
		border-radius: 50px;
		background: #ffffff;
		width: 26px;
		height: 26px;
		border: 1.5px solid #000000;
	}

	.toggle__input:checked ~ .toggle__fill {
		background: #ffffff;
	}
	.toggle__button {
		transition: all 0.3s ease-in;
	}

	.toggle__input:checked + .toggle__fill .toggle__button {
		background-color: #000000;
		border: 1.5px solid #ffffff;
		transform: translateX(22px);
		transition: all 0.3s ease-in;
	}
</style>
