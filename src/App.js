import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./Intro/Introduction";
import Prods from "./products/Prods";

function App() {
  return (
    <div className="App bg-gray-200 h-[100vh] w-[100vw] overflow-x-hidden">
      {/* react router setup  */}
      <BrowserRouter>
        <Routes>
          {/* main intro page */}
          <Route path="/" Component={Introduction} />
          {/* products page   */}
          <Route path="/products" Component={Prods} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
