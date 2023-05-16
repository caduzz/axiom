import { BsDiscord } from 'react-icons/bs'
import styled from 'styled-components'

const BtnEnvit = styled.a `
    width: 170px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    padding: 15px 18px;
    border-radius: 8px;
    transition: 0.2s;
    background-color: #3c94fc;
    text-decoration: none;
    span {
        margin-left: 18px;
    }
    :hover {
        background-color: #0474fc;
    }
`


export const ButtonEnvitDiscord = () => {
    return(
        <BtnEnvit 
            href="https://discord.com/api/oauth2/authorize?client_id=847288977312317452&permissions=8&scope=bot" 
            target='_blank'
        >
            <BsDiscord size={25}/> <span>Add to Discord</span>
        </BtnEnvit>
    )
}