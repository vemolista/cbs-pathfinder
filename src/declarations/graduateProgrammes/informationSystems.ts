import { Rule } from "json-rules-engine";
import { Area, Programme, ProgrammeLevel } from "../types";

const informationSystemsRules = new Rule({
	name: "IS Admissions",
	conditions: {
		all: [
			{
				fact: "IT",
				operator: "greaterThanInclusive",
				value: 30,
			},
			{
				fact: Area[Area["Business Administration"]],
				operator: "greaterThanInclusive",
				value: 25,
			},
			{
				any: [
					{
						fact: Area[Area.Microeconomics],
						operator: "greaterThanInclusive",
						value: 5,
					},
					{
						fact: Area[Area.Macroeconomics],
						operator: "greaterThanInclusive",
						value: 5,
					},
				],
			},
		],
	},
	event: {
		type: "IS",
	},
});

export const informationSystems: Programme = {
	title: "MSc Business Administration and Information Systems",
	abbreviation: "IS",
	programmeLevel: ProgrammeLevel.Graduate,
	mandatoryCourses: [],
	requirements: informationSystemsRules,
};
