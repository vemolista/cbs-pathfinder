import { ChakraProvider, Box, theme } from "@chakra-ui/react";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box padding={10} fontSize="xl" style={{ border: "3px solid black" }}>
			<Box textAlign={"center"} fontSize={"3xl"}>
				The most beautiful pathfinder (there is literally no other)
			</Box>
		</Box>
	</ChakraProvider>
);
