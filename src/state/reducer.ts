import InitialState from "../types/initialState";
import { ACTIONS } from './actions';

const initialState: InitialState = {
    bgColor: '#076459',
    imageSize: '40',
    opacityValue: '100',
    bgPattern: ''
}

const reducer = (state = initialState || {}, { type = '', payload }: { type: string, payload: any }): InitialState => {
    switch (type) {
        case ACTIONS.BG_COLOR:
            return {
                ...state,
                bgColor: payload
            }

        case ACTIONS.IMAGE_SIZE:
            return {
                ...state,
                imageSize: payload
            }

        case ACTIONS.OPACITY:
            return {
                ...state,
                opacityValue: payload
            }

        case ACTIONS.BG_PATTERN:
            return {
                ...state,
                bgPattern: payload
            }

        default:
            return state;
    }
}

export default reducer;