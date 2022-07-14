import {
	Badge,
	Box,
	Button,
	Checkbox,
	Flex,
	HStack,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Course } from "../declarations/types";
import { getCourseTotalECTS } from "../helpers/getCourseTotalECTS";
interface CourseProps {
	course: Course;
	passedCourses: Course[];
	setPassedCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export const SingleCourse = (props: CourseProps) => {
	const { course, passedCourses, setPassedCourses } = props;
	const { code, title, rewards } = course;

	const [checked, setChecked] = useState(false);

	const handleChange = (course: Course) => {
		if (checked) {
			setPassedCourses(passedCourses.filter((item) => item !== course));
			setChecked(!checked);
		} else {
			setPassedCourses([...passedCourses, course]);
			setChecked(!checked);
		}
	};

	return (
		<Box
			border={"1px solid lightgray"}
			borderRadius={"base"}
			margin={2}
			boxShadow={"md"}
			transitionDuration={"300ms"}
			bg={checked ? "green.100" : "white"}
		>
			<ListItem>
				<Box padding={5}>
					<HStack>
						<Checkbox
							size={"lg"}
							marginRight={5}
							onChange={() => handleChange(course)}
						/>
						<VStack alignItems={"flex-start"}>
							<Text>{title}</Text>
							<HStack>
								<Badge>{code}</Badge>
								<Badge>{getCourseTotalECTS(rewards)} ECTS</Badge>
							</HStack>
						</VStack>
					</HStack>
				</Box>
			</ListItem>
		</Box>
	);
};
