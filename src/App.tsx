import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { digitalManagement } from "./declarations/undergraduateProgrammes/digitalManagement";
import { Something } from "./components/something";
import { informationSystems } from "./declarations/graduateProgrammes/informationSystems";
import { sumECTSbyArea } from "./helpers/sumECTSByArea";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box textAlign={"center"} fontSize={"3xl"}>
				The most beautiful pathfinder (there is literally no other)
			</Box>
			<Something
				rule={informationSystems.requirements!}
				record={sumECTSbyArea(digitalManagement.mandatoryCourses)}
			></Something>
		</Box>
	</ChakraProvider>
);
