import {
	UnorderedList,
	Input,
	InputGroup,
	InputLeftAddon,
	Heading,
	Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Programme } from "../declarations/types";
import { digitalManagement } from "../declarations/undergraduateProgrammes/digitalManagement";
import { sociology } from "../declarations/undergraduateProgrammes/sociology";
import { SingleProgramme } from "./single-programme";

interface ProgrammeListProps {
	currentProgramme: Programme | undefined;
	setCurrentProgramme: React.Dispatch<
		React.SetStateAction<Programme | undefined>
	>;
}

export const ProgrammeList = (props: ProgrammeListProps) => {
	const { currentProgramme, setCurrentProgramme } = props;
	const programmes = [digitalManagement, sociology];

	const [searchValue, setSearchValue] = useState("");

	const search = () => {
		const parsedSearchValue = searchValue.toLowerCase();

		return programmes.filter((programme) =>
			programme.title.toLowerCase().includes(parsedSearchValue)
		);
	};

	return (
		<Flex
			border={"1px solid lightgray"}
			borderRadius={"lg"}
			padding={5}
			flexDirection={"column"}
		>
			<InputGroup maxWidth={"60%"} alignSelf={"flex-end"} padding={5}>
				<InputLeftAddon children={"Search by programme title"} />
				<Input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</InputGroup>
			<Heading as={"h2"}>Undergraduate Programmes</Heading>
			<UnorderedList styleType={"none"} spacing={2} margin={5}>
				{search().map((programme, i) => (
					<SingleProgramme
						programme={programme}
						key={programme.title + i}
						currentProgramme={currentProgramme}
						setCurrentProgramme={setCurrentProgramme}
					/>
				))}
			</UnorderedList>
		</Flex>
	);
};
