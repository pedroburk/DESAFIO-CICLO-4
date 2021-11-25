import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página inicial</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-cliente" className="m-auto btn btn-outline-primary btn-sm">Listar clientes</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-pedido" className="m-auto btn btn-outline-primary btn-sm">Listar pedido</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-servico" className="m-auto btn btn-outline-primary btn-sm">Listar serviço</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
