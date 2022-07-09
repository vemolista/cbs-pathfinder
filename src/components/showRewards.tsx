import { sumECTSbyArea } from "../helpers/groupBy";
import { Area, Course, Reward } from "../declarations/types";
import { Box } from "@chakra-ui/react";

export const showRewards = (courses: Course[]) => {
	let rewards: Reward[] = [];

	courses.map((course) => course.rewards.map((reward) => rewards.push(reward)));

	let summedRewards = sumECTSbyArea(rewards);

	return (
		<Box>
			{summedRewards.map((reward, i) => (
				<li key={i}>
					{Area[reward.area]}: {reward.ECTS}
				</li>
			))}
		</Box>
	);
};
