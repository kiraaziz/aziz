export const useHalfText = (value, size) => {
    if (value.length > size) {
        return value.slice(0, size) + '...'
    }

    return value
}