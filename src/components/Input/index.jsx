
import { Container } from "./style"
import { useState } from "react"


export default function Input({filled,...rest}) {


    return (
        <Container filled={filled} {...rest}>

            {filled && <p>Descrição da tarefa</p> }

            <input type="text" 
            placeholder={!filled ? "Adicione uma nova tarefa" : ""}/>
        </Container>
    )
}