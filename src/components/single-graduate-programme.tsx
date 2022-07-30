import { Heading, UnorderedList } from "@chakra-ui/react";
import { RuleResult } from "json-rules-engine";
import { useState, useEffect } from "react";
import { Course, Programme } from "../declarations/types";
import { getPassedECTSByAreaToEvaluateAdmissionRule } from "../helpers/getPassedECTSByAreaToEvaluateAdmissionRule";
import { getRuleResult } from "../helpers/getRuleResult";
import { RuleResults } from "./rule-results";

interface SingleGraduateProgrammeProps {
	programme: Programme;
	passedCourses: Course[];
}

export const SingleGraduateProgramme = (
	props: SingleGraduateProgrammeProps
) => {
	const { programme, passedCourses } = props;
	const [ruleResult, setRuleResult] = useState<RuleResult[]>();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getRuleResult(
				programme.requirements!,
				getPassedECTSByAreaToEvaluateAdmissionRule(passedCourses)
			);

			setRuleResult(data);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<UnorderedList
			border={"1px solid lightgray"}
			borderRadius={"lg"}
			padding={5}
			styleType={"none"}
			margin={5}
		>
			<Heading>{programme.title}</Heading>
			{ruleResult && (
				<RuleResults
					evaluatedCondition={ruleResult[0].conditions}
					ruleResult={ruleResult[0].result}
				/>
			)}
		</UnorderedList>
	);
};
