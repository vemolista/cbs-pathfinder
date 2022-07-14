import { Box, UnorderedList } from "@chakra-ui/react";
import { TopLevelCondition } from "json-rules-engine";
import { SingleRuleResult } from "./single-rule-result";

interface RuleResultsProps {
	ruleResult: TopLevelCondition;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { ruleResult } = props;

	// TODO: render the typed object instead of doing this
	const ruleResultWithoutTypes = JSON.parse(JSON.stringify(ruleResult));

	const isTopLevelCondition = (conditions: any) => {
		return conditions.any || conditions.all;
	};

	// TODO: refactor - get rid of nested ternary operators 🤮
	return (
		<Box>
			<UnorderedList>
				{isTopLevelCondition(ruleResultWithoutTypes) &&
				ruleResultWithoutTypes.all
					? ruleResultWithoutTypes.all.map((item: any, i: number) => {
							return isTopLevelCondition(item) ? (
								<RuleResults key={i} ruleResult={item} />
							) : (
								<SingleRuleResult key={i} ruleResult={item} />
							);
					  })
					: ruleResultWithoutTypes.any.map((item: any, i: number) => {
							return isTopLevelCondition(item) ? (
								<RuleResults key={i} ruleResult={item} />
							) : (
								<SingleRuleResult key={i} ruleResult={item} />
							);
					  })}
			</UnorderedList>
		</Box>
	);
};
