import React, {useEffect, useContext} from 'react';
import { Branco } from '../../core/cores';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, LoadingIcon, LoadingText, LogoContainer, LogoText, LogoSubtext, LoadingContainer } from './styles';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

// import BarberLogo from '../../assets/barber.svg';


export default () => {
    const {dispatch: userDispatch} = useContext(UserContext) as any;
    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            // Adiciona um delay mínimo para mostrar a tela de carregamento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                if(res.token) {
                    await AsyncStorage.setItem('token', res.token);
                    userDispatch({
                        type: 'setAvatar', 
                        payload: {avatar: res.avatar}});
                    navigation.reset({
                        routes: [{name: 'MainTab' as never}],
                    });
                } else {
                    navigation.navigate('SignIn' as never);
                }
                
            } else {
                navigation.navigate('SignIn' as never);
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <LogoContainer>
                <LogoText>BA</LogoText>
                <LogoSubtext>Barbearias</LogoSubtext>
            </LogoContainer>
            <LoadingContainer>
                <LoadingIcon size="large" color={Branco} />
                <LoadingText>Carregando...</LoadingText>
            </LoadingContainer>
        </Container>
    );
}
