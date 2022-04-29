import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 10px 10px 10px;
`;

export const ContainerTypeGame = styled.View`
    align-items: center;
    margin-top: 5px;
    width: 100%;
`;

export const ContainerBets = styled.View`
    width: 95%;
    height: 335px;
    margin: 15px 0;
`;

export const ContainerWarning = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerNav = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-style: italic;
    margin-bottom: 5px;
    color: ${({theme}) => theme.text.gray100};
`;