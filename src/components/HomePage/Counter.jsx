import { useState } from "react"
import { Badge, Button } from "react-bootstrap";


const Counter = () => {
    const [contador, setContador] = useState(0);
    const digits = String(contador).padStart(4, "0").split("")
    return (
        <>
            <h1 className="text-center mb-4">Counter</h1>
            <div className="d-flex justify-content-center">
                {digits.map((digito, index) => (
                    <h2 key={index} className="m-1">
                        <Badge style={{ color: parseInt(contador) % 2 === 0 ? "salmon" : "gold" }}>{digito}</Badge>
                    </h2>
                ))}
                <Button onClick={() => setContador(contador + 1)} className="btn btn-primary m-2">+1</Button>
                <Button onClick={() => setContador(contador - 1)} className="btn btn-warning m-2">-1</Button>

            </div>
            <p className="mt-5">Click on the header ;-)</p>
        </>
    )
}

export default Counter