import * as courses from "../courses/digitalManagement";
import { Programme, ProgrammeLevel } from "../types";

export const digitalManagement: Programme = {
	title: "BSc BA and Digital Management",
	abbreviation: "DM",
	programmeLevel: ProgrammeLevel.Undergraduate,
	mandatoryCourses: [
		courses.BA_BDMAO1002U,
		courses.BA_BDMAO1022U,
		courses.BA_BDMAO1023U,
		courses.BA_BDMAO1024U,
	],
};
