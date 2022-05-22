import React, {useEffect} from 'react';
import './App.css';
import BasicSelect from "./components/Select";
import BasicBreadcrumbs from "./components/BreadScrums";
import Card from "./components/Card";
import {useDispatch} from "react-redux";
import {UseTypeSelector} from "./hooks/UseTypeSelector";
import {actionTypes} from "./types";

function App() {
    const dispatch = useDispatch()
    const {data} = UseTypeSelector(state => state)
    const {dataFiltered} = UseTypeSelector(state => state)


    async function getData() {
        const response = await fetch('items.json')
        return await response.json().then(data => {
            dispatch({type: actionTypes.DATA_SET, payload: data})
            dispatch({type: actionTypes.UPDATE_DATA})
        })
    }

    useEffect(() => {
        getData()
    }, [])
    //
    // const ClickHandlerLiked = (id:number) => {
    //
    // }
    // const ClickHandlerBusket = (id) => {
    //
    // }

    return (
        <div className="App">
            <div className='BasicBreadcrumbs__container'>
                <BasicBreadcrumbs/>
            </div>
            <div>
                <a className='Header'>
                    Комплекты стеллажных систем
                </a>
            </div>
            <div className='BasicSelect__container'>
                <div className='header-select'>
                    Сортировать по:
                    <BasicSelect one={'Цена по возростанию'} two={'Цена по убыванию'}/>
                </div>
                <div className='header-select BasicSelect__Sort '>
                    Материал
                    <BasicSelect one={'Металл'} two={'Дерево'}/>
                </div>

            </div>

            <div className='Card__container'>
                {dataFiltered.length > 0 ? dataFiltered.map((el: any) => (
                    <div className={'Card__container__main'}>
                        <Card id={el['id']}
                              image={el['image']['url']}
                              name={el['name']}
                              price={el['price']}
                              addShop={el['addShop']}
                              addLike={el['addLike']}
                        />
                    </div>

                )) : data.map((el: any) => (
                    <div className={'Card__container__main'}>
                        <Card id={el['id']}
                              image={el['image']['url']}
                              name={el['name']}
                              price={el['price']}
                              addShop={el['addShop']}
                              addLike={el['addLike']}
                        />
                    </div>

                ))}

            </div>
        </div>
    );
}

export default App;
