import { Container } from "./style"
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Button({hover, ...rest}) {

    return (
        <Container hover={hover} {...rest}>
            <p>Criar</p>

            <IoIosAddCircleOutline/>
        </Container>
    )
}