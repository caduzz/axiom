import styled from 'styled-components'

const logo = process.env.PUBLIC_URL + '/logo.png'

const EmbedBotAvatar = styled.a`
    display: flex;
    height: 45px;
    align-items: center;
    text-decoration: none;
    font-family: 'Kanit', sans-serif;

    .botLogo {
        z-index: 1;
        width: 40px;
        height: 40px;
        position: relative;
        border-radius: 50%;
        margin-right: 14px;
        ${ p =>
            p.animated ?
            `
                animation-name: box-animation;
                animation-duration: 4s;
                animation-iteration-count: infinite;
            `
            :
            ''
        }
    }
    .botName {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
    }

    @keyframes box-animation {
        0% { box-shadow: 0px 0px 30px 2px #493e6a;}
        50% { box-shadow: 0px 0px 70px 2px #493e6a;}
        100% { box-shadow: 0px 0px 30px 2px #493e6a; }
    }
`

export const BotAvatar = ({animated}) => {
    return(
        <EmbedBotAvatar animated={animated} href='/'>
            <img className="botLogo" src={logo} alt="Logo Bot" ></img>
            <p className="botName">AXIOM</p>
        </EmbedBotAvatar>
    )
}