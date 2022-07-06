import { ChakraProvider, Box, theme, Button } from "@chakra-ui/react";
import { digitalManagement } from "./data";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box>{digitalManagement.programmeLevel}</Box>
			{digitalManagement.mandatoryCourses.map((course) => (
				<Box>
					<b>Code:</b> {course.code} <b>Title:</b> {course.title}
				</Box>
			))}
		</Box>
	</ChakraProvider>
);
