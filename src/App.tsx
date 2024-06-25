import { createSignal } from "solid-js";

// Components
import Card from "./components/card";
import CardMenu from "./components/card-menu";
import CardActions from "./components/card-actions";

function App() {
  const [focused, setFocused] = createSignal(false);

  return (
    <div
      data-focused={focused()}
      class="min-h-svh data-[focused=true]:overflow-clip data-[focused=true]:max-h-svh"
    >
      <div class="flex justify-center items-center h-48 sticky top-0">
        <Card focused={focused} setFocused={setFocused} />
      </div>
      <CardActions focused={focused} />
      <CardMenu focused={focused} />
    </div>
  );
}

export default App;
