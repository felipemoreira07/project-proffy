

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'

export interface Teacher {
    id: number,
    name: string,
    subject: string,
    whatsapp: string,
    avatar: string,
    bio: string,
    cost: number
}



const TeacherItem = () => {
    

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/104106285?v=4" alt="Felipe Moreira"/>
                <div>
                    <strong>Felipe Moreira</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p> Entusiasta da resolução de problemas matemáticos, estou disposto a auxiliar 
                estudantes num melhor entendimento de contas e de lógicas.
            </p>
            <footer>
                <p>Preço/Hora <strong>$100,00</strong></p>
                <a
                    target="_blank"
                    href="https://wa.me/+5562998561039"
                    rel="noreferrer"
                >

                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;