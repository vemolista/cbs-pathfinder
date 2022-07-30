import { Area, Course } from "../types";
import { digitalManagement } from "../undergraduateProgrammes/digitalManagement";

export const BA_BDMAO1002U: Course = {
	code: "BA-BDMAO1002U",
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
};

export const BA_BDMAO1022U: Course = {
	code: "BA-BDMAO1022U",
	title: "Managing Communication, Marketing and Relations",
	rewards: [
		{
			area: Area["Business Administration"],
			creditsInECTS: 5,
		},
		{
			area: Area.Marketing,
			creditsInECTS: 10,
		},
	],
};

export const BA_BDMAO1023U: Course = {
	code: "BA-BDMAO1023U",
	title: "Business Data Analytics, Quantitative Methods and Visualization",
	rewards: [
		{
			area: Area["Business Administration"],
			creditsInECTS: 4,
		},
		{
			area: Area.IT,
			creditsInECTS: 3.5,
		},
	],
};

export const BA_BDMAO1024U: Course = {
	code: "BA-BDMAO1024U",
	title: "Economics in the Digital Age",
	rewards: [
		{
			area: Area.Microeconomics,
			creditsInECTS: 7.5,
		},
	],
};
