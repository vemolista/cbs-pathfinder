import {
	ChakraProvider,
	Box,
	theme,
	Heading,
	Button,
	ButtonGroup,
} from "@chakra-ui/react";
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
			<Box padding={10}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} margin={10}>
					Pathfinder
				</Heading>
				<Box
					marginBottom={5}
					padding={5}
					border={"1px solid lightgray"}
					borderRadius={"lg"}
				>
					<ButtonGroup spacing={5}>
						{step === Step.Input && (
							<>
								<Button
									disabled={passedCourses.length === 0}
									onClick={() => setStep(Step.Results)}
								>
									Calculate graduate programme admissions
								</Button>
								<Button
									disabled={passedCourses.length === 0}
									colorScheme={"red"}
									variant={"outline"}
									onClick={() => setPassedCourses([])}
								>
									Clear passed courses
								</Button>
							</>
						)}
						{step === Step.Results && (
							<Button onClick={() => setStep(Step.Input)}>Back</Button>
						)}
					</ButtonGroup>
				</Box>
				{stepComponent}
			</Box>
		</ChakraProvider>
	);
};
