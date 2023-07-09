import keksobooking from 'assets/keksobooking.png'

export type WorkType = {
		title: string,
		desc: string,
		link: string,
		img: string
		techs: string[]
}

export type ContentType = {
		works: WorkType[]
}

export const content: ContentType  = {
		works: [
				{
						title: 'Keksobooking',
						desc: 'Housing listing service',
						link: 'https://anatoliypologovoy.github.io/keksobooking/',
						techs: ['JS', 'Leaflet.js','Gulp.js'],
						img: keksobooking
				},
				{
						title: 'Cat-energy',
						desc: 'Cat food store',
						link: 'https://anatoliypologovoy.github.io/Cat-energy/',
						techs: ['LESS','Adaptive Layout'],
						img: keksobooking
				}
		]
}