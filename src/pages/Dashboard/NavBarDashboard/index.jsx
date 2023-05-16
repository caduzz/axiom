import { Container } from "./style"

import { FaCrown } from 'react-icons/fa'

export const NavBarDashboard = () => {
    return (
        <Container>
            <div className="navArea">
                <div className="rightCommands">
                    <a href="/#" className="premiumBtn">
                        <span>Premium</span> <FaCrown size={20} />
                    </a>
                    <a href="/#" className="loginDiscord">
                        <span>Login with Discord</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}