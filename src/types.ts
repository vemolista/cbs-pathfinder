export enum Area {
	MACRO = "Macroeconomics",
	MICRO = "Microeconomics",
	BA = "Business Administration",
	IT = "IT",
	FINANCE = "Finance",
	ACC = "Accounting",
	MARKETING = "Marketing",
}

export enum ProgrammeLevel {
	UNDERGRADUATE,
	GRADUATE,
}

export type Requirement = {
	area: Area;
	creditsInECTS: number;
};

export type Course = {
	code: string;
	title: string;
	rewards: Requirement[];
};

export type Programme = {
	title: string;
	programmeLevel: ProgrammeLevel;
	mandatoryCourses: Course[];
	requirements?: Requirement[];
};
