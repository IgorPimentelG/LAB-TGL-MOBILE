import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity<any>`
    margin: 5px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.main.green700};
    font-weight: ${({isHighighted}) => isHighighted ? 'bold' : 'normal'};
    background-color: ${({theme, isHighighted}) => (
        isHighighted ? theme.main.green700 : 'transparent'
    )};
`;