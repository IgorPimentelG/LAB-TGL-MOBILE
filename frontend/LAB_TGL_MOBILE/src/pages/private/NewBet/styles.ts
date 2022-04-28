import styled from 'styled-components/native';

export const RootContainer = styled.ScrollView`
    flex: 1;
    padding: 20px 10px 0 10px;
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

export const ContainerOptions = styled.View`
    margin-top: 10px;
    margin-bottom: 50px;
    justify-content: space-around;
    flex-direction: row;
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