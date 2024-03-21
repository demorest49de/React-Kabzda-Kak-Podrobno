import React, {useState, MouseEvent} from 'react'
import s from './Select.module.css'
import {ItemType} from "../../App";


type SelectType = {
    items: ItemType[]
}

export const Select = ({items}: SelectType) => {
    const item = items[1];
    const [showMode, setShowMode] = useState(false)
    const [value, setValue]
        = useState<ItemType>(items[0])

    function onClickSelect() {
        setShowMode(!showMode)
    }

    function onClickOption(e: MouseEvent<HTMLDivElement>) {
        const value = e.currentTarget?.getAttribute('data-option-value')
        const result = items.find(it => value && it.value === +value);
        result && setValue(result)
        onClickSelect()
    }

    return (
        <div>
            <select value={3} onChange={() => {
            }}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <div className={s.select}>
                <div className={s.select__value} onClick={onClickSelect}>{value.title}</div>
                {showMode ?
                    <div className={s.select__items}>
                        {items.map(it => <div
                            key={it.value}
                            className={s.select__option}
                            data-option-value={it.value}
                            onClick={onClickOption}
                        >&nbsp;&nbsp;{it.title}</div>)}
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
};