import React, {useState} from 'react'
import '../css/Calculator.css'

export default function Calculator() {
    let [todo, setTodo] = useState("")
    if (todo === "*" | "+" | "-" | "/") {
        setTodo(todo = "NaN")
    }
    return (
        <div className="w-100 h-100 d_body">
            <input type="text" name="ans" className="w-100 text-white text-right" id="d" placeholder="0"  value={todo} readonly/>
            <table className="table table-bordered fixed-bottom">
                <thead>
                    <tr className="">
                        <button className="align-middle" value="c" onClick={() => setTodo(todo = "")}>AC</button>
                        <button className="align-middle "  onClick={() => setTodo(todo = todo.substr(0, todo.length - 1))}>clear</button>
                        <button className="align-middle" value="%" onClick={() => setTodo(todo += "%")}>%</button>
                        <button className="align-middle entity" value="/" onClick={() => setTodo(todo += "/")}>/</button>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-middle">
                        <button className="align-middle" value="7" onClick={() => setTodo(todo += "7")} >7</button>
                        <button className="align-middle" value="8" onClick={() => setTodo(todo += "8")} >8</button>
                        <button className="align-middle" value="9" onClick={() => setTodo(todo += "9")} >9</button>
                        <button className="align-middle entity" value="*" onClick={() => setTodo(todo += "*")} >*</button>
                    </tr>
                    <tr>
                        <button className="align-middle" value="4" onClick={() => setTodo(todo += "4")} >4</button>
                        <button className="align-middle" value="5" onClick={() => setTodo(todo += "5")} >5</button>
                        <button className="align-middle" value="6" onClick={() => setTodo(todo += "6")} >6</button>
                        <button className="align-middle entity" value="-" onClick={() => setTodo(todo += "-")} >-</button>
                    </tr>
                    <tr>
                        <button className="align-middle" value="1" onClick={() => setTodo(todo += "1")} >1</button>
                        <button className="align-middle" value="2" onClick={() => setTodo(todo += "2")} >2</button>
                        <button className="align-middle" value="3" onClick={() => setTodo(todo += "3")} >3</button>
                        <button className="align-middle entity" value="+" onClick={() => setTodo(todo += "+")} >+</button>
                    </tr>
                    <tr>
                        <button className="align-middle w-50" value="0" onClick={() => setTodo(todo += "0")}  colspan="2">0</button>
                        <button className="align-middle" value="." onClick={() => setTodo(todo += ".")} >.</button>
                        <button className="align-middle entity" value="=" onClick={() => setTodo(todo = eval(todo).toString())} >=</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}