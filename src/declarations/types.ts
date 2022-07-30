import { Rule } from "json-rules-engine";

export enum ConditionKind {
	TopLevelAll,
	TopLevelAny,
	NotTopLevel,
}

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

export type CourseReward = {
	area: Area;
	creditsInECTS: number;
};

export type Course = {
	code: string;
	title: string;
	rewards: CourseReward[];
};

export type Programme = {
	title: string;
	abbreviation: string;
	programmeLevel: ProgrammeLevel;
	mandatoryCourses: Course[];
	requirements?: Rule;
};

export type Student = {
	passedCourses: Course[];
};
