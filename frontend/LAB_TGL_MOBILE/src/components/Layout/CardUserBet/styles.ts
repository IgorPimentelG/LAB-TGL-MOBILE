import styled from 'styled-components/native';

export const RootContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 100px;
    margin: 5px 0;
`;

export const ContainerContent = styled.View`
    padding: 5px 10px;
    justify-content: center;
`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`;

export const LabelInfo = styled.Text`
    color: ${({theme}) => theme.colors.label};
    margin: 5px 0;
`;

export const LabelType = styled.Text<any>`
    font-weight: bold;
    font-style: italic;
    color: ${({color}) => color};
    font-size: 16px;
`;

export const Numbers = styled.Text`
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    color: ${({theme}) => theme.colors.text}
`;
