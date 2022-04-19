import "./App.css";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { RecoilRoot } from "recoil";
import { Home } from "pages";

const client = new GraphQLClient({
  url: "http://localhost:8000/graphql",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <RecoilRoot>
        <div className="App">
          <Home />
        </div>
      </RecoilRoot>
    </ClientContext.Provider>
  );
}

export default App;
