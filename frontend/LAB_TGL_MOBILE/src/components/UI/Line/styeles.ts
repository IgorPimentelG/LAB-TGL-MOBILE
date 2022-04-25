import styled from 'styled-components/native';

export const ContainerLine = styled.View<any>`
    height: auto;
    border-radius: 50px;
    border: 4px solid ${({color}) => color};
`;