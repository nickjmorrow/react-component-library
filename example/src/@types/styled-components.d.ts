import 'styled-components';
import { getTheme } from '@nickjmorrow/react-component-library';

declare module 'styled-components' {
    export interface DefaultTheme {
        njmTheme: ReturnType<typeof getTheme>;
    }
}
