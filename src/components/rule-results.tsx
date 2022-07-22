import { UnorderedList, Text, ListItem, Badge, HStack } from "@chakra-ui/react";
import { NestedCondition, TopLevelCondition } from "json-rules-engine";
import { SingleRuleResult } from "./single-rule-result";

interface RuleResultsProps {
	// TODO: rename to reflect the type that's expected
	ruleConditions: TopLevelCondition;
	ruleResult?: any;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { ruleConditions, ruleResult } = props;

	const ruleResultWithoutTypes = ruleConditions as any;

	const isTopLevelCondition = (conditions: any) => {
		return conditions.any || conditions.all;
	};

	const renderTopLevelOrNestedCondition = (item: any, i: number) => {
		return isTopLevelCondition(item) ? (
			<RuleResults
				key={item + i}
				ruleConditions={item}
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
			{renderHeader(ruleResultWithoutTypes)}
			<UnorderedList>
				{isTopLevelCondition(ruleResultWithoutTypes) &&
				ruleResultWithoutTypes.all
					? ruleResultWithoutTypes.all.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )
					: ruleResultWithoutTypes.any.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )}
			</UnorderedList>
		</ListItem>
	);
};
