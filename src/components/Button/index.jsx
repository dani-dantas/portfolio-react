import './styles.css'
import download from '../../assets/icones/download.png'
import linkedin from '../../assets/icones/linkedin.png'

const Button = ({ buttonType }) => {
    const getButton = () => {
        switch (buttonType) {
            case 'downloadResume':
                return {
                    icon: download,
                    href: '/Curriculo_Daniella_Dantas.docx',
                    download: 'Curriculo_Daniella_Dantas.docx',
                    buttonText: 'Baixar curriculo',
                    colorClass: 'downloadBtn'
                }

            case 'downloadCompleteResume':
                return {
                    icon: download,
                    href: '/Curriculo_Daniella_Dantas.docx',
                    download: 'Curriculo_Daniella_Dantas.docx',
                    buttonText: 'Baixar Curriculo Completo',
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

            default:
                return {
                    icon: download,
                    href: '#',
                    download: null,
                    buttonText: '',
                    colorClass: ''
                }
        }
    }

    const button = getButton()

    return (
        <div className={`button ${button.colorClass}`}>
            <img src={button.icon} alt="" />
            <a
                href={button.href}
                download={button.download}
                target={button.download ? undefined : '_blank'}
                rel={button.download ? undefined : 'noreferrer'}
            >
                {button.buttonText}
            </a>
        </div>
    )
}

export default Button
