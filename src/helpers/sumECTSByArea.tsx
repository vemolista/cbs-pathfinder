import { Area, Course, Reward } from "../declarations/types";

// going Array -> Map -> Array is kinda sus
// but I'm just gonna let that go, because I'm so fucking rusty
export const sumECTSbyArea = (courses: Course[]) => {
	let rewards: Reward[] = [];

	courses.map((course) => course.rewards.map((reward) => rewards.push(reward)));

	const map = new Map<Area, number>();

	for (const { area, creditsInECTS } of rewards)
		map.set(area, (map.get(area) || 0) + creditsInECTS);

	return [...map].map(([area, ECTS]) => ({ area, ECTS }));
};
