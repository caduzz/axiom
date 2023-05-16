import { HiExternalLink } from 'react-icons/hi'
import { Embed } from './style'

const logo = process.env.PUBLIC_URL + '/logo.png'
const icon = '{ / }'

export const EmbedBotDiscord = () => {
    return(
        <Embed>
            <div className='headerEmbed'>
                <div className='bannerEmbed' />
                <div className='logoEmbed'>
                    <img src={logo} alt="banner" />
                    <span></span>
                </div>
                <div className='bgEmbed'>
                    <div className='iconBotCommands'>
                        <span>{icon}</span>
                    </div>
                </div>
            </div>
            <div className='bodyEmbed'>
                <div className='contentEmbed'>
                    <p className='botName'>
                        Axiom
                        <span className='tagPlayer'>#0804</span> 
                        <span className='botTag'>BOT</span>
                    </p>
                    <div className='infoContent'>
                        <a href="https://discord.com/api/oauth2/authorize?client_id=847288977312317452&permissions=8&scope=bot" target='_blank' rel="noreferrer" className='infoInvitButton'>
                            <span className='btnText'>Add to Discord</span><HiExternalLink size={15} color='#ffffff'/>
                        </a>
                        <div className='infoSobre'>
                            <h1 className='sobreTitle'>Sobre Min</h1>
                            <p className='sobreText'>
                                Sou um bot chamado <span>Axiom</span> criado com intuito de enterter vocês.
                            </p>
                        </div>
                        <div className='infoSobre'>
                            <h1 className='sobreTitle'>Experimente meus comandos</h1>
                            <p className='sobreText'>
                                <span className='sobreCommand'>/avatar</span>
                                <span className='sobreCommand'>/chat</span>
                                <span className='sobreCommand'>/imagine</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Embed>
    )
}