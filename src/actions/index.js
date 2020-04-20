export const Types = {
    SetListings: 'SET_LISTINGS',
    SetAsyncStorage: 'SET_ASYNCSTORAGE'
}
export const Actions = {
    setListings: (results) => ({
        type: Types.SetListings,
        payload: { results }
    }),
    setAsyncStorage: (userToken) => ({
        type: Types.SetAsyncStorage,
        payload: { userToken }
    })
}