import { ChakraProvider, Box, theme, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import { GraduateProgrammes } from "./components/graduate-programmes";
import { CourseList } from "./components/course-list";
import { Course } from "./declarations/types";

enum Step {
	"Input",
	"Results",
}

export const App = () => {
	const [step, setStep] = useState<Step>(Step.Input);
	const [passedCourses, setPassedCourses] = useState<Course[]>([]);
	let stepComponent;

	switch (step) {
		case Step.Input:
			stepComponent = (
				<CourseList
					passedCourses={passedCourses}
					setPassedCourses={setPassedCourses}
				/>
			);
			break;
		case Step.Results:
			stepComponent = <GraduateProgrammes passedCourses={passedCourses} />;
			break;
		default:
			stepComponent = <Box>something went wrong, yikes</Box>;
	}

	return (
		<ChakraProvider theme={theme}>
			<Heading as={"h1"} size={"2xl"} textAlign={"center"} padding={10}>
				Pathfinder
			</Heading>
			<Box padding={10}>
				<Button
					disabled={passedCourses.length === 0}
					onClick={() => setStep(Step.Results)}
				>
					Crunch it!
				</Button>
				<Button onClick={() => setStep(Step.Input)}>Back</Button>
				{stepComponent}
			</Box>
		</ChakraProvider>
	);
};
