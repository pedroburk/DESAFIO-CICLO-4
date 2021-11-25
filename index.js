import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarPedido = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState('');
    const [ClienteId, setClienteId] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const edtPedido = async e => {
        e.preventDeFault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/pedido/" + id,
            { id, data, ClienteId }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Alteraçao feita com sucesso.'
                })
                console.log(response.data.type);
                console.log(response.data.message);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível acessar a API.'
                });
            });
    };

    useEffect(() => {
        const getPedido = async () => {
            await axios(api + "/pedido/" + id)
                .then((response) => {
                    setId(response.data.pedido.id);
                    setData(response.data.pedido.data);
                    setClienteId(response.data.pedido.ClienteId);
                })
                .catch(() => {
                    console.log("Erro: não foi possível se conectar a API.")
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-cliente" className="m-auto btn btn-outline-primary btn-sm">Listar clientes</Link>
                    </div>
                    <hr className="m-1" />
                    {status.type === 'error' ? <Alert color="danger">
                        {status.message}</Alert> : ""}
                    {status.type === 'success' ? <Alert color="success">
                        {status.message}</Alert> : ""}
                </div>
                
                <Form className="p-2" onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                        <Label>ID do Pedido</Label>
                        <Input type="text" name="id" placeholder="id do pedido"
                            defaultValue={id} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data do Pedido</Label>
                        <Input type="text" name="data" placeholder="data do pedido"
                            value={data}
                            onChange={e => setData(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>ID do Cliente</Label>
                        <Input type="text" name="ClienteId" placeholder="id do cliente"
                            defaultValue={ClienteId} />
                    </FormGroup>
                    <FormGroup className="d-flex">
                        <Button type="submit" outline color="warning">Salvar</Button>
                        <Button type="reset" outline color="primary">Limpar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
};
