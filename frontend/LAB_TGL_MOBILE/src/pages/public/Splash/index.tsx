import { Logo } from '@components/UI';
import { SplashProps } from '@shared/model/types/navigation';
import { useEffect } from 'react';
import { RootContainer } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

const Splash = ({ navigation }: SplashProps) => {

    // Guarda a data da última sessão do usuário
    // Se essa data não for nula, então houve logout e a screen Splash não precisa ser exibida novamente
    const lastSession = useSelector<RootState, (string | null)>((state) => state.auth.lastSession);

    useEffect(() => {
        if( !lastSession ) {
            setTimeout(() => {
                navigation.replace('SignIn');
            }, 3000);
        } else {
            navigation.replace('SignIn');
        }
    });

    return(
        <RootContainer>
            <Logo/>
        </RootContainer>
    );
}

export default Splash;