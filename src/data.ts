import { Area, Programme, ProgrammeLevel } from "./types";

export const digitalManagement: Programme = {
	title: "Digital Management",
	programmeLevel: ProgrammeLevel.UNDERGRADUATE,
	mandatoryCourses: [
		{
			code: "DM0001",
			title: "Business Data Analytics, Quantitative Methods and Visualisation",
			rewards: [
				{
					area: Area.IT,
					creditsInECTS: 5,
				},
				{
					area: Area.BA,
					creditsInECTS: 10,
				},
			],
		},
		{
			code: "DM0001",
			title: "Economics and Strategy in the Digital Age",
			rewards: [
				{
					area: Area.MICRO,
					creditsInECTS: 7.5,
				},
			],
		},
		{
			code: "DM0002",
			title: "Managing Marketing, Communications and Relations",
			rewards: [
				{
					area: Area.MARKETING,
					creditsInECTS: 7.5,
				},
				{
					area: Area.BA,
					creditsInECTS: 7.5,
				},
			],
		},
	],
};

export const informationSystems: Programme = {
	title: "Digital Management",
	programmeLevel: ProgrammeLevel.GRADUATE,
	mandatoryCourses: [],
	requirements: [
		{
			area: Area.IT,
			creditsInECTS: 30,
		},
	],
};
