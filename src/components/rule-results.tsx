import { UnorderedList, Text, ListItem, Badge, HStack } from "@chakra-ui/react";
import { TopLevelCondition } from "json-rules-engine";
import { ConditionKind } from "../declarations/types";
import { getTopLevelConditionKindOrFalse } from "../helpers/getTopLevelConditionKindOrFalse";
import { SingleRuleResult } from "./single-rule-result";

interface RuleResultsProps {
	evaluatedCondition: TopLevelCondition;
	ruleResult?: any;
}

export const RuleResults = (props: RuleResultsProps) => {
	const { evaluatedCondition, ruleResult } = props;

	const typelessCondition = evaluatedCondition as any;

	const renderTopLevelOrNestedCondition2 = (item: any, i: number) => {
		switch (getTopLevelConditionKindOrFalse(item)) {
			case ConditionKind.TopLevelAll:
				return item.all.map((item: any, i: number) => (
					<RuleResults
						key={item + i}
						evaluatedCondition={item}
						ruleResult={item.result}
					/>
				));
			case ConditionKind.TopLevelAny:
				return item.any.map((item: any, i: number) => (
					<RuleResults
						key={item + i}
						evaluatedCondition={item}
						ruleResult={item.result}
					/>
				));
			case ConditionKind.NotTopLevel:
				return <SingleRuleResult key={item + i} ruleResult={item} />;
		}
	};

	const renderTopLevelConditionHeader = (topLevelCondition: any) => {
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

	const renderTopLevelConditionHeader2 = (topLevelCondition: any) => {
		switch (getTopLevelConditionKindOrFalse(topLevelCondition)) {
			case ConditionKind.TopLevelAll:
				return (
					<HStack>
						<Badge colorScheme={ruleResult ? "green" : "red"}>
							{ruleResult ? "fulfilled" : "not fulfilled"}
						</Badge>
						<Text>All of the following</Text>
					</HStack>
				);
			case ConditionKind.TopLevelAny:
				return (
					<HStack>
						<Badge colorScheme={ruleResult ? "green" : "red"}>
							{ruleResult ? "fulfilled" : "not fulfilled"}
						</Badge>
						<Text>At least one of the following</Text>
					</HStack>
				);
			case ConditionKind.NotTopLevel:
				return <></>;
		}
	};

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

	/*
		isTopLevel && condition.all
			all => all.map - renderTopOrNested
			any => all.map - renderTopOrNested

		conditionKind
			all => all.map - renderTop
			any => renderTop
			nested => renderNested




	*/

	// TODO: Still difficult to read, but better 🤷‍♂️
	return (
		<ListItem border={"1px solid lightgray"} borderRadius={"lg"} padding={2}>
			{renderTopLevelConditionHeader2(typelessCondition)}
			poop
			<UnorderedList>
				{/* {isTopLevelCondition(typelessCondition) && typelessCondition.all
					? typelessCondition.all.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )
					: typelessCondition.any.map((item: any, i: number) =>
							renderTopLevelOrNestedCondition(item, i)
					  )} */}
				{renderTopLevelOrNestedCondition2(typelessCondition, 0)}
			</UnorderedList>
		</ListItem>
	);
};
