import { Logo } from '@components/UI';
import { View } from 'react-native';
import { ContainerLogo, RootContainer } from './styles';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const MenuDrawer = (props: any) => {
    return(
        <RootContainer>
            <DrawerContentScrollView>
                <ContainerLogo>
                    <View>
                        <Logo/>
                    </View>
                </ContainerLogo>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </RootContainer>
    );
}

export default MenuDrawer;