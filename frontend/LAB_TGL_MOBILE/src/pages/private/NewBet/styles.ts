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

export const ContainerOptionsRow = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
`;

export const ContainerButtonSmall = styled.View<any>`
    width: ${({screenWidth}) => Math.floor(screenWidth / 2.3) + 'px'};
    margin-right: 10px;
`;

export const ContainerButtonLarge = styled.View<any>`
    padding-left:  ${({screenWidth}) => screenWidth > 400 ? '25px' : '5px'};
    padding-right: ${({screenWidth}) => screenWidth > 400 ? '32px' : '15px'};
    margin-bottom: 50px;
`;

export const ContainerIconButton = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const LabelGame = styled.Text`
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
    color: ${({theme}) => theme.text.gray800};
`;

export const LabelButton = styled.Text<any>`
    margin: 0px 5px;
    color: ${({theme, isHighighted}) => (
        isHighighted ? '#FFF' : theme.main.green700
    )};
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

