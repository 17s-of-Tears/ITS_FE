import styled from 'styled-components'
import colors from 'styles/colors'

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 278px 50px 278px;
    color: ${colors.gray_70};
    .post__back {
        width: 25px;
        height: 25px;
    }
`