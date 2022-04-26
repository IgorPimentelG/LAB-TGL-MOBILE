import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    padding: 20px;
`;

export const ContainerTitle = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;

export const LabelGame = styled.Text`
    font-size: 20px;
    font-style: italic;
    color: ${({theme}) => theme.text.doveGray};
`;

export const Label = styled.Text`
    font-style: italic;
    color: ${({theme}) => theme.text.doveGray};
`;