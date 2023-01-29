import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins antialiased h-screen bg-gray-50">
        <Main />
      </div>
    </BrowserRouter>
  );
}
