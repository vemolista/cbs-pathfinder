import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { digitalManagement } from "./declarations/data";
import { ProgrammeLevel } from "./declarations/types";
import { showRewards } from "./components/showRewards";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box>
				{ProgrammeLevel[digitalManagement.programmeLevel]}:{" "}
				{digitalManagement.title}
			</Box>
			{showRewards(digitalManagement.mandatoryCourses)}
		</Box>
	</ChakraProvider>
);
