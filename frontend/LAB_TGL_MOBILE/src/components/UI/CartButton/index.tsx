import { Ionicons } from '@expo/vector-icons';
import { ContainerButtonCart, ContainerInfo, InfoCart } from './styles'; 

const CartButton: React.FC<{
    navigation: any;
    totalBets: number;
}> = ({ navigation, totalBets }) => {

    return(
        <ContainerButtonCart onPress={() => navigation.replace('Cart')}>
            <Ionicons
                name='cart-outline'
                size={25}
                color={'#FFF'}
            />
            <ContainerInfo>
                <InfoCart>{totalBets}</InfoCart>
            </ContainerInfo>
        </ContainerButtonCart>
    );
}

export default CartButton;