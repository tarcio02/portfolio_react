import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inicio from "./components/inicio";
import NavBar from "./components/navBar";
import SobreMim from "./components/sobreMim/sobreMim";
import Habilidades from "./components/habilidades/habilidades";
import MeusProjetos from "./components/meusProjetos/meusProjetos";
import GlobalStyled, { Container } from "./styles/global";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/sobremim",
    element: <SobreMim />
  },
  {
    path: "/Habilidades",
    element: <Habilidades />
  },
  {
    path: "/meusprojetos",
    element: <MeusProjetos />
  }
])

function App() {
  return (
    <Container>
      <GlobalStyled />
      <NavBar />
      <RouterProvider router={rotas}/>
    </ Container>
  );
}

export default App;
