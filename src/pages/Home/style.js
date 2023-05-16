import styled from 'styled-components'

export const HomeMain = styled.div`
    width: 100%;
    height: 100vh;

    .bannerArea{
        width: 80%;
        height: calc(100vh - 91px);
        margin: auto;
        display: flex;
        
        .bannerInfo {
            width: 60%;
            height: 100%;
            
            display: flex;
            justify-content: center;
            flex-direction: column;

            h1 {
                color: #f4f4fc;
                font-size: 50px;
                margin-bottom: 32px;
            }
            p {
                color: #8e92a8;
                font-size: 20px;
                margin-bottom: 18px;
            }

            .bannerBtnArea {
                display: flex;

                .btnAbout {
                    margin-left: 15px;
                    border: none;
                    width: 100px;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 25px;
                    padding: 15px 18px;
                    border-radius: 8px;
                    transition: 0.2s;
                    background-color: #fff4;
                    text-decoration: none;

                    :hover {
                        background-color: #fff5;
                    }
                }
            }
        }
        .embedLeft {
            display: flex;
            align-items: center;
            justify-content: flex-end;
                            
            width: 45%;
        }
    }
`