const reducers = {
    updateEmail: (state, action) => {
        state.user = { ...state.user, email: action.payload.email };
    },
    updateName: (state, action) => {
        state.user = { ...state.user, name: action.payload.displayName };
    },
    updateWholeUser: (state, action) => {
        const id = state.user.id + 1;
        state.user = { ...action.payload };
    },
    resetUser: (state) => {
        state.user = {
            email: "",
            name: '',
            id: '',
        }
    }
}

export default reducers;
