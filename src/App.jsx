import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './componentes/error404';
import Inicio from './componentes/inicio';
import Blog from './componentes/blog';
import Post from './componentes/post';
import AcercaDe from './componentes/acerca_de';
import Header from './componentes/header';
import styled from 'styled-components';


function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
          <Header/>
          <Main>
            <Routes>
              <Route path='*' element={<Error404/>}/>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/post/:id' element={<Post/>}/>
              <Route path='/acerca-de' element={<AcercaDe/>}/>
            </Routes>
          </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-widh: 700px;
`;

const Main = styled.main`
  backfround: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.2);
`;

export default App;
