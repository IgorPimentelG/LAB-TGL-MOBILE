import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    padding: 20px;
`;

export const ContainerTitle = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;

export const ContainerTypeGame = styled.View`
    flex-direction: row;
    width: 100%;
    margin: 10px 0 15px 0;
`;

export const LabelGame = styled.Text`
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
    color: ${({theme}) => theme.text.gray800};
`;

export const Label = styled.Text`
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    color: ${({theme}) => theme.text.gray900};
`;

export const LabelDescription = styled(Label)`
    margin: 5px 0;
    font-weight: normal;
    text-align: justify;
`;