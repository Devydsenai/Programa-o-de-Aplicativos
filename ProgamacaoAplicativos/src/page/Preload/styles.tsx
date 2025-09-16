import styled from "styled-components/native";
import { Azul2, Branco } from '../../core/cores';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Azul2 };
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.View`
    align-items: center;
    margin-bottom: 60px;
`;

export const LogoText = styled.Text`
    font-size: 80px;
    font-weight: bold;
    color: ${Branco};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 8px;
`;

export const LogoSubtext = styled.Text`
    font-size: 18px;
    color: ${Branco};
    margin-top: 10px;
    font-weight: 300;
    letter-spacing: 2px;
`;

export const LoadingContainer = styled.View`
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-bottom: 15px;
`;

export const LoadingText = styled.Text`
    font-size: 16px;
    color: ${Branco};
    font-weight: 300;
`;