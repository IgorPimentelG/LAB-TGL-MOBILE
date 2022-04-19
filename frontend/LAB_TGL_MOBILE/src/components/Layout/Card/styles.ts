import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.colors.borderCard};
    width: 80%;
    elevation: 3;
`;