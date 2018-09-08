// Its going to evaluate any actions committed such as fetching and creating posts
// for actions we create types (constants) and import then into here
import { FETCH_ARTICLES, FETCH_WEATHER, FETCH_EVENTS, SEARCH_NEW } from '../Actions/types'

const initialState = {
    // Items - represents the posts that come in from our actions which is where we put fetch request
    items: [],
    // represents the single post we add when we get response back from fetch POST
    item: {}
}

// Reducer
export default function(state = initialState, action) {
    //use switch to have diff responses for diff actions
    switch(action.type) {
        case FETCH_ARTICLES:
            console.log('news reducer called')
            return{
                ...state, 
                articles: action.payload
            }
        case FETCH_WEATHER:
            console.log('weather reducer called')
            return{
                ...state,
                weather: action.payload,
                city: action.city
            }
        case FETCH_EVENTS:
            console.log('events reducer called')
            return{
                ...state,
                events: action.payload
            }
        case SEARCH_NEW:
            console.log('search new reducer called')
            return{
                ...state,
                city: '',
                weather: '',
                articles: '',
                events: ''
            }
        default: 
            return state;
        
    }
}