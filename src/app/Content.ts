import keksobooking from 'assets/keksobooking.png'
import catEnergy from 'assets/cat-energy.png'
import CSS from 'assets/logo/colors/css.png'
import SASS from 'assets/logo/colors/sass.png'
import LESS from 'assets/logo/colors/less.png'
import JS from 'assets/logo/colors/js.png'
import HTML from 'assets/logo/colors/html.png'
import TS from 'assets/logo/colors/ts.png'
import React from 'assets/logo/colors/react.png'
import Redux from 'assets/logo/colors/redux.png'
import Formik from 'assets/logo/colors/formik.png'
import Mui from 'assets/logo/colors/mui.png'
import Jest from 'assets/logo/colors/jest.png'
import Storybook from 'assets/logo/colors/storybook.png'
import Git from 'assets/logo/colors/git.png'


export type WorkType = {
		title: string,
		desc: string,
		link: string,
		img: string
		techs: string[]
}

export type Skill = {
		title: string,
		img: string
}

export type ContentType = {
		works: WorkType[]
		skills: Skill[]
}

export const content: ContentType  = {
		works: [
				{
						title: 'Keksobooking',
						desc: 'Housing listing service',
						link: 'https://anatoliypologovoy.github.io/keksobooking/',
						techs: ['JS', 'Leaflet.js','Webpack'],
						img: keksobooking
				},
				{
						title: 'Cat-energy',
						desc: 'Cat food store',
						link: 'https://anatoliypologovoy.github.io/Cat-energy/',
						techs: ['LESS','Adaptive Layout','Gulp' ],
						img: catEnergy
				}
		],
		skills: [
				{
						title: 'HTML',
						img: HTML
				},
				{
						title: 'CSS',
						img: CSS
				},
				{
						title: 'SASS',
						img: SASS
				},
				{
						title: 'LESS',
						img: LESS
				},
				{
						title: 'JS',
						img: JS
				},
				{
						title: 'TS',
						img: TS
				},
				{
						title: 'React',
						img: React
				},
				{
						title: 'Redux',
						img: Redux
				},
				{
						title: 'Formik',
						img: Formik
				},
				{
						title: 'Mui',
						img: Mui
				},
				{
						title: 'Jest',
						img: Jest
				},
				{
						title: 'Storybook',
						img: Storybook
				},
				{
						title: 'Git',
						img: Git
				}
		]
}