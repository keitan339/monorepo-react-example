import { Box } from "@mui/material";
import { useNow } from "@example/example-lib-core";
import { MyTextField, useWrapNow } from "@example/example-lib-ui";

function App() {
  const now = useNow();
  const wrapNow = useWrapNow();
  return (
    <div className="App">
      <MyTextField />
      <Box>{now}</Box>
      <Box>{wrapNow}</Box>
    </div>
  );
}

export default App;
