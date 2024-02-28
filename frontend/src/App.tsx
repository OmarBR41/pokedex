import { QueryProvider } from "@/providers/QueryProvider";
import { RouterProvider } from "@/providers/RouterProvider";

function App() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
}

export default App;
