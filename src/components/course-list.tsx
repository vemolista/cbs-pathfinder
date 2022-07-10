import { Badge, Box, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import {
	BA_BDMAO1002U,
	BA_BDMAO1022U,
	BA_BDMAO1023U,
	BA_BDMAO1024U,
} from "../declarations/courses/digitalManagement";
import { Course } from "../declarations/types";
import { SingleCourse } from "./single-course";

export const CourseList = () => {
	const courses = [BA_BDMAO1002U, BA_BDMAO1022U, BA_BDMAO1023U, BA_BDMAO1024U];

	const [passedCourses, setPassedCourses] = useState<Course[]>([]);

	return (
		<Box>
			<Badge fontSize={"2xl"}>{passedCourses.length}</Badge>
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
