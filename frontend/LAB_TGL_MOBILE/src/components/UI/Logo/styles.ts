import styled from 'styled-components/native';

export const Line = styled.View`
    border: 5px solid ${({theme}) => theme.main.green900};
    border-radius: 50px;
`;

export const Label = styled.Text`
    font-weight: bold;
    font-style: italic;
    font-size: 36px;
    color: ${({theme}) => theme.text.gray800};
`;