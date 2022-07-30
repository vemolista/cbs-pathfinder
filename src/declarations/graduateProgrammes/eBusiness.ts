import { Rule } from "json-rules-engine";
import { Area, Programme, ProgrammeLevel } from "../types";
import { digitalManagement } from "../undergraduateProgrammes/digitalManagement";

let eBusinessRules = new Rule({
	name: "EB Admissions",
	conditions: {
		any: [
			{
				fact: Area[Area.IT],
				operator: "greaterThanInclusive",
				value: 30,
			},
			{
				fact: Area[Area["Business Administration"]],
				operator: "greaterThanInclusive",
				value: 30,
			},
			{
				fact: Area[Area["Social Studies"]],
				operator: "greaterThanInclusive",
				value: 30,
			},
			{
				fact: Area[Area.Communication],
				operator: "greaterThanInclusive",
				value: 30,
			},
		],
	},
	event: {
		type: "EB",
	},
});

export const eBusiness: Programme = {
	title: "MSc E-business",
	abbreviation: "EB",
	programmeLevel: ProgrammeLevel.Graduate,
	mandatoryCourses: [],
	requirements: eBusinessRules,
	legalClaimFor: digitalManagement,
};
