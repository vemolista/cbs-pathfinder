import {
	ChakraProvider,
	Box,
	theme,
	Heading,
	Button,
	ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { CourseList } from "./components/course-list";
import { GraduateProgrammes } from "./components/graduate-programmes";
import { ProgrammeList } from "./components/programme-list";
import { Course, Programme } from "./declarations/types";

enum Step {
	"InputProgramme",
	"InputCourses",
	"Results",
}

export const App = () => {
	const [step, setStep] = useState<Step>(Step.InputProgramme);
	const [passedCourses, setPassedCourses] = useState<Course[]>([]);
	const [currentProgramme, setCurrentProgramme] = useState<Programme>();
	let stepComponent;

	switch (step) {
		case Step.InputProgramme:
			stepComponent = (
				<ProgrammeList
					currentProgramme={currentProgramme}
					setCurrentProgramme={setCurrentProgramme}
				/>
			);
			break;
		case Step.InputCourses:
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
						{step < Object.keys(Step).length / 2 - 1 && (
							<Button onClick={() => setStep(step + 1)}>Next</Button>
						)}
						{step > 0 && (
							<Button onClick={() => setStep(step - 1)}>Back</Button>
						)}
						{step === Step.InputCourses && (
							<Button
								colorScheme={"red"}
								variant={"outline"}
								onClick={() => setPassedCourses([])}
							>
								Clear passed courses
							</Button>
						)}
					</ButtonGroup>
				</Box>
				{stepComponent}
			</Box>
		</ChakraProvider>
	);
};
