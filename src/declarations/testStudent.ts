import { Area, Student } from "./types";

export const testStudent: Student = {
	passedCourses: [
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
	],
};
