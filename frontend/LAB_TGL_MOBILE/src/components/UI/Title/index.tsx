import { Text } from "./styled";

const Title: React.FC<{ children: string }> = ({ children }) => {
    return(
        <Text>{children}</Text>
    );
}

export default Title;