import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const ContainerLogo = styled.View`
    margin: 20px;
`;

export const ContainerMessage = styled.View`
    margin: 15px;
`;

export const Message = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-weight: bold;
    text-transform: capitalize;
`;
