import styled from "styled-components";

export const CommandsView = styled.div`
    width: 100%;
    color: #ffffff;
    text-align: left;
    font-family: Work Sans;
    font-weight: 350;
    margin-left: 16px;

    padding: 16px;

    border-spacing: 0;
    border-radius: 6px;
    border: 1px solid #fff1;

    background-color: #16151e;
`;

export const Table = styled.table`
    position: relative;
    width: 100%;
    margin-top: 12px;
    min-height: 80px;

    .command {
        color: #3c94fc;
        padding: 6px;
        font-weight: 400;
        background-color: #111214;
        border-radius: 4px;
    }

    .headerColumnCommand
        .headerLineCommand {
            padding: 12px;
            font-weight: 500;
        }
    }

    .bodyColumnCommand {
        .bodyLineCommand {
            padding: 12px;
            color: #8e92a8;
        }
    }
    .alertMessage{
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: 300;
        padding: 10px 0;
    }
`


export const Prompt = styled.span`
    padding: 6px;
    font-weight: 400;
    background-color: #111214;
    border-radius: 4px;


    color: ${p => p.status === 'on' ? '#2d9' : '#d32'};
`  