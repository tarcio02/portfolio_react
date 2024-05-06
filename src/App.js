import { createBrowserRouter, RouterProvider  } from "react-router-dom";

import NavBar from "./components/navBar";
import Inicio from "./components/inicio";
import SobreMim from "./components/sobreMim/sobreMim";
import Habilidades from "./components/habilidades/habilidades";
import MeusProjetos from "./components/meusProjetos/meusProjetos";
import GlobalStyled, { MainContainer } from "./styles/global";

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
  <>
    <GlobalStyled />
      <MainContainer>
        <NavBar />
        <RouterProvider router={rotas}/>
      </ MainContainer>
  </>
  );
}

export default App;
