import styled from 'styled-components'

export const Container = styled.nav`
    height: 55px;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    background-color: rgb(31, 33, 41);

    a {
        text-decoration: none;
    }

    .navArea {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        
        .rightCommands {
            display: flex;
            a{
                display: flex;
                align-items: center;
                font-size: 12px;
                font-weight: 400;
                padding: 6px 18px;
                border-radius: 6px;
                margin-left: 18px;
                transition: 0.2s;
            }
            .premiumBtn {
                span {
                    margin-right: 8px;
                }
                color: rgb(255 195 79);
                background-color: rgba(255, 195, 79, 0.2);
                :hover {
                    background-color: rgba(255, 195, 79, 0.3);
                }
            }
            .loginDiscord {
                color: #ffffff;
                background-color: #3c94fc;
                :hover {
                    background-color: #0474fc;
                }
            }
        }
    }
`