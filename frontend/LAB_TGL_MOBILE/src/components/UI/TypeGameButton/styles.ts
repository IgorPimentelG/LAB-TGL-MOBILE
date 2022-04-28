import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Touchable = styled.TouchableOpacity<any>`
    width: ${Math.floor(Dimensions.get('window').width * 0.38) + 'px'};
    padding: 6px;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    margin: 0 5px;
    border-radius: 50px;
    border: 2px solid ${({color}) => color};
    background-color: ${({isEnabled, color}) => isEnabled ? color : '#FFF'};
`;

export const Label = styled.Text<any>`
    font-weight: bold;
    font-style: italic;
    color: ${({isEnabled, color}) =>  isEnabled ? '#FFF' : color}
`;