import { Rule } from "json-rules-engine";

export enum Area {
	"Macroeconomics",
	"Microeconomics",
	"Business Administration",
	"IT",
	"Finance",
	"Accounting",
	"Marketing",
}

export enum ProgrammeLevel {
	"Undergraduate",
	"Graduate",
}

export type Reward = {
	area: Area;
	creditsInECTS: number;
};

export type Course = {
	code: string;
	title: string;
	rewards: Reward[];
};

export type Programme = {
	title: string;
	abbreviation: string;
	programmeLevel: ProgrammeLevel;
	mandatoryCourses: Course[];
	requirements?: Rule;
};
