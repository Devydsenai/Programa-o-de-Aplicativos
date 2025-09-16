import React from 'react';
import styled from 'styled-components/native';
import { Azul4, Azul3 } from '../core/cores';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${Azul4};
    margin-bottom: 15px;
    flex-direction: row;
    border-radius: 30px;
    padding: 10px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    background-color: ${Azul3};
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 15px;
`;


interface SignInputProps {
    IconSvg: React.ComponentType<any> | null;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    password?: boolean;
}

export default ({IconSvg, placeholder, value, onChangeText, password}: SignInputProps) => {
    return (
        <InputArea>
            {IconSvg && <IconSvg width="24" height="24" />}
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                placeholderTextColor="#999"
            />
        </InputArea>
    );
}