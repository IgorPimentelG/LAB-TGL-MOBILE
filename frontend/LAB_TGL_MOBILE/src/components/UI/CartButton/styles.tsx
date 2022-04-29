import styled from 'styled-components/native';

export const ContainerButtonCart = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${({theme}) => theme.main.green700};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    padding: 2px 10px;
`;

export const ContainerInfo = styled.View`
    justify-content: center;
`;

export const InfoCart = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
    
`;