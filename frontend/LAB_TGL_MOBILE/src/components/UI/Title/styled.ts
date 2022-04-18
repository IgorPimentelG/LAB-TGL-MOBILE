import styled from 'styled-components/native';

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    color: ${({theme}) => theme.colors.text};
`;