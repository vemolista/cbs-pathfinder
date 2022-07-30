import { Box } from "@chakra-ui/react";
import { eBusiness } from "../declarations/graduateProgrammes/eBusiness";
import { informationSystems } from "../declarations/graduateProgrammes/informationSystems";
import { Course, Programme } from "../declarations/types";
import { SingleGraduateProgramme } from "./single-graduate-programme";

interface GraduateProgrammesProps {
	passedCourses: Course[];
}

export const GraduateProgrammes = (props: GraduateProgrammesProps) => {
	const { passedCourses } = props;
	const programmes: Programme[] = [eBusiness, informationSystems];

	return (
		<Box border={"1px solid lightgray"} borderRadius={"lg"} padding={5}>
			{programmes.map((programme, i) => (
				<SingleGraduateProgramme
					key={programme.title + i}
					programme={programme}
					passedCourses={passedCourses}
				/>
			))}
		</Box>
	);
};
