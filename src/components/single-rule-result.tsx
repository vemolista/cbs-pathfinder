import { ListItem, HStack, Box, Badge, Text } from "@chakra-ui/react";

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
			border={`1px solid lightgray`}
			backgroundColor={result ? "green.50" : "red.50"}
			borderRadius={"base"}
			padding={2}
			marginTop={2}
			marginBottom={2}
		>
			<HStack>
				<Badge colorScheme={result ? "green" : "red"}>
					{result ? "fulfilled" : "not fulfilled"}
				</Badge>
				<Text>
					{fact}: {value} ECTS (currently: {factResult})
				</Text>
				{/* <Box>{fact}</Box>
				<Box>{value}</Box>
				<Box>{operator}</Box>
				<Box>{factResult}</Box> */}
			</HStack>
		</ListItem>
	);
};
