import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./Intro/Introduction";
import Prods from "./products/Prods";

function App() {
  return (
    <div className="App bg-gray-200 h-[100vh] w-[100vw] overflow-x-hidden">

      <BrowserRouter>
       <Routes>
         <Route path="/" Component={Introduction}/>
         <Route path="/products" Component={Prods}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
