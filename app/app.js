'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
		'bradmax.player.ag.gorilla',
		'bradmax.player.ag.mole',
		'bradmax.player.ag.snake',
		'bradmax.player.ag.zebra',
	])
	.constant('BRADMAX_PLAYER_CONFIGURATION', {
		"dataProvider": [{
				"title": "Tears of steel",
				"duration": 45,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4",
					"contentType": "movie",
					"width": 1280,
					"height": 534,
					"bitrate": 191999
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/startsplash.jpg",
					"width": 956,
					"height": 397
				}]
			},
			{
				"title": "Big Buck Bunny",
				"duration": 573.600,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_big.buck.bunny.jpg",
					"width": 620,
					"height": 348
				}]
			}, {
				"title": "Cosmos Laundromat",
				"duration": 726.600,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_cosmos.laundromat.jpg",
					"width": 1200,
					"height": 800
				}]
			}, {
				"title": "Elephants Dream",
				"duration": 632.400,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_elephant.dream.jpg",
					"width": 1920,
					"height": 1080
				}]
			}, {
				"title": "Sintel",
				"duration": 868.800,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_sintel.png",
					"width": 1920,
					"height": 817
				}]
			}, {
				"title": "Sita Sings the Blues",
				"duration": 4879.200,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_sita.sings.the.blues.jpg",
					"width": 960,
					"height": 540
				}]
			}, {
				"title": "Caminandes 1: Llama Drama",
				"duration": 91,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_caminandes.1.jpg",
					"width": 1920,
					"height": 1080
				}]
			}, {
				"title": "Caminandes 2: Gran Dillama",
				"duration": 136.2,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_caminandes.2.jpg",
					"width": 1920,
					"height": 1080
				}]
			}, {
				"title": "Caminandes 3: Llamigos",
				"duration": 138.6,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_caminandes.3.jpg",
					"width": 1920,
					"height": 1080
				}]
			}, {
				"title": "Tears of steel",
				"duration": 734.097415,
				"source": [{
					"url": "http://bradmax.com/static/video/tears_of_steel.mp4"
				}],
				"splashImages": [{
					"url": "http://bradmax.com/static/images/splash_tears.of.steel.jpg",
					"width": 1615,
					"height": 675
				}]
			}
		]
	})
	.config([
		'$locationProvider',
		function ($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);
