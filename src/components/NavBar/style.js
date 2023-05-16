import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    padding: 10px 0;

    background-color: #141424;
    border-bottom: 1px solid #fff2;

    a {
        text-decoration: none;
    }

    .navArea {
        width: 80%;

        display: flex;
        justify-content: space-between;

        .leftCommands {
            height: 100%;
            display: flex;
            align-items: center;

            .aItens {
                margin-left: 30px;
                display: flex;
                .iten {
                    font-size: 16px;
                    color: #8e92a8;
                    margin-right: 35px;
                    transition: 0.2s;

                    :hover { 
                        color: #ffffff;
                    }
                }
            }
        }

        .rightCommands{
            display: flex;
            align-items: center;
            a{
                display: flex;
                align-items: center;
                font-size: 14px;
                height: 25px;
                padding: 8px 18px;
                border-radius: 8px;
                margin-left: 18px;
                transition: 0.2s;
            }
            .premiumBtn {
                span {
                    margin-left: 8px;
                }
                color: #fbe373;
                background-color: #342c24;
                :hover {
                    background-color: #54442c;
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