import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types'
import { IAppState, IAppAction } from '../interfaces'

const InitialState: IAppState = {
    loadingStatus: false,
    alert: null
};

export function appReducer (state = InitialState, action: IAppAction): IAppState {
    switch (action.type) {
        case SHOW_LOADER : return { ...state, loadingStatus: true };
        case HIDE_LOADER : return { ...state, loadingStatus: false };
        case SHOW_ALERT  : return { ...state, alert: action.payload.text };
        case HIDE_ALERT  : return { ...state, alert: null };

        default : return state
    }
}