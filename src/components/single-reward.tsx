import { Box, ListItem } from "@chakra-ui/react";
import { Area, CourseReward } from "../declarations/types";

interface RewardProps {
	reward: CourseReward;
}

export const SingleReward = (props: RewardProps) => {
	const { reward } = props;
	const { area, creditsInECTS } = reward;

	return (
		<ListItem>
			<Box>
				{Area[area]}: {creditsInECTS} ECTS
			</Box>
		</ListItem>
	);
};
