import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuList,
  Spacer,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { LOGO_FONT } from "~/consts/components";
import CanvasCreate from "../canvas-actions/CanvasCreate";
import CanvasesView from "../canvas-actions/CanvasesView";
import CanvasUpdate from "../canvas-actions/CanvasUpdate";

function Navbar() {
  return (
    <Flex
      bgGradient="linear(to-r, #439a8a, #6abe45 )"
      py="2"
      align="center"
      id="navbar"
    >
      <Box>
        <Heading
          fontSize="28px"
          fontWeight="400"
          userSelect="none"
          color="white"
          ml="20px"
          mb="0"
          fontFamily={LOGO_FONT}
        >
          canvanaserra
        </Heading>
      </Box>
      <Spacer />
      <HStack sx={{ pr: 4 }} spacing={4}>
        <Box>
          <Menu>
            <MenuList>
              <VStack spacing={4} sx={{ px: 4 }}>
                <CanvasCreate />
                <CanvasUpdate />
                <CanvasesView />
              </VStack>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Navbar;
