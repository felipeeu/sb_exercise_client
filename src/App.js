import "./App.css";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Contacts, Input } from "./components";
import { RecoilRoot } from "recoil";

const client = new GraphQLClient({
  url: "http://localhost:8000/graphql",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <RecoilRoot>
        <div className="App">
          <Input />
          <Contacts />
        </div>
      </RecoilRoot>
    </ClientContext.Provider>
  );
}

export default App;
