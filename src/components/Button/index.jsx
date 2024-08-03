import { Container } from "./style"
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Button({hover, click,...rest}) {

    return (
        <Container hover={hover} onClick={click} {...rest}>
            <p>Criar</p>

            <IoIosAddCircleOutline/>
        </Container>
    )
}