import { Logo } from '@components/UI';
import { SplashProps } from '@shared/model/types/navigation';
import { useEffect } from 'react';
import { RootContainer } from './styles';

const Splash = ({ navigation }: SplashProps) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignIn');
        }, 3000);
    });

    return(
        <RootContainer>
            <Logo/>
        </RootContainer>
    );
}

export default Splash;