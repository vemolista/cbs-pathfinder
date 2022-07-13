import { Area, Course, CourseReward, Student } from "../declarations/types";

// going Array -> Map -> Array is kinda sus
// TODO: refactor
export const getPassedECTSByAreaToEvaluateAdmissionRule = (
	courses: Course[]
) => {
	let rewards: CourseReward[] = [];

	courses.map((course) => course.rewards.map((reward) => rewards.push(reward)));

	const passedECTSForArea = new Map<string, number>();

	const allAreas = Object.keys(Area).filter((value) => isNaN(Number(value)));

	// rule engine needs info on all areas in the rule,
	// no matter if the student took any courses in that area
	allAreas.map((area) => passedECTSForArea.set(area, 0));

	for (const { area, creditsInECTS } of rewards)
		passedECTSForArea.set(
			Area[area],
			(passedECTSForArea.get(Area[area]) || 0) + creditsInECTS
		);

	return Object.fromEntries(passedECTSForArea);
};
