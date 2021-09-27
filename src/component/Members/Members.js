import React, { useEffect, useState } from "react";
import Member from '../Member/Member'
import Cart from "../Cart/Cart";
import "./Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  const [salary, setSalary] = useState([])
  const handleSalary = (slry) => {
    const newSalary = [...salary, slry]
    setSalary(newSalary)
  }

  return (
    <div className="container">
      <div className="members-container">
        <div className="members">
          {
            members.map(member => <Member member={member} key={member.name} handleSalary={handleSalary}></Member>)
          }
        </div>
        <Cart  salary = {salary}></Cart>
      </div>
    </div>
  );
};

export default Members;
