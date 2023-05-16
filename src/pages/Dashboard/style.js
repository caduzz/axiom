import styled from 'styled-components'

export const DashboardMain = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    background-color: #272934;

    .navBarLateral {
        background-color: rgb(31, 33, 41);
        border-right: 1px solid rgb(49, 52, 66);
        width: 350px;

        .barLateralTop {
            padding: 15px;
            display: flex;
            .closeButton {
                border: none;
                background-color: transparent;
            }
        }
        
        .contentListCommands {
            padding: 19px;
            display: flex;
            flex-direction: column;
            padding-top: 6px;

            .category {
                border-radius: 6px;
                padding: 14px;
                border: none;
                background-color: #17181E;
                margin-bottom: 15px;
                color: #fff;
                ::placeholder {
                    color: #8e92a8;
                    opacity: 1;
                }
            }
            .listCommands {
                width: 100%;
                color: #8e92a8;
                list-style: none;

                li {
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;
                    border-radius: 5px;
                    background-color: rgb(39, 41, 52);
                    padding: 9px 15px;

                    margin-top: 15px;

                    .iconArea {
                        margin: 0;
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
    }

    .contentPage{
        width: 100%;
        height: 100%;

        .navBarTop {
            height: 50px;
            background-color: rgb(31, 33, 41);
            color: #fff;
            padding: 11px;
        }
        
        .contentCommands {
            height: calc(100% - 126px);
            overflow: auto;
            padding: 25px;
        }
    }
`