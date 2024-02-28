import { Header } from "@/components/layout/Header";
import { QueryProvider } from "@/providers/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <Header />
    </QueryProvider>
  );
}

export default App;
