import { ListItem, HStack, Box } from "@chakra-ui/react";

interface SingleRuleResultProps {
	ruleResult: {
		result: boolean;
		fact: string;
		value: number;
		operator: string;
		factResult: number;
	};
}

export const SingleRuleResult = (props: SingleRuleResultProps) => {
	const { result, fact, value, operator, factResult } = props.ruleResult;

	return (
		<ListItem
			border={`2px solid ${result ? "green" : "red"}`}
			backgroundColor={result ? "lightgreen" : "lightsalmon"}
		>
			<HStack>
				<Box>{result ? "fulfilled" : "not fulfilled"}</Box>
				<Box>{fact}</Box>
				<Box>{value}</Box>
				<Box>{operator}</Box>
				<Box>{factResult}</Box>
			</HStack>
		</ListItem>
	);
};
