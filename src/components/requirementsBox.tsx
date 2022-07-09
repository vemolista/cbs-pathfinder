import { Area, Requirement } from "../declarations/types";
import { Box } from "@chakra-ui/react";

interface RequirementsBoxProps {
	requirements?: Requirement[];
}

export const RequirementsBox = (props: RequirementsBoxProps) => {
	const { requirements } = props;

	return (
		<Box>
			{requirements ? (
				requirements.map((requirement, i) => (
					<li key={i}>
						{Area[requirement.area]}: {requirement.creditsInECTS}
					</li>
				))
			) : (
				<div>no requirements</div>
			)}
		</Box>
	);
};
