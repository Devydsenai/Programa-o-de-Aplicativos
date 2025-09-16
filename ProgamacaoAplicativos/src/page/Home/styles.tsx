import styled from "styled-components/native";
import { azulVidro, Branco  } from '../../core/cores';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${azulVidro };
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: ${Branco};
`;
