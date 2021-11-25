import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Menu } from "./components/Menu";
import { ListarCliente } from "./views/Cliente/ListarCliente";
import { Home } from "./views/Home";
import { ListarServico } from "./views/Servico/ListarServico";
import { Item } from "./views/Servico/Item";
import { Cadastrar } from "./views/Servico/Cadastrar";
import { CadastrarCliente } from "./views/Cliente/CadastrarCliente";
import { PedidosCliente } from "./views/Cliente/PedidosCliente";
import { EditarPedido } from "./views/Cliente/EditarPedido";
import { ListarPedido } from "./views/Pedido/ListarPedido";


function App() {
  return (
    <div >
      <Menu />
      <Router>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/listar-cliente" element={< ListarCliente />} />
          <Route path="/listar-pedido/:id" element={< Item />} />
          <Route path="/listar-servico" element={< ListarServico />} />
          <Route path="/cadastrarservico" element={< Cadastrar />} />
          <Route path="/cadastrar-cliente" element={< CadastrarCliente />} />
          <Route path="/pedidos-clientes/:id/" element={< PedidosCliente />}/>
          <Route path="/editar-pedido/:id/" element={< EditarPedido />}/>
          <Route path="/listar-pedido" element={< ListarPedido />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
