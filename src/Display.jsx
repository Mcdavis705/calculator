

function Display({ display }) {
    const displayStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "Lightblue",
        color: "#fff",
        fontSize: "3rem",
        textAlign: "end",
        padding: "10px",     
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "inset 0 0 5px #000",
        overflow: "hidden"
    };


      return (
        <div style={displayStyle}>
            {display}
        </div>
    );
}

export default Display;
