import {
	Badge,
	Box,
	Button,
	HStack,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { Course } from "../declarations/types";
import { SingleReward } from "./single-reward";

interface CourseProps {
	course: Course;
	passedCourses: Course[];
	setPassedCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export const SingleCourse = (props: CourseProps) => {
	const { course, passedCourses, setPassedCourses } = props;
	const { code, title, rewards } = course;

	const addCourse = (course: Course) => {
		setPassedCourses([...passedCourses, course]);
	};

	const removeCourse = (course: Course) => {
		setPassedCourses(passedCourses.filter((item) => item !== course));
	};

	return (
		<ListItem border={"2px solid black"}>
			<Box padding={5}>
				<HStack>
					<Text>{title}</Text>
					<Badge>{code}</Badge>
				</HStack>
				<Box border={"2px solid black"} padding={5} margin={5}>
					<UnorderedList styleType={"none"}>
						{rewards.map((reward, i) => (
							<SingleReward reward={reward} key={i} />
						))}
					</UnorderedList>
				</Box>
				<HStack spacing={5}>
					<Button
						color={"green"}
						onClick={() => addCourse(course)}
						disabled={passedCourses.includes(course)}
					>
						I passed this!
					</Button>
					<Button
						color={"red"}
						onClick={() => removeCourse(course)}
						disabled={!passedCourses.includes(course)}
					>
						Nevermind
					</Button>
				</HStack>
			</Box>
		</ListItem>
	);
};
