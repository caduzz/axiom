import styled from 'styled-components'

export const InputCommand = styled.div`
    display: flex;
    align-items: center;

    border: none;
    border-radius: 6px;

    background-color: #111214;

    &:focus-within {
        outline: 3px solid #2d9;
    }
    .categoryInput {
        width: 100%;
        border: none;
        outline: none;

        padding: 14px;

        color: #fff;
        background-color: #0000;

        ::placeholder {
            color: #8e92a8;
            opacity: 1;
        }
    }
    .searchBtn {
        cursor: pointer;
        
        padding: 15px;
        
        color: #8e92a8;
        background-color: #0000;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        transition: 0.2s;
        outline: none;
        :hover {
            color: #7e92a9;
            background-color: #0004;
        }
    }
`