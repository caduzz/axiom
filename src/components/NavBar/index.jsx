import { BotAvatar } from "../BotAvatar"
import { Container } from "./style"

import { FaCrown } from 'react-icons/fa'

export const NavBar = () => {
    return (
        <Container>
            <div className="navArea">
                <div className="leftCommands">
                    <BotAvatar animated={true} />
                    <div className="aItens">
                        <a 
                            href="/commands"
                            className="iten"
                        >
                            Commands
                        </a>
                    </div>
                </div>
                <div className="rightCommands">
                    <a href="/#" className="premiumBtn">
                        <FaCrown size={20} /> <span>Premium</span>
                    </a>
                    <a href="/#" className="loginDiscord">
                        <span>Login with Discord</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}