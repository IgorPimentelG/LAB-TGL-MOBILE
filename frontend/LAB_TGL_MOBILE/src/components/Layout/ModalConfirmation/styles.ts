import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    padding: 10px 30px;
    border-radius: 5px;
    margin: 5px;
`;

export const Container = styled.View<any>`
    width: ${({screenWidth}) => screenWidth > 400 ? '50%' : '80%'};
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    elevation: 2;
`;

export const ContainerOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerChildren = styled.View`
    margin-top: -15px;
`;

export const ButtonConfirm = styled(Button)`
    background-color: ${({theme}) => theme.main.green700};
`;

export const ButtonCancel = styled(Button)`
    background-color: ${({theme}) => theme.main.red700};
`;

export const LabelButton = styled.Text`
    color: #FFF;
`;


