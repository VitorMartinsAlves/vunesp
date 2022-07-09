import React from "react";
import "../index.css";
import Header from '../componentes/Header'



export const admin = () => {
    var value = 0
    return (
        <>
            <Header />
            <div className="container">
                <h1>Registrar Concursos</h1>
                <form onSubmit={null}>
                    <imput type="text" value={value} />

                </form>
            </div>
        </>)
}

export default admin;