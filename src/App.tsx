import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Header />
      <body>
        <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 
        <Home />
      </body>
    </div>
  );
}
