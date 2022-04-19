import "./App.css";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { Contacts } from "./components/Contacts";
const client = new GraphQLClient({
  url: "http://localhost:8000/graphql",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <div className="App">
        <input />
        <Contacts />
      </div>
    </ClientContext.Provider>
  );
}

export default App;
