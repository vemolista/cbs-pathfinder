import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { digitalManagement, informationSystems } from "./declarations/data";
import { ProgrammeLevel } from "./declarations/types";
import { showRewards } from "./components/showRewards";
import { RequirementsBox } from "./components/requirementsBox";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box>
				{ProgrammeLevel[digitalManagement.programmeLevel]}:{" "}
				{digitalManagement.title}
			</Box>
			{showRewards(digitalManagement.mandatoryCourses)}
			<Box>
				<Box>
					{`${ProgrammeLevel[informationSystems.programmeLevel]}: ${
						informationSystems.title
					}`}
				</Box>
				<RequirementsBox requirements={informationSystems.requirements} />
			</Box>
		</Box>
	</ChakraProvider>
);
