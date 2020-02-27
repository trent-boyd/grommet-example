import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import { Notification } from "grommet-icons";

import AppBar from "components/AppBar";
import { theme } from "theme";

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            Example Grommet App
          </Heading>
          <Button
            icon={<Notification />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            APP BODY!
          </Box>
          {showSidebar && (
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              SIDEBAR!
            </Box>
          )}
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
