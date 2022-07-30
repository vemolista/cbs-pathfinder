import { UnorderedList, Text, ListItem, Badge, HStack } from "@chakra-ui/react";
import { TopLevelCondition } from "json-rules-engine";
import { SingleRuleResult } from "./single-rule-result";

interface RuleResultsProps {
	evaluatedCondition: TopLevelCondition;
	ruleResult?: any;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { evaluatedCondition, ruleResult } = props;

	const ruleResultWithoutTypes = evaluatedCondition as any;

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
					{ruleResult ? "Fulfilled" : "Not fulfilled"}
				</Badge>
				<Text>All of the following</Text>
			</HStack>
		) : (
			<HStack>
				<Badge colorScheme={ruleResult ? "green" : "red"}>
					{ruleResult ? "Fulfilled" : "Not fulfilled"}
				</Badge>
				<Text>At least one of the following</Text>
			</HStack>
		);
	};

	// TODO: Still difficult to read, but better 🤷‍♂️
	return (
		<ListItem
			border={"1px solid lightgray"}
			borderRadius={"lg"}
			padding={2}
			backgroundColor={ruleResult ? "green.50" : "red.50"}
		>
			{renderHeader(ruleResultWithoutTypes)}
			<UnorderedList styleType={"none"}>
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
