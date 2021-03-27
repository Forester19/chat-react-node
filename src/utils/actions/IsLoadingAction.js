const IS_LOADING = "IS_LOADING";
export const updateIsLoading = (isLoading) => {
    return {type: IS_LOADING, payload: isLoading}
};