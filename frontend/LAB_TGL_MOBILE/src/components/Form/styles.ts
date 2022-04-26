import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerTitle = styled.View`
    margin: 30px 0 15px 0;
`;

export const ContainerLink = styled.View`
    padding: 20px 15px 0 0;
    width: 100%;
    align-items: flex-end;
`;

export const ContainerText = styled.View`
    justify-content: center;
    align-items: center;
`;

const TextBase = styled.Text`
    font-weight: bold;
    text-align: center;
    font-style: italic;
    color: ${({theme}) => theme.text.gray800};
`;

export const Text = styled(TextBase)`
    font-size: 24px;
`;

export const TextHighlighted = styled(TextBase)`   
    margin: 10px 0 5px 0;
    padding: 5px 30px;
    color: #FFF;
    background-color: ${({theme}) => theme.main.green900};
    border-radius: 100px;
`;