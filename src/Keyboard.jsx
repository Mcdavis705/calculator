

function Keyboard({ click }) {
    // keyboard styling
    const keyboardStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        gap: "10px",
        height: "300px",
        width: "300px",
        margin: "10px",
    };

    const rows = [
        ["C", "%", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ];
    return (
        <>
            <div style={keyboardStyle} >
                {rows.map((row, i) => (
                    <div key={i} className="btn-group">
                        {row.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => click(btn)}
                                className="btn btn-outline-primary"
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                ))}
                {/* <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={()=> click("C")} type="button" class="btn btn-outline-primary">C</button>
                    <button onClick={()=> click("%")} type="button" class="btn btn-outline-primary">%</button>
                    <button onClick={()=> click("/")} type="button" class="btn btn-outline-primary">/</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={()=> click("7")} type="button" class="btn btn-outline-primary">7</button>
                    <button onClick={()=> click("8")} type="button" class="btn btn-outline-primary">8</button>
                    <button onClick={()=> click("9")} type="button" class="btn btn-outline-primary">9</button>
                    <button onClick={()=> click("*")} type="button" class="btn btn-outline-primary">X</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={()=> click("4")} type="button" class="btn btn-outline-primary">4</button>
                    <button onClick={()=> click("5")} type="button" class="btn btn-outline-primary">5</button>
                    <button onClick={()=> click("6")} type="button" class="btn btn-outline-primary">6</button>
                    <button onClick={()=> click("-")} type="button" class="btn btn-outline-primary">-</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={()=> click("1")} type="button" class="btn btn-outline-primary">1</button>
                    <button onClick={()=> click("2")} type="button" class="btn btn-outline-primary">2</button>
                    <button onClick={()=> click("3")} type="button" class="btn btn-outline-primary">3</button>
                    <button onClick={()=> click("+")} type="button" class="btn btn-outline-primary">+</button>
                </div> <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={()=> click("0")} type="button" class="btn btn-outline-primary">0</button>
                    <button onClick={()=> click(".")} type="button" class="btn btn-outline-primary">.</button>
                    <button onClick={()=> click("=")} type="button" class="btn btn-outline-primary">=</button>
                </div> */}
            </div>
        </>
    )
}

export default Keyboard;