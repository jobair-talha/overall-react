import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const prevSalary = props.salary;
    const total = prevSalary.reduce((total, salary) => total + salary.salary, 0)
    
    return (
        <div className = "cart">
            <h4 className = "cart__item">Total Item Clicked: {props.salary.length}</h4>
            <h2 className = "cart__salary">Total Salary: {total}</h2>
            <ul className = "cart__person">
            {
                prevSalary.map(salary => <li>{salary.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Cart;