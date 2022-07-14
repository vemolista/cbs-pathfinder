import { CourseReward } from "../declarations/types";

export const getCourseTotalECTS = (rewards: CourseReward[]): number => {
	return Object.values(rewards).reduce(
		(total, current) => total + current.creditsInECTS,
		0
	);
};
