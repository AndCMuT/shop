import React, { useState } from "react";

function OrderForm() {

    const region = ['Московская область', 'Ленинградская область', 'Архангельская область', 'Ненецкий АО']
    const methodPay = ['Банковская карта', 'CБП', 'Выставить счёт']
    const [value, setOptions] = useState('')
    const [pay, setPay] = useState('')
    const optionsRegion = region.map((text, index) => {
        return <option key={index}>{text}</option>
    })
    const optionsPay = methodPay.map((text, index) => {
        return <option key={index}>{text}</option>
    }) 

    return (
    <>
        <h2>Заказ №</h2>
        <h3>Адрес доставки</h3>
        <select value={value} onChange={(event) => setOptions(event.target.value)}>
            {optionsRegion}
        </select>
        <input type="text" placeholder="Введите адрес"></input>
        <input type="text" placeholder="ФИО получателя"></input>
        <h3>Оплата</h3>
        <select value={pay} onChange={(event) => setPay(event.target.value)}>
            {optionsPay}
        </select>
        <button type="button">Оплатить</button>
    </>);
}

export default OrderForm;