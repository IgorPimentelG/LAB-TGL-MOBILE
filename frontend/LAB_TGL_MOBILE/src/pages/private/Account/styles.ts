import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    padding: 20px;
    align-items: center;
`;

export const ContainerIcon = styled.View`
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-right-color: ${({theme}) => theme.text.gray100};
    padding-right: 15px;
    margin-right: 15px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    padding: 20px;
    flex-direction: row;
    justify-content: center;
`;