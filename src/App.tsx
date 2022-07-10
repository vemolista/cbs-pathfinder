import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { CourseList } from "./components/course-list";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box textAlign={"center"} fontSize={"3xl"} padding={10}>
				The most beautiful pathfinder (there is literally no other)
			</Box>
			<CourseList />
		</Box>
	</ChakraProvider>
);
