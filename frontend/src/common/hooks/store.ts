import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStoreState } from '../interfaces';

export const useTypedSelector: TypedUseSelectorHook<IStoreState> = useSelector;
export { useDispatch } from 'react-redux';
