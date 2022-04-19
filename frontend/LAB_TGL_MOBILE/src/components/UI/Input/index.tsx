import { Container, TextField } from "./styles";
import { IConfigInput } from "@shared/model/interfaces/form";

const Input: React.FC<{ configInput: IConfigInput }> = ({ configInput }) => {
    return(
        <Container>
            <TextField {...configInput}/>
        </Container>
    );
}

export default Input;