import React from 'react';
import './Member.css'

const Member = (props) => {
    const {name, salary, details, email, img, position} = props.member
    return (
        <div className = "member">
            <div>
                <img className = "member__img" src= {img} alt="" />
            </div>
            <div>
                <div className = "member__main">
                    <h3>{name}</h3>
                    <button className = "member__btn" onClick = {()=> props.handleSalary(props.member)}>Add Salary</button>
                </div>
                <p>{details}</p>
                <h5 className = "member__email">Email: {email}</h5>
                <div className = "member__main">
                    <p>Positon: {position}</p>
                    <p>Salary: {salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Member;