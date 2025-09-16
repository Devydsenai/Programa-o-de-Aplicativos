export const initialState = {
    avatar: '',
    favorites: [],
    appointments: [],
}

export const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        case 'setFavorites':
            return { ...state, favorites: action.payload.favorites };
        case 'setAppointments':
            return { ...state, appointments: action.payload.appointments };
        default:
            return state;
    }
}
