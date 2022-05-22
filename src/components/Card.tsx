import React, {useState} from 'react';
import {actionTypes, props} from "../types";
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useDispatch} from "react-redux";
import {UseTypeSelector} from "../hooks/UseTypeSelector";

const Card: React.FC<props> = ({name, image, price, id, addLike, addShop}) => {
    const [add, setAdd] = useState(localStorage.getItem(`${id}`)===null?false:
        (localStorage.getItem(`${id}`)==='true'?true:false))
    const [addLikes, setAddLikes] = useState(localStorage.getItem(`${id}color`)===null?false:
        (localStorage.getItem(`${id}`)==='true'?true:false))

    const dispatch = useDispatch()
    const {shop} = UseTypeSelector(state => state)
    const {data} = UseTypeSelector(state => state)
    console.log(shop)

    console.log(add)
    console.log(localStorage.getItem(`${id}`))


    // dispatch({type:actionTypes.COUNT_PLUS,payload: id})

    const handleClickShop = (id: any) => {
        dispatch({type: actionTypes.ADD_SHOP, payload: id})
        // dispatch({type:actionTypes.ADD_SHOP_TRUE})
        setAdd(!add)
        localStorage.setItem(`${id}`,'true')
    }
    const handleClickLike = () => {
        setAddLikes(!addLikes)
        localStorage.setItem(`${id}color`,'true')
    }

    return (
        <div className='card__container'>
            <div className='card__image'>
                <img src={image}/>
            </div>
            <div className='card__content'>
                <div className='card__content__text'>
                    <a className='card__name'>
                        {name}
                    </a>
                    <a className='card__price '>
                        {Math.ceil(price['current_price'])}₽
                    </a>
                </div>

                <div className='card__content__icons'>
                    <button className='icon__button icon-shop'
                            onClick={() => handleClickShop(id)}>
                        {add ?
                            <img src={'./icon.svg'}/> :
                            <img className='icon__button-shop' src={'./icon.png'}/>
                        }
                    </button>
                    <button
                        onClick={()=>handleClickLike()}
                        className='icon__button'>
                        <FavoriteBorderIcon className='icon__button-like' style={{color:`${addLikes?'red':'black'}`}}/>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Card;
