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

	const render = (conditions: any) => {
		isTopLevelCondition(conditions)
			? conditions.all
				? conditions.all.map((item: any) =>
						isTopLevelCondition(item)
							? render(item)
							: console.log("all", item.fact)
				  )
				: conditions.any.map((item: any) =>
						isTopLevelCondition(item)
							? render(item)
							: console.log("any", item.fact)
				  )
			: console.log("not (any or all)");
	};

	render(temp.conditions);

	return (
		<Box border={"2px solid green"}>
			<UnorderedList>
				<ListItem>i cri ivritim</ListItem>
			</UnorderedList>
		</Box>
	);
};
