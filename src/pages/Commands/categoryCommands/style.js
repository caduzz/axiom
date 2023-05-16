import styled from "styled-components";

export const List = styled.div`
    width: 350px;
    padding: 16px;
    border: 1px solid #fff1;
    border-radius: 6px;
    
    background-color: #16151E;

    user-select: none;
    
    .contentCategoryListCommands {
        display: flex;
        flex-direction: column;

        .listCategoryCommands {
            width: 100%;
            color: #8e92a8;
            list-style: none;

            button {
                font-size: 16px;
                color: #fff;
                width: 100%;

                display: flex;
                justify-content: space-between;
                cursor: pointer;

                border: none;
                border-radius: 5px;
                background-color: rgb(39, 41, 52);

                padding: 12px 16px;

                margin-top: 10px;

                :focus {
                    outline: 3px solid #2d9;
                }
                :hover {
                    color: #fff;
                }
                .iconArea {
                    margin: 0;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
`