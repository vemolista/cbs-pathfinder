import { ChakraProvider, Box, theme, Heading, Button } from "@chakra-ui/react";
import { RuleResult } from "json-rules-engine";
import { useState } from "react";
import { CourseList } from "./components/course-list";
import { RuleResults } from "./components/rule-results";
import { informationSystems } from "./declarations/graduateProgrammes/informationSystems";
import { Course } from "./declarations/types";
import { getPassedECTSByAreaToEvaluateAdmissionRule } from "./helpers/getPassedECTSByAreaToEvaluateAdmissionRule";
import { getRuleResult } from "./helpers/getRuleResult";

enum Step {
	"Input",
	"Results",
}

export const App = () => {
	const [step, setStep] = useState<Step>(Step.Input);
	const [ruleResult, setRuleResult] = useState<RuleResult[]>();
	const [passedCourses, setPassedCourses] = useState<Course[]>([]);
	let stepComponent;

	const handleClick = async () => {
		setRuleResult(
			await getRuleResult(
				informationSystems.requirements!,
				getPassedECTSByAreaToEvaluateAdmissionRule(passedCourses)
			)
		);

		setStep(Step.Results);
	};

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
			stepComponent = ruleResult && (
				<Box>
					<Heading>Admission criteria for Information Systems</Heading>
					<RuleResults ruleResult={ruleResult[0].conditions} />
				</Box>
			);
			break;
		default:
			stepComponent = <Box>something went wrong, yikes</Box>;
	}

	return (
		<ChakraProvider theme={theme}>
			<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
				<Box textAlign={"center"} fontSize={"3xl"} padding={10}>
					The most beautiful pathfinder (there is literally no other)
				</Box>
				<Button disabled={passedCourses.length === 0} onClick={handleClick}>
					Crunch it!
				</Button>
				<Button onClick={() => setStep(Step.Input)}>Back</Button>
				{stepComponent}
			</Box>
		</ChakraProvider>
	);
};
