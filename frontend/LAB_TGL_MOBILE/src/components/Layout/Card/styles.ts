import styled from 'styled-components/native';

export const Container = styled.View<any>`
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.border.gray100};
    width: ${({screenWidth}) => screenWidth > 400 ? '60%' : '80%'};
    elevation: 3;
`;