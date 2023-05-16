import styled from 'styled-components'

export const CommandsMain = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    .tilte {
        width: 80%;
        margin-block: 26px;
        h1 {
            margin-bottom: 8px;
            color: #fff;
        }
        p {
            color: #8e92a8;
        }
    }

    .container {
        width: 80%;
        display: flex;
        align-items: flex-start;

        margin-block: 16px;
    }
`