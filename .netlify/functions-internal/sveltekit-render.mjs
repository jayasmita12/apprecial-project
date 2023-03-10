import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","footer/appricial.svg","footer/facebook.svg","footer/insta.svg","footer/linkedin.svg","footer/twitter.svg","hero/Apprecialweb_animation_Dark.mp4","hero/Apprecialweb_animation_Light.mp4","hero/Artboard-dark.png","hero/Artboard.png","hero/dashboard-white-logo.svg","hero/explore-white.svg","hero/explore.svg","hero/product-dashboard.png","images/about.svg","images/apprecial.svg","images/bottom-left-line-dark.svg","images/bottom-left-line.svg","images/bottom-right-line-dark.svg","images/bottom-right-line.svg","images/dashboard.svg","images/mission.svg","images/playplix.svg","images/top-left-line-dark.svg","images/top-left-line.svg","images/top-right-line-dark.svg","images/top-right-line.svg","images/values.svg","images/vision.svg","images/werugo.svg","nav/apprecial-logo.svg","nav/dasboard-icon.svg","nav/hamburger-white.svg","nav/hamburger.svg","nav/moon.svg","nav/sun.svg","ourProduct/appreicial-icon.svg","ourProduct/Frame 26123.png","ourProduct/line.svg","ourProduct/mobile-ourproduct.png","ourProduct/product-dashboard.png","timeline/timeline-dark.svg","timeline/timeline.svg","werugo/apple.svg","werugo/appstore.svg","werugo/dashboard.svg","werugo/mobile.png","werugo/mobile2.png","werugo/playstore.svg","werugo/werugo-logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".mp4":"video/mp4"},
	_: {
		entry: {"file":"_app/immutable/start-7a08141d.js","imports":["_app/immutable/start-7a08141d.js","_app/immutable/chunks/index-cf312deb.js","_app/immutable/chunks/singletons-3aca78c8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
