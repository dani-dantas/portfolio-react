import './styles.css'
import download from '../../assets/icones/download.png'
import linkedin from '../../assets/icones/linkedin.png'

const Button = ({buttonType}) => {
    const getButton = () => {
        switch (buttonType) {
            case 'downloadResume':
                return {
                    icon: download,
                    href: '/Curriculo_Daniella_Dantas.docx',
                    download: '/Curriculo_Daniella_Dantas.docx',
                    buttonText: 'Baixar currículo',
                    colorClass: 'downloadBtn'
                }

            case 'downloadCompleteResume':
                return {
                    icon: download,
                    href: '/Curriculo_Daniella_Dantas.docx',
                    download: '/Curriculo_Daniella_Dantas.docx',
                    buttonText: 'Baixar Currículo Completo',
                    colorClass: 'downloadBtn'
                }

            case 'linkedin':
                return {
                    icon: linkedin,
                    href: 'https://www.linkedin.com/in/daniella-dantas/',
                    download: null,
                    buttonText: 'Confira o meu LinkedIn',
                    colorClass: 'linkedinBtn'
                }
        }
    }

    return (
        <div className={`button ${getButton().colorClass}`}>
            <img src={getButton().icon} alt=""/>
            <a 
                href={getButton().href} 
                download={getButton().download}
                target={getButton().download ? null : '_blank'}
            >
                {getButton().buttonText}</a>
        </div>
    )
}

export default Button