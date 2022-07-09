import React from 'react'
import "../index.css";

export default function Header() {
    return (
        <header className="bgH">
            <div className='container'>

                <nav>
                        <ul>
                    <div className='flex2'>
                            <li>
                                <a href='./'><img className="logo" src="https://www.vunesp.com.br/img/logo.png" alt="data" /></a>
                            </li>
                            <li><a href='#'>INSTITUCIONAL</a></li>
                            <li><a href='#'>PORTAL</a></li>
                            <li><a href='#'>ÁREA DO CANDIDATO</a></li>

                    </div>
                        </ul>
                </nav>
            </div>

        </header>
    )
}