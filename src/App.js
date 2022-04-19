import "./App.css";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Contacts, Input } from "./components";
const client = new GraphQLClient({
  url: "http://localhost:8000/graphql",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <div className="App">
        <Input />
        <Contacts />
      </div>
    </ClientContext.Provider>
  );
}

export default App;
