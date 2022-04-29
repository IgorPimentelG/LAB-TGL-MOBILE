import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.View<any>`
    width: ${({screenWidth}) => screenWidth > 400 ? '50%' : '70%'};
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    elevation: 2;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  top: -40px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 50px;
`;

export const ContainerContent = styled.View`
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    margin: 10px;
    font-size: 16px;
    font-style: italic;
    text-align: center;
    color: ${({theme}) => theme.text.gray800};
`;

export const LabelButton = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Touchable = styled.TouchableOpacity`
    margin: 5px 0 20px 0;
    padding: 10px;
    width: 80%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.main.red700};
`;