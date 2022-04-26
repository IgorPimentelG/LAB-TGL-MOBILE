import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;

export const ContainerTypeGame = styled.View`
    align-items: center;
    margin-top: 5px;
    width: 100%;
`;

export const ContainerBets = styled.View`
    width: 100%;
    height: 220px;
    margin: 10px 0;
`;

export const ContainerNav = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-style: italic;
    margin-bottom: 5px;
    color: ${({theme}) => theme.colors.label};
`;

