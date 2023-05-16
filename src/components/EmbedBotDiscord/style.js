import styled from 'styled-components'
const banner = process.env.PUBLIC_URL + '/banner.gif'

export const Embed = styled.div`
    width: 450px;
    background-color: #141424;
    border-radius: 10px;    
    //box-shadow: 0px 0px 80px -55px blue;

    .headerEmbed {
        position: relative;
        .bannerEmbed {
            width: 100%;
            height: 80px;
            background: url(${banner});  
            background-repeat: no-repeat;
            background-position: top left;
            background-size: cover;
            background-color: #493e6a;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .logoEmbed {
            img {
                left: 30px;
                top: 20px;
                position: absolute;
                border: 8px solid #141424;
                border-radius: 50%;
                height: 100px;
            }
            span {
                position: absolute;
                left: 100px;
                top: 100px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #3cfc94;
                border: 6px solid #141424;
            }
        }
        .bgEmbed {
            padding: 0 15px;
            height: 65px;
 
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .iconBotCommands {
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Expletus Sans', cursive;
                font-size: 12px;
                color: #3cfc94;
                padding: 2px;
                width: 28px;
                height: 28px;
                background-color: #111214;
                border-radius: 5px;
            }
        }
    }
    .bodyEmbed {
        padding: 15px;
        padding-top: 0;

        .contentEmbed {
            padding: 4px 12px;
            border-radius: 10px;
            background-color: #111214;

            .botName {
                padding-block: 10px;
                display: flex;
                align-items: center;

                font-weight: bold;
                color: #f4f4fc;
                font-size: 16px;
                border-radius: 5px;

                .tagPlayer {
                    font-size: 18px;
                    color: #9e99a9;
                }
                .botTag {
                    margin-left: 5px;
                    padding: 3px 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 3px;
                    font-size: 8px;
                    background-color: #3c94fc;
                }
            }
            .infoContent {
                border-top: 1px solid #fff2;
                .btnText {
                    margin-right: 5px;
                }
                .infoInvitButton {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    margin: 10px 0;
                    padding: 10px 18px;

                    font-size: 13px;
                    font-weight: bold;
                    color: #ffffff;
                    background-color: #3c94fc;
                    border-radius: 4px;

                    transition: 0.2s;
                    text-decoration: none;
                    :hover {
                        background-color: #0474fc;
                    }
                }
                .infoSobre{
                    padding-block: 4px;
                    .sobreTitle {
                        color: #f4f4fc;
                        font-size: 14px;
                        text-transform: uppercase;
                    }
                    .sobreText  {
                        padding-block: 16px;
                        font-weight: 520;
                        color: #f1f1fc;
                        font-size: 13px;
                        span {
                            font-family: 'arial';
                            padding: 3px;
                            background-color: #3339;
                            border-radius: 2px;
                        }
                        .sobreCommand {
                            font-weight: 500;
                            font-family: Poppins;
                            font-size: 10px;

                            padding: 5px;
                            border-radius: 2px;
                            margin-right: 6px;
                            background-color: #7778
                        }
                    }
                }
            }
        }
    }
`