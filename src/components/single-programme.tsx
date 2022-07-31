import {
	Badge,
	Box,
	HStack,
	ListItem,
	Radio,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Programme, ProgrammeLevel } from "../declarations/types";

interface SingleProgrammeProps {
	programme: Programme;
	currentProgramme: Programme | undefined;
	setCurrentProgramme: React.Dispatch<
		React.SetStateAction<Programme | undefined>
	>;
}

export const SingleProgramme = (props: SingleProgrammeProps) => {
	const { programme, currentProgramme, setCurrentProgramme } = props;
	const { title, programmeLevel } = programme;

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (currentProgramme === programme) setChecked(true);
		else setChecked(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentProgramme]);

	return (
		<Box
			border={"1px solid lightgray"}
			borderRadius={"base"}
			boxShadow={"md"}
			transitionDuration={"300ms"}
			bg={checked ? "green.100" : "white"}
		>
			<ListItem padding={5}>
				<HStack>
					<Radio
						size={"lg"}
						marginRight={5}
						onChange={() => setCurrentProgramme(programme)}
						isChecked={checked}
					/>
					<VStack alignItems={"flex-start"}>
						<Text>{title}</Text>
						<Badge>{ProgrammeLevel[programmeLevel]}</Badge>
					</VStack>
				</HStack>
			</ListItem>
		</Box>
	);
};
