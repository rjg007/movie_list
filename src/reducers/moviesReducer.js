import _ from 'lodash'

const initialState = []

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }

        case 'REMOVE_MOVIE' : {
            return state.filter(movie => {
                return (
                    movie.id !== action.payload
                )
            })
        }

        case 'SORT_MOVIE' : {
            if ([...state].length > 0) {
                if (action.payload === 'Ascending (Name)') {
                    return _.sortBy([...state], 'name')
                } else if (action.payload === 'Descending (Name)') {
                    return _.sortBy([...state], 'name').reverse()
                } else if (action.payload === 'Ratings (High - Low)') {
                    return _.sortBy([...state],'rating').reverse()
                } else if(action.payload === 'Ratings (Low - High)') {
                    console.log(_.sortBy([...state],'rating'))
                    return _.sortBy([...state],'rating')
                } else {
                    return [...state]
                }
            } else {
                return [...state]
            }
        }

        default : {
            return [...state]
        }
    }
}

export default moviesReducer