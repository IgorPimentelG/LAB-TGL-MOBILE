import styled from 'styled-components/native';
import { NavButtonType } from '@shared/model/enums/form';

export const Touchable = styled.TouchableOpacity`
    padding: 20px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text<any>`
    font-style: italic;
    font-weight: bold;
    font-size: 32px;
    text-transform: capitalize;
    color: ${
        ({theme, type}) => 
            type === NavButtonType.PRIMARY ? theme.colors.primary : theme.colors.text
    };
`;