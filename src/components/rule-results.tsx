import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { RuleResult } from "json-rules-engine";

interface RuleResultsProps {
	ruleResult: RuleResult[];
}

export const RuleResults = (props: RuleResultsProps) => {
	const { ruleResult } = props;

	const temp = JSON.parse(JSON.stringify(ruleResult[0]));

	const isTopLevelCondition = (conditions: any) => {
		return conditions.any || conditions.all;
	};

	const betterRender = (conditions: any) => {
		if (!isTopLevelCondition(conditions)) return conditions.fact;

		if (conditions.all) {
			conditions.all.map((item: any) =>
				isTopLevelCondition(item)
					? betterRender(item)
					: console.log(
							"all",
							item.fact,
							item.value,
							item.operator,
							item.factResult,
							item.result
					  )
			);
		} else {
			conditions.any.map((item: any) =>
				isTopLevelCondition(item)
					? betterRender(item)
					: console.log(
							"any",
							item.fact,
							item.value,
							item.operator,
							item.factResult,
							item.result
					  )
			);
		}
	};

	betterRender(temp.conditions);

	return (
		<Box border={"2px solid green"}>
			<UnorderedList>
				<ListItem>i cri ivritim</ListItem>
			</UnorderedList>
		</Box>
	);
};
