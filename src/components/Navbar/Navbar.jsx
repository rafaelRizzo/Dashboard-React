import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import { MdPhone } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineDoorBack } from "react-icons/md";
import './styles.css'

export const Navbar = () => {

  const handleClick = event => {
    document.querySelectorAll(".navbar a").forEach((e) => {
      e.classList.remove("active")
    })
    event.currentTarget.classList.toggle('active');
  };
  return (
    <nav className="navbar">
      <ul>
        <img className='logo' src={logo} alt="" />
        <Link className='dashboard active' onClick={handleClick} to="/"><MdOutlineSpaceDashboard /></Link>
        <Link className='helpdesk' onClick={handleClick} to="/helpdesk"><MdOutlineSupportAgent /></Link>
        <Link className='voip' onClick={handleClick} to="/voip"><MdPhone /></Link>
        <Link className='financeiro' onClick={handleClick} to="/financeiro"><MdOutlinePayment /></Link>
        <Link className='contratos' onClick={handleClick} to="/contrato"><MdBusinessCenter /></Link>
        <Link className='settings' onClick={handleClick} to="/settings"><MdOutlineSettings /></Link>
        <Link className='logout' onClick={handleClick} to="/logout"><MdOutlineDoorBack /></Link>
      </ul>
    </nav>
  )
}