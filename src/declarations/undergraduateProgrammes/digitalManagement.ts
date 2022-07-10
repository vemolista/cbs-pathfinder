import {
	BA_BDMAO1002U,
	BA_BDMAO1022U,
	BA_BDMAO1023U,
	BA_BDMAO1024U,
} from "../courses/digitalManagement";
import { Programme, ProgrammeLevel } from "../types";

export const digitalManagement: Programme = {
	title: "BSc BA and Digital Management",
	abbreviation: "DM",
	programmeLevel: ProgrammeLevel.Undergraduate,
	mandatoryCourses: [
		BA_BDMAO1002U,
		BA_BDMAO1022U,
		BA_BDMAO1023U,
		BA_BDMAO1024U,
	],
};
