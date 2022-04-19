import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

const TextBase = styled.Text`
    font-weight: bold;
    text-align: center;
    font-style: italic;
    color: ${({theme}) => theme.colors.text};
`;

export const Text = styled(TextBase)`
    font-size: 24px;
`;

export const TextHighlighted = styled(TextBase)`   
    margin: 10px 0 5px 0;
    padding: 5px 30px;
    color: #FFF;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 100px;
`;