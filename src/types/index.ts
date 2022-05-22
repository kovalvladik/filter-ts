export interface initState {
    data: any,
    dataFiltered: any,
    shop: any[],
    liked: any[],
}

export interface props {
    image: string,
    name: string,
    price: any,
    id: number,
    addShop: boolean,
    addLike: boolean,
    // onClick: () => number
}

export enum actionTypes {
    DATA_SET = "DATA_SET",
    ADD_SHOP = "ADD_SHOP",
    ADD_LICKED = "ADD_LICKED",
    DEL_SHOP = "DEL_SHOP",
    DEL_LICKED = "DEL_LICKED",
    UPDATE_DATA = "UPDATE_DATA",
    ADD_SHOP_TRUE = "ADD_SHOP_TRUE",
    ADD_SHOP_FALSE = "ADD_SHOP_FALSE",
    ADD_LICKED_TRUE = "ADD_LICKED_TRUE",
    ADD_LICKED_FALSE = "ADD_LICKED_FALSE",
    SORT_DATA_UP = "SORT_DATA_UP",
    FILTER_DATA = "FILTER_DATA",
    SORT_DATA_DOWN = "SORT_DATA_DOWN",
    ADD_LOCAL_LIKE = "ADD_LOCAL_LIKE",
    ADD_LOCAL_SHOP = "ADD_LOCAL_SHOP",
}

interface customAction {
    type: actionTypes.DATA_SET |
        actionTypes.ADD_SHOP | actionTypes.ADD_LICKED |
        actionTypes.DEL_SHOP | actionTypes.DEL_LICKED |
        actionTypes.SORT_DATA_DOWN | actionTypes.FILTER_DATA | actionTypes.SORT_DATA_UP |
        actionTypes.ADD_LOCAL_LIKE | actionTypes.ADD_LOCAL_SHOP,
    payload: any[]
}

interface customActionShop {
    type: actionTypes.ADD_SHOP | actionTypes.ADD_LICKED |
        actionTypes.DEL_SHOP | actionTypes.DEL_LICKED |
        actionTypes.ADD_LICKED_FALSE | actionTypes.ADD_SHOP_FALSE
        | actionTypes.ADD_LICKED_TRUE | actionTypes.ADD_SHOP_TRUE,
    // type: actionTypes.DATA_SET | actionTypes.COUNT_MINUS | actionTypes.START_INT,
    payload: number
}

interface customActionData {
    type: actionTypes.UPDATE_DATA
}

export type combineAction = customAction | customActionShop | customActionData
