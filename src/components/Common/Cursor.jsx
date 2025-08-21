import { useState ,useEffect } from "react";

const Cursor = () => {

    const [position, setPosition] = useState ({x:0, y:0});

    useEffect(()=> {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y:e.clientY});
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const cursorStyle = {
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "16px",
        height: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Warna lingkaran
        backdropFilter: "invert(100%)",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "50%",
        pointerEvents: "none", // Agar tidak mengganggu interaksi elemen lain
        transform: "translate(-50%, -50%)",
        zIndex: 1000, // Pastikan berada di atas elemen lain
    };

    return <div style={cursorStyle}></div>;
    
};

export default Cursor;