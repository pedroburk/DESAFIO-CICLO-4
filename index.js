import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        nascimento: ''
    });

    const valorInput = e => setCliente({...cliente, [e.target.name] : e.target.value})

    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.post(api+"/cliente", cliente, {headers})
            .then((response)=>{
                console.log(response.data.message)
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.")
            });
    }

    return (
        <div>
            <Container>
                <div>
                    <h1>Novo cliente</h1>
                </div>
                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="digite o nome do cliente"
                            onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data de nascimento</Label>
                        <Input type="text" name="nascimento" placeholder="informe a data de nascimento"
                            onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="d-flex">
                        <Button type="submit" outline color="primary">Cadastrar</Button>
                        <Button type="reset" outline color="primary">Limpar</Button>
                    </FormGroup>
                </Form>
            </Container>

        </div>
    )
}
