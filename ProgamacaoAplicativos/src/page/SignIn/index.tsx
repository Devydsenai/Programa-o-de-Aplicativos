import React, {useState, useContext} from 'react';
import { Platform, RefreshControl } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from './styles';
import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Azul2, Branco } from '../../core/cores';

import SignInput from '../../components/SignInput';

// import BarberLogo from '../../assets/barber.svg';
// import EmailIcon from '../../assets/email.svg';
// import LockIcon from '../../assets/lock.svg';





export default () => {
    const {dispatch: userDispatch} = useContext(UserContext) as any;
    const navigation = useNavigation();
    const [emailFiels, setEmailFiels] = useState('');
    const [passwordFiels, setPasswordFiels] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSignIn = async () => {
        if(emailFiels === '' || passwordFiels === '') {
            alert('Preencha todos os campos');
            return;
        }
        
        setLoading(true);
        let json = await Api.signIn(emailFiels, passwordFiels);

        if(json.token) {
            await AsyncStorage.setItem('token', json.token);
            userDispatch({
                type: 'setAvatar',
                payload: {avatar: json.avatar}
            });
            navigation.reset({
                routes: [{name: 'MainTab' as never}],
            });
        } else {
            alert('E-mail e/ou senha incorretos');
        }
        
        setLoading(false);
    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp' as never}],
        });
    }
    return (
        <Container>
            <InputArea>
                <SignInput
                    IconSvg={null}
                    placeholder="E-mail"
                    value={emailFiels}
                    onChangeText={setEmailFiels}
                />
                <SignInput
                    IconSvg={null}
                    placeholder="Senha"
                    value={passwordFiels}
                    onChangeText={setPasswordFiels}
                    password={true}
                />
            </InputArea>
            
            <CustomButton onPress={handleSignIn}>
                <CustomButtonText>ENTRAR</CustomButtonText>
            </CustomButton>
            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}