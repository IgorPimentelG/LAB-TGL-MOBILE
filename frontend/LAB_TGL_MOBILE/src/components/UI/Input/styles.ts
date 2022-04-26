import styled from 'styled-components/native';

function getBorderRadius(index: number): string {
    return index === 0 ? '10px' : '0';
}

export const Container = styled.View<any>`
    ${({ hasError, theme }) => !hasError && `
        border-bottom-color: ${theme.border.gray50};
        border-bottom-width: 2px;
    `};
    
    ${({ hasError, theme, index }) => hasError && `
        border: 2px solid ${theme.main.red700};
        border-top-left-radius: ${getBorderRadius(index)};
        border-top-right-radius: ${getBorderRadius(index)};
    `};
`

export const TextField = styled.TextInput`
    padding: 20px;
    font-weight: bold;
    font-style: italic;
    color: ${({theme}) => theme.text.gray500};
`;