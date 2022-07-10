import { Area, Programme, ProgrammeLevel } from "../types";

export const digitalManagement: Programme = {
	title: "BSc BA and Digital Management",
	abbreviation: "DM",
	programmeLevel: ProgrammeLevel.Undergraduate,
	mandatoryCourses: [
		{
			code: "DM0001",
			title: "Digital Technologies and Data-Driven Business",
			rewards: [
				{
					area: Area.IT,
					creditsInECTS: 5,
				},
				{
					area: Area["Business Administration"],
					creditsInECTS: 10,
				},
			],
		},
		{
			code: "DM0001",
			title: "Business Data Analytics, Quantitative Methods and Visualisation",
			rewards: [
				{
					area: Area.IT,
					creditsInECTS: 10,
				},
				{
					area: Area["Business Administration"],
					creditsInECTS: 5,
				},
			],
		},
		{
			code: "DM0001",
			title: "Economics and Strategy in the Digital Age",
			rewards: [
				{
					area: Area.Microeconomics,
					creditsInECTS: 7.5,
				},
			],
		},
		{
			code: "DM0002",
			title: "Managing Marketing, Communications and Relations",
			rewards: [
				{
					area: Area.Marketing,
					creditsInECTS: 7.5,
				},
				{
					area: Area["Business Administration"],
					creditsInECTS: 7.5,
				},
			],
		},
	],
};
