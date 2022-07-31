import {
	Badge,
	Box,
	HStack,
	UnorderedList,
	Text,
	Input,
	InputGroup,
	InputLeftAddon,
	Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { Course, Programme } from "../declarations/types";
import { digitalManagement } from "../declarations/undergraduateProgrammes/digitalManagement";
import { sociology } from "../declarations/undergraduateProgrammes/sociology";
import { SingleCourse } from "./single-course";

interface CourseListProps {
	currentProgramme: Programme;
	passedCourses: Course[];
	setPassedCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export const CourseList = (props: CourseListProps) => {
	const { passedCourses, setPassedCourses, currentProgramme } = props;

	const courses: Course[] = [
		...digitalManagement.mandatoryCourses,
		...sociology.mandatoryCourses,
	].filter((course) => !currentProgramme.mandatoryCourses.includes(course));
	courses.unshift(...currentProgramme.mandatoryCourses);

	const [searchValue, setSearchValue] = useState("");

	const search = () => {
		const parsedSearchValue = searchValue.toLowerCase();

		return courses.filter((course) =>
			course.title.toLowerCase().includes(parsedSearchValue)
		);
	};

	return (
		<Box border={"1px solid lightgray"} borderRadius={"lg"} padding={5}>
			<HStack
				padding={5}
				justify="space-between"
				margin={5}
				border={"1px solid lightgray"}
				borderRadius={"base"}
				boxShadow={"md"}
			>
				<HStack>
					<Text>Number of passed courses:</Text>
					<Badge fontSize={"2xl"}>{passedCourses.length}</Badge>
				</HStack>
				<InputGroup maxWidth={"40%"} alignSelf={"flex-end"}>
					<InputLeftAddon children={"Search by course title"} />
					<Input
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</InputGroup>
			</HStack>
			<Heading as={"h2"}>Courses</Heading>
			<UnorderedList styleType={"none"} spacing={2} margin={5}>
				{search().map((course, i) => (
					<SingleCourse
						course={course}
						key={course.code + i}
						passedCourses={passedCourses}
						setPassedCourses={setPassedCourses}
					/>
				))}
			</UnorderedList>
		</Box>
	);
};
