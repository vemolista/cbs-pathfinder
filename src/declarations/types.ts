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

// TODO: compound requirements (e.g. 5 ECTS in Macro and/or Micro)
export type Requirement = {
	area: Area;
	creditsInECTS: number;
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
