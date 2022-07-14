import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { RuleResult, TopLevelCondition } from "json-rules-engine";

interface RuleResultsProps {
	ruleResult: TopLevelCondition;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { ruleResult } = props;

	const temp = JSON.parse(JSON.stringify(ruleResult));

	const isTopLevelCondition = (conditions: any) => {
		return conditions.any || conditions.all;
	};

	// TODO: refactor - get rid of nested ternary operators 🤮
	return (
		<Box>
			<UnorderedList>
				{isTopLevelCondition(temp) && temp.all
					? temp.all.map((item: any, i: number) => {
							return isTopLevelCondition(item) ? (
								<RuleResults key={i} ruleResult={item} />
							) : (
								<SingleRuleResult key={i} ruleResult={item} />
							);
					  })
					: temp.any.map((item: any, i: number) => {
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
