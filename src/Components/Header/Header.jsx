import "./index.scss";

import React from "react";

const Header = ({focus}) => {
    return (
        <section className="Header">
            <ul className="Header__menu-itens">
                <li className={focus=="organizations"?`Header__menu-itens--focus`:null}><a href="/">Organização</a></li>
                <li className={focus=="tasks"?`Header__menu-itens--focus`:null}><a href="/tasks">Tarefas</a></li>
                
            </ul>
        </section>
    )
};

export default Header;
