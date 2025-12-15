import React from "react";
import { ThemeProvider } from "./src/core/theme/ThemeProvider";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
