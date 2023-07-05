import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
