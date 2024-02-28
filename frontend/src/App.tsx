import { Header } from "@/components/layout/Header";
import { QueryProvider } from "@/providers/QueryProvider";
import { RouterProvider } from "@/providers/RouterProvider";

function App() {
  return (
    <QueryProvider>
      <Header />
      <RouterProvider />
    </QueryProvider>
  );
}

export default App;
