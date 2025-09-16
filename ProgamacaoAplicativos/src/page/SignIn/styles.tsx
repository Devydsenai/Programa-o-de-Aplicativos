import styled from "styled-components/native";
import { Branco, Azul2, Azul3  } from '../../core/cores';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Azul2 };
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 200px;
    height: 60px;
    background-color: ${Azul3};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    align-self: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: ${Branco};
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: ${Azul3};
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${Azul3};
    margin-left: 5px;
`;