import { Controller } from "react-hook-form";
import { Container, TextField } from "./styles";
import { IConfigInput } from "@shared/model/interfaces/form";
import { useTheme } from "styled-components";

const Input: React.FC<{ configInput: IConfigInput }> = ({ configInput}) => {

    const { params, controller } = configInput;
    const theme = useTheme();

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
                        selectionColor={theme.main.green900}
                    />
                )}
            />
        </Container>
    );
}

export default Input;