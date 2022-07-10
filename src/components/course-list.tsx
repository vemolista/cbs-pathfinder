import {
	Badge,
	Box,
	Button,
	HStack,
	UnorderedList,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	BA_BDMAO1002U,
	BA_BDMAO1022U,
	BA_BDMAO1023U,
	BA_BDMAO1024U,
} from "../declarations/courses/digitalManagement";
import { informationSystems } from "../declarations/graduateProgrammes/informationSystems";
import { Course } from "../declarations/types";
import { getPassedECTSByAreaToEvaluateAdmissionRule } from "../helpers/getPassedECTSByAreaToEvaluateAdmissionRule";
import { SingleCourse } from "./single-course";
import { crunchIt } from "./something";

export const CourseList = () => {
	const courses = [BA_BDMAO1002U, BA_BDMAO1022U, BA_BDMAO1023U, BA_BDMAO1024U];

	const [passedCourses, setPassedCourses] = useState<Course[]>([]);

	return (
		<Box>
			<HStack>
				<HStack border={"1px solid"} padding={2}>
					<Text>Number of passed courses:</Text>
					<Badge fontSize={"2xl"}>{passedCourses.length}</Badge>
				</HStack>
				<Button
					disabled={passedCourses.length === 0}
					onClick={() =>
						crunchIt(
							informationSystems.requirements!,
							getPassedECTSByAreaToEvaluateAdmissionRule(passedCourses)
						)
					}
				>
					Crunch it!
				</Button>
			</HStack>
			<UnorderedList styleType={"none"}>
				{courses.map((course, i) => {
					return (
						<SingleCourse
							course={course}
							key={i}
							passedCourses={passedCourses}
							setPassedCourses={setPassedCourses}
						/>
					);
				})}
			</UnorderedList>
		</Box>
	);
};
