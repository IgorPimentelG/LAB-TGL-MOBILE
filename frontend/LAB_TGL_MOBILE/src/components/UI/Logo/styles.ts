import styled from 'styled-components/native';

export const Line = styled.View`
    border: 5px solid ${({theme}) => theme.colors.primary};
    border-radius: 50px;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-style: italic;
    font-size: 36px;
    color: ${({theme}) => theme.colors.text};
`;