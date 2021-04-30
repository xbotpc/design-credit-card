import InitialState from "../types/initialState";
import actions from "./actions";

const initialState: InitialState = {
    bgColor: '#23282A',
    imageSize: '1',
    opacityValue: '1'
}

const reducer = (state = initialState || {}, { type = '', payload }: { type: string, payload: any }): InitialState => {
    switch (type) {
        case actions.CHANGE_BG_COLOR:
            console.log('increment');
            return {
                ...state,
                bgColor: payload
            }

        default:
            return state;
    }
}

export default reducer;