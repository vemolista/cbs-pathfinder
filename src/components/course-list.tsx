import {
	Badge,
	Box,
	HStack,
	UnorderedList,
	Text,
	Input,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	BA_BDMAO1002U,
	BA_BDMAO1022U,
	BA_BDMAO1023U,
	BA_BDMAO1024U,
} from "../declarations/courses/digitalManagement";
import { Course } from "../declarations/types";
import { SingleCourse } from "./single-course";

interface CourseListProps {
	passedCourses: Course[];
	setPassedCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export const CourseList = (props: CourseListProps) => {
	const { passedCourses, setPassedCourses } = props;
	const courses = [BA_BDMAO1002U, BA_BDMAO1022U, BA_BDMAO1023U, BA_BDMAO1024U];
	const [searchValue, setSearchValue] = useState("");

	const search = () => {
		const parsedSearchValue = searchValue.toLowerCase();

		return courses.filter((course) =>
			course.title.toLowerCase().includes(parsedSearchValue)
		);
	};

	return (
		<Box border={"1px solid lightgray"}>
			<HStack border={"1px solid"} padding={2}>
				<Text>Number of passed courses:</Text>
				<Badge fontSize={"2xl"}>{passedCourses.length}</Badge>
				<Input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</HStack>
			<UnorderedList styleType={"none"} spacing={2} margin={5}>
				{search().map((course, i) => {
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
