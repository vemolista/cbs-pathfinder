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

export enum Condition {
	AND,
	OR,
}

// note -> programmes that are impossible to get in can be judged by the amount of remaining ects in your bsc

export type Requirement = {
	area: Area;
	creditsInECTS: number;
};

export type CompoundRequirement = {
	requirements: Requirement[];
	condition: Condition;
};

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
	programmeLevel: ProgrammeLevel;
	mandatoryCourses: Course[];
	requirements?: Requirement[];
};
