// Its going to evaluate any actions committed such as fetching and creating posts
// for actions we create types (constants) and import then into here
import { FETCH_POSTS, NEW_POST, FETCH_ARTICLES, FETCH_WEATHER } from '../actions/types'

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
        case FETCH_POSTS:
            console.log('fetch_posts reducer called');
            return{
                ...state, 
                items: action.payload
            }
        case NEW_POST: 
            console.log('new_post reducer called');
            return{
                ...state, 
                item: action.payload
            }
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
                weather: action.payload
            }
        default: 
            return state;
        
    }
}