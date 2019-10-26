import { StyleConstant } from '~/typeUtilities';
import { UIState } from '~/components';

export const getBorderColor = (
    isMenuVisible: boolean,
    colors: StyleConstant<'colors'>,
    uiState: UIState,
    hasError: boolean,
) => {
    if (hasError) {
        return colors.danger.cs5;
    }

    if (isMenuVisible) {
        return colors.core.cs5;
    }

    return uiState === 'normal' ? colors.neutral.cs5 : colors.neutral.cs7;
};
