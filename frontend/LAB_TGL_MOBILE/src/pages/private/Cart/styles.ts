import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height: heightScreen } = Dimensions.get('window');

export const RootContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerContent = styled.View`
    padding: 25px 20px 0 20px;
`;

export const ContainerButton = styled.View`
    background-color: #F4F4F4;
    border: 1px solid #E2E2E2;
    width: 100%;
`;

export const ContainerTotal = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const Label = styled.Text`
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.text.gray800};
    margin: 20px 0;
`;

export const LabelTotal = styled(Label)`
    text-align: left;
    text-transform: uppercase;
    font-size: 20px;
    margin: 0 0 20px 5px;
`;

export const ContainerBets = styled.View<any>`
    ${({lengthBets}) => lengthBets > 3 && `
        height: ${heightScreen > 700 ? '290px' : '340px'}
    `}
`;