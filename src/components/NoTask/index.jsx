import { Container } from "./style"
import { TbClipboardList } from "react-icons/tb";
export default function NoTask() {

    return (
        <Container>
            <TbClipboardList />

            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>

        </Container>
    )
}