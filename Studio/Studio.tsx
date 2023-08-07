import { Flex, Center, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Konva from 'konva';
import Frame from './Frame';
import Navbar from './Navbar/Navbar';
import Toolbar from './Toolbar';
import EditingToolbar from './EditingToolbar/EditingToolbar';
import { NAVBAR_HEIGHT, EDITING_TOOLBAR_HEIGHT, FRAME_CONTAINER_PADDING } from '~/consts/components';

const Studio = () => {
  const stageRef = React.useRef<Konva.Stage>(null);

  const [navbarHeight, setNavbarHeight] = useState(NAVBAR_HEIGHT);
  const [editingToolbarHeight, setEditingToolbarHeight] = useState(EDITING_TOOLBAR_HEIGHT);

  useEffect(() => {
    const navbar = document.querySelector('#navbar') as HTMLElement;
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const editingToolbar = document.querySelector('#editing_toolbar') as HTMLElement;
    if (editingToolbar) {
      setEditingToolbarHeight(editingToolbar.offsetHeight);
    }
  }, []);

  return (
    <Box maxH="100vh">
      <Navbar />
      <Flex h={`calc(100vh - ${navbarHeight}px)`} w="100%">
        <Toolbar stageRef={stageRef} />

        <Box flexGrow="1">
          <EditingToolbar />
          <Center
            h={`calc(100vh - ${navbarHeight}px - ${editingToolbarHeight}px)`}
            bgColor="gray.200"
            padding={`${FRAME_CONTAINER_PADDING}px`}
          >
            <Frame stageRef={stageRef} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Studio;
