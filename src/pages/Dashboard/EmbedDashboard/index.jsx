import styled from 'styled-components'

const Container = styled.nav`
    padding: 12px;
    border-radius: 6px;
    background-color: #17181E;
    color: #fff;
    margin-bottom: 15px;
`
export const EmbedDashboard = () => {
    return (
        <Container>
            <h1 className='title'>title</h1>
            <div>
                <p className='description'>description</p>
            </div>
        </Container>
    )
}