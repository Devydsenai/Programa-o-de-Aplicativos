import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Azul2, Branco } from '../core/cores';

import { UserContext } from '../contexts/UserContext';


// import HomeIcon from '../assets/home.svg';
// import SearchIcon from '../assets/search.svg';
// import AppointmentsIcon from '../assets/today.svg';
// import FavoritesIcon from '../assets/favorite.svg';
// import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: ${Azul2};
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: ${Branco};
    border-radius: 35px;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

const TabText = styled.Text`
    font-size: 20px;
    color: ${Branco};
`;


export default ({state, navigation}: {state: any, navigation: any}) => {
    const userContext = useContext(UserContext) as any;
    const user = userContext?.state || {};
    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    };

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <TabText>🏠</TabText>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <TabText>🔍</TabText>
            </TabItem>
            <TabItem onPress={() => goTo('Appointments')}>
                <TabText>📅</TabText>
            </TabItem>
            <TabItem onPress={() => goTo('Favorites')}>
                <TabText>❤️</TabText>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <TabText>👤</TabText>
            </TabItem>

        </TabArea>
    );
}
