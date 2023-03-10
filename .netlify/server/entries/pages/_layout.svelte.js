import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ScrollSmoother.js";
const app = "";
const isDark = writable(false);
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".toggles.svelte-qpzmeq.svelte-qpzmeq{--width:44px;--height:calc(var(--width) / 2);--border-radius:calc(var(--height) / 2);display:inline-block;cursor:pointer}.toggle__input.svelte-qpzmeq.svelte-qpzmeq{display:none}.toggle__fill.svelte-qpzmeq.svelte-qpzmeq{position:relative;width:var(--width);height:var(--height);border-radius:var(--border-radius);background:#000000;transition:background 0.2s}.toggle__button.svelte-qpzmeq.svelte-qpzmeq{position:absolute;top:-2px;left:-2px;border-radius:50px;background:#ffffff;width:26px;height:26px;border:1.5px solid #000000}.toggle__input.svelte-qpzmeq:checked~.toggle__fill.svelte-qpzmeq{background:#ffffff}.toggle__button.svelte-qpzmeq.svelte-qpzmeq{transition:all 0.3s ease-in}.toggle__input:checked+.toggle__fill.svelte-qpzmeq .toggle__button.svelte-qpzmeq{background-color:#000000;border:1.5px solid #ffffff;transform:translateX(22px);transition:all 0.3s ease-in}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $isDark, $$unsubscribe_isDark;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isDark = subscribe(isDark, (value) => $isDark = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  routeId = $page.route.id;
  $$unsubscribe_isDark();
  $$unsubscribe_page();
  return `<nav class="${"max-w-small 2xl:max-w-large mx-auto px-4 "}"><div class="${"flex flex-row justify-between py-3"}"><div><a href="${"/"}" class="${"hidden sm:flex"}"><img src="${"nav/apprecial-logo.svg"}" alt="${""}"></a>
			<div href="${"/"}" class="${"visible sm:hidden"}">${!$isDark ? `<img src="${"nav/hamburger.svg"}" class="${"w-6"}" alt="${""}">` : `<img src="${"nav/hamburger-white.svg"}" class="${"w-6"}" alt="${""}">`}</div></div>
		<ul class="${"hidden lg:flex flex-row space-x-10 text-secondary-content self-center"}"><a href="${"/"}"><li class="${["text-lg font-medium ", routeId === "/" ? "tabactive" : ""].join(" ").trim()}">Home</li></a>
			<a href="${"/"}"><li class="${["text-lg font-medium ", routeId === "/about" ? "tabactive" : ""].join(" ").trim()}">About</li></a>
			<a href="${"/products"}"><li class="${["text-lg font-medium ", routeId === "/products" ? "tabactive" : ""].join(" ").trim()}">Products</li></a>
			<a href="${"/timeline"}"><li class="${["text-lg font-medium ", routeId === "/timeline" ? "tabactive" : ""].join(" ").trim()}">Timeline</li></a></ul>

		<div class="${"flex self-center space-x-4"}"><button class="${"hidden sm:flex border-primary-content border-2 px-4 py-2 rounded-xl space-x-2 "}"><span><img src="${"nav/dasboard-icon.svg"}" class="${"mt-[7px]"}" alt="${""}"></span>
				<span class="${"text-primary-content text-lg font-medium"}">Dashboard </span></button>
			<div class="${"self-center"}"><label class="${"toggles svelte-qpzmeq"}" for="${"myToggle"}"><input class="${"toggle__input svelte-qpzmeq"}" data-toggle-theme="${"light,dark"}" name="${""}" type="${"checkbox"}" id="${"myToggle"}"${add_attribute("checked", $isDark, 1)}>
					<div class="${"toggle__fill svelte-qpzmeq"}"><span class="${"toggle__button flex justify-center items-center svelte-qpzmeq"}">${!$isDark ? `<img src="${"nav/sun.svg"}" class="${"w-4"}" alt="${""}">` : `<img src="${"nav/moon.svg"}" class="${"w-4"}" alt="${""}">`}</span></div></label></div></div></div>
</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"bg-gradient-to-r from-black to-black/80 rounded-b-2xl "}"><div class="${"max-w-small 2xl:max-w-large mx-auto py-3 px-4"}"><div class="${"flex lg:flex-row flex-col justify-between space-y-5 lg:space-y-0"}"><div class="${"flex space-x-2 self-center"}"><img src="${"footer/appricial.svg"}" alt="${""}">
				<p class="${"text-white/80 text-[11px] self-center sm:text-sm"}">Copyright © Apprecial LTD. 2023. All rights reserved.</p></div>
			<ul class="${"flex space-x-6 self-center"}"><a href="${"/"}"><li><img src="${"footer/twitter.svg"}" class="${"h-4"}" alt="${""}"></li></a>
				<a href="${"/"}"><li><img src="${"footer/facebook.svg"}" class="${"h-4"}" alt="${""}"></li></a>
				<a href="${"/"}"><li><img src="${"footer/insta.svg"}" class="${"h-4"}" alt="${""}"></li></a>
				<a href="${"/"}"><li><img src="${"footer/linkedin.svg"}" class="${"h-4"}" alt="${""}"></li></a></ul>
			<ul class="${"flex space-x-6 text-white/80 text-xs sm:text-sm self-center"}"><a href="${"/"}"><li>PlayPlix</li></a>
				<a href="${"/"}"><li>Site Map</li></a>
				<a href="${"/"}"><li>Privacy Policy</li></a>
				<a href="${"/"}"><li>Terms</li></a></ul></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDark;
  $$unsubscribe_isDark = subscribe(isDark, (value) => value);
  $$unsubscribe_isDark();
  return `<main class="${"bg-primary rounded-2xl"}" id="${"smooth-wrapper"}"><div id="${"smooth-content"}"><div>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
		<div>${slots.default ? slots.default({}) : ``}</div>
		<div>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></main>`;
});
export {
  Layout as default
};
