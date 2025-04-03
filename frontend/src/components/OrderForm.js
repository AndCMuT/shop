import React, { useState } from "react";

function OrderForm() {
//Эксперименты со списками (select) для выбора значения
    const region = ['Московская область', 'Ленинградская область', 'Архангельская область', 'Ненецкий АО'] //Массив областей
    const methodPay = ['Банковская карта', 'CБП', 'Выставить счёт'] //Методы оплаты
    const [value, setOptions] = useState('') //Состояния для каждого выбора
    const [pay, setPay] = useState('')
    const optionsRegion = region.map((text, index) => { //Перебор массива с данными и вывод option
        return <option key={index}>{text}</option>
    })
    const optionsPay = methodPay.map((text, index) => {
        return <option key={index}>{text}</option>
    }) 

    return (
    <>
        <h2>Заказ №</h2>
        <h3>Адрес доставки</h3>
        {/* Задаём значение value, onChange для изменения значения состояния */}
        <select value={value} onChange={(event) => setOptions(event.target.value)}>
        {/* здесь все возможные значения для данного select */}
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