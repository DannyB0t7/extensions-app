import React from "react";
import Header from "./components/Header";
import ExtensionList from "./components/ExtensionList";
import ExtensionListContext from "./store/ExtensionListContext";

function App() {
  return (
    <ExtensionListContext>
      <div className="m-auto max-w-5xl px-[1rem] py-[2rem] text-white">
        <Header />
        <ExtensionList />
      </div>
    </ExtensionListContext>
  );
}

export default App;
