import styled from 'styled-components/native';

export const Label = styled.Text`
    font-style: italic;
    color: ${({theme}) => theme.colors.label}
`;