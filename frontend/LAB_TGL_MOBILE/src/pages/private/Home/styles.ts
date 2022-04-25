import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;

export const ContainerTypeGame = styled.View`
    align-items: center;
    margin-top: 15px;
    width: 100%;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-style: italic;
    margin-bottom: 5px;
    color: ${({theme}) => theme.colors.label};
`;

export const ContainerBets = styled.View`
    margin: 10px 0;
    height: 40%;
`;