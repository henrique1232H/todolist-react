import { Container } from "./style"
import { MdOutlineDone } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Task({text, completed, done, remove}) {

    return (
        <Container done={done}>
            <div onClick={completed}>

                {
                    done ? <MdOutlineDone /> : ""
                }


                <button onClick={completed}>{done ? "Completado" : "Não completado"}</button>
            </div>


            <h3>{text}</h3>

            <button onClick={remove}>
                <FaRegTrashCan />
            </button>
        </Container>
    )

}