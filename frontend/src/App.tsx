import { Header } from "@/components/layout/Header";
import { Pokedex } from "@/components/pokedex/Pokedex";
import { QueryProvider } from "@/providers/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <Header />

      <main>
        <Pokedex />
      </main>
    </QueryProvider>
  );
}

export default App;
