import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import "./styles.css"

interface PageHeaderProps {
    children: ReactNode;
    title: string;
    description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logo} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>

                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}
