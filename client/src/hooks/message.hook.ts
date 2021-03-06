import {useCallback} from 'react';
import M from 'materialize-css';

export const useMessage = (): Function => {
    return useCallback(text => {
        window.M = M;
        if(window.M && text) {
            window.M.toast({html: text});
        }
    }, []);
}