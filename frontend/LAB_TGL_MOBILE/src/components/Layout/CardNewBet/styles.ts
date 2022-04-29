import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin: 5px;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
`;

export const Touchable = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const ContainerContent = styled.View<any>`
    padding: 5px 15px;
    width: 90%;
    margin-left: 10px;
    border-left-width: 5px;
    border-color: ${({colorGame}) => colorGame};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    justify-content: center;

`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 2px;

`;

export const LabelPrice = styled.Text`
    color: ${({theme}) => theme.text.gray800};
    margin-top: 2px;
    margin-left: 5px;
`;