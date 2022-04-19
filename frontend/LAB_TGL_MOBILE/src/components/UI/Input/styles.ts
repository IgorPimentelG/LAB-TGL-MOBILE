import styled from 'styled-components/native';

export const Container = styled.View`
    border-bottom-color: ${({theme}) => theme.colors.borderInput};
    border-bottom-width: 2px;
`;

export const TextField = styled.TextInput`
    padding: 20px;
    color: ${({theme}) => theme.colors.placeholder};
    font-weight: bold;
    font-style: italic;
`;