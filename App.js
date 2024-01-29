import React from "react";
import StackNavigator from "./src/navigator/StackNavigator";
import { PersistProvider , ReactQueryProvider, ReduxProvider} from "./src/providers";

export default function App() {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <PersistProvider>
          <StackNavigator />
        </PersistProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}
