import * as courses from "../courses/sociology";
import { Programme, ProgrammeLevel } from "../types";

export const sociology: Programme = {
	title: "BSc BA and Sociology",
	abbreviation: "SOC",
	programmeLevel: ProgrammeLevel.Undergraduate,
	mandatoryCourses: [courses.BA_BSOCO1810U, courses.BA_BSOCO1811U],
};
