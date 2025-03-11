import Home from "./components/paginas/home/Home";
import NotFound from "./components/paginas/404/NotFound";
import CadastrarAluno from "./components/paginas/aluno/CadastrarAluno";
import ListarAluno from "./components/paginas/aluno/ListarALuno"
import EditarAluno from "./components/paginas/aluno/EditarAluno"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/listar-aluno" element={<ListarAluno/>} />
          <Route path="/cadastrar-aluno" element={<CadastrarAluno/>} />
          <Route path="/editar-aluno/:id" element={<EditarAluno/>} />
          {/*Rota para página 404*/}
          <Route path="*" element={<NotFound/>} />
          {/*Rota para página home*/}
          <Route path="/" element={<ListarAluno/>} />
        </Routes>

    </>
  );
}

export default App;
