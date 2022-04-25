import { ContainerLine } from "./styeles";


const Line: React.FC<{color: string}> = ({ color }) => {
    return(
        <ContainerLine color={color}/>
    );
}

export default Line;