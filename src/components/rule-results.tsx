import { UnorderedList, Text, ListItem, Badge, HStack } from "@chakra-ui/react";
import { TopLevelCondition } from "json-rules-engine";
import { SingleRuleResult } from "./single-rule-result";

interface RuleResultsProps {
	evaluatedCondition: TopLevelCondition;
	ruleResult?: any;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { evaluatedCondition, ruleResult } = props;

	const typelessCondition = evaluatedCondition as any;

	const isTopLevelCondition = (conditions: any) => {
		return conditions.any || conditions.all;
	};

	const renderTopLevelOrNestedCondition = (item: any, i: number) => {
		return isTopLevelCondition(item) ? (
			<RuleResults
				key={item + i}
				evaluatedCondition={item}
				ruleResult={item.result}
			/>
		) : (
			<SingleRuleResult key={item + i} ruleResult={item} />
		);
	};

	const renderHeader = (topLevelCondition: any) => {
		return topLevelCondition.all ? (
			<HStack>
				<Badge colorScheme={ruleResult ? "green" : "red"}>
					{ruleResult ? "fulfilled" : "not fulfilled"}
				</Badge>
				<Text>All of the following</Text>
			</HStack>
		) : (
			<HStack>
				<Badge colorScheme={ruleResult ? "green" : "red"}>
					{ruleResult ? "fulfilled" : "not fulfilled"}
				</Badge>
				<Text>At least one of the following</Text>
			</HStack>
		);
	};

	// TODO: Still difficult to read, but better 🤷‍♂️
	return (
		<ListItem border={"1px solid lightgray"} borderRadius={"lg"} padding={2}>
			{renderHeader(typelessCondition)}
			<UnorderedList>
				{isTopLevelCondition(typelessCondition) && typelessCondition.all
					? typelessCondition.all.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )
					: typelessCondition.any.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )}
			</UnorderedList>
		</ListItem>
	);
};
