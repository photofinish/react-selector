export const SHOW_SELECTOR = 'SHOW_SELECTOR'
export const HIDDEN_SELECTOR = 'HIDDEN_SELECTOR'
export const RETURN_SELECT = 'RETURN_SELECT'


export function showSelector() {
    return {
        type: SHOW_SELECTOR
    }
}

export function hiddenSelector() {
    return {
        type: HIDDEN_SELECTOR
    }
}

export function returnSelect() {
    return {
        type: RETURN_SELECT
    }
}