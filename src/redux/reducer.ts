import {actionTypes, combineAction, initState} from "../types";


const shopLoc = localStorage.getItem('shop')
console.log(shopLoc)

const defaultState: initState = {
    data: [],
    dataFiltered: [],
    liked: [],
    shop: [],
}

const reducer = (state = defaultState, action: combineAction): initState => {
    switch (action.type) {
        case actionTypes.DATA_SET:
            return {
                ...state,
                data: action.payload,
            }
        case actionTypes.UPDATE_DATA:
            return {
                ...state,
                data: state.data.map((el: any) => el.addShop === undefined || el.addLIke === undefined ?
                    {...el, addShop: false, addLike: false} : {...el}),
            }
        case actionTypes.ADD_SHOP:
            return {
                ...state,
                shop: [...state.shop, ...state.data.filter((el?: any) => Number(el.id) === Number(action.payload) ?
                    {...el, addShop: true} :null
                )],
            }

        case actionTypes.SORT_DATA_UP:
            return {
                ...state,
                data: state.data.sort((el: any, elem: any) => el.price.current_price - elem.price.current_price),
                dataFiltered: state.dataFiltered.sort((el: any, elem: any) => el.price.current_price - elem.price.current_price)
            }
        case actionTypes.SORT_DATA_DOWN:
            return {
                ...state,
                data: state.data.sort((el: any, elem: any) => elem.price.current_price - el.price.current_price),
                dataFiltered: state.dataFiltered.sort((el: any, elem: any) => elem.price.current_price - el.price.current_price)
            }
        case actionTypes.FILTER_DATA:
            return {
                ...state,
                dataFiltered: state.data.filter((el: any) => el.material === action.payload)
            }
        case actionTypes.ADD_LICKED:
            return {
                ...state,
                liked: [...state.liked, ...state.data.filter((el?: any) => Number(el.id) === Number(action.payload))],

            }
        case actionTypes.DEL_SHOP:
            return {
                ...state,
                shop: [...state.shop.filter((el?: any) => Number(el.id) !== Number(action.payload))],

            }
        case actionTypes.DEL_LICKED:
            return {
                ...state,
                data: [...state.liked.filter((el?: any) => Number(el.id) !== Number(action.payload))],
            }
        case actionTypes.ADD_SHOP_TRUE:
            return {
                ...state,
                shop:state.data.map((el: any) => el.addShop === false ?
                    {...el, addShop: true} : {...el}),

                // data:[...state.liked.filter((el?:any)=>Number(el.id)!==Number(acti))],
            }


        default:
            return state
    }

}

export {reducer}

export type RootState = ReturnType<typeof reducer>
