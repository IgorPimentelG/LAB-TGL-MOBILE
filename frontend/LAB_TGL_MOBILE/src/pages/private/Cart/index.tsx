import { CartProps } from "@shared/model/types/navigation";
import { useLayoutEffect } from "react";

const Cart = ({ navigation }: CartProps ) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            
        });
    }, []);

    return(
        <></>
    );
}

export default Cart;