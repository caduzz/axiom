import styled from 'styled-components'

export const HomeMain = styled.div`
    width: 100%;
    height: 100vh;

    .bannerArea{
        width: 80%;
        height: calc(100vh - 104px);
        margin: auto;
        display: flex;
        aling-items: center;
        justify-content: center;
        
        .bannerInfo {
            width: 60%;
            height: 100%;
            
            display: flex;
            justify-content: center;
            flex-direction: column;

            h1 {
                color: #f4f4fc;
                font-size: 53px;
            }
            p {
                color: #8e92a8;
                font-size: 20px;
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