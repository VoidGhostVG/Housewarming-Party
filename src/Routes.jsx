import React from 'react'
import Home from './Pages/Home'
import Cadastrar from './Pages/Cadastrar/Cadastrar'
import Convidados from './Pages/Convidados/Convidados'
import Sugestoes from './Pages/Sugestoes/Sugestoes'
import Perguntas from './Pages/Perguntas/Perguntas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "./Components/Menu";
import NotFound from './Pages/NotFound/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/convidados" element={<Convidados />} />
                <Route path="/sugestoes" element={<Sugestoes />} />
                <Route path="/perguntas" element={<Perguntas />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
