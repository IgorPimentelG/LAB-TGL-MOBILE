import { Controller } from "react-hook-form";
import { Container, TextField } from "./styles";
import { IConfigInput } from "@shared/model/interfaces/form";

const Input: React.FC<{ configInput: IConfigInput }> = ({ configInput}) => {

    const { params, controller } = configInput;

    return(
        <Container hasError={controller.hasError} index={configInput.index}>
            <Controller
                name={controller.name}
                control={controller.control}
                render={({field: { onChange, value } }) => (
                    <TextField 
                        {...params}
                        autoCapitalize='none'
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
        </Container>
    );
}

export default Input;