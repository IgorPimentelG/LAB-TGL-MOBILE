import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity<any>`
    width: 60%;
    padding: 8px;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    margin: 5px 0;
    border-radius: 50px;
    border: 2px solid ${({color}) => color};
    background-color: ${({isEnabled, color}) => isEnabled ? color : '#FFF'};
`;

export const Label = styled.Text<any>`
    font-weight: bold;
    font-style: italic;
    color: ${({isEnabled, color}) =>  isEnabled ? '#FFF' : color}
`;