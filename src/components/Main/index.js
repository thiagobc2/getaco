import React from 'react';
import { FaAngleLeft, FaAngleRight, FaChevronDown, FaSearch, FaFilter, FaPlusCircle, FaTrash, FaEdit } from 'react-icons/fa'
import { BsBellFill,  } from 'react-icons/bs'
import { RiHome5Line,  } from 'react-icons/ri'
import { AiOutlineUser,  } from 'react-icons/ai'
import { RiFilter3Line,  } from 'react-icons/ri'
import { GoSettings,  GoClock, GoGithubAction } from 'react-icons/go'


import "./styles.css";
const lista = [
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: ['BUTTO1','BUTTOM2','BTN', '!'],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: ['BUTTO1','BUTTOM2'],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: ['BUTTO1'],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: [],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: ['BUTTOM2','BTN'],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: [],
    action: 'teste3' 
  },
  {
    name: 'Bess Goodman',
    phone: '364-759-3283',
    email: 'thiagobc2@hotmai.com',
    modify: '27 Out 2020',
    todo: ['BUTTO1','BUTTOM2','BTN'],
    action: 'teste3' 
  },
];

const Main = () => (
  <div id="container">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <div id="menu-lateral">
      <h1 id="titulo">Getaco</h1>
      <div id="subtitulo">
        <h6>SoungClould Limited</h6>
        <did id="fundorosa">
          <span id="basic">BASIC</span>  
        </did>
      </div>
      <ul id="lista-menu">
        <li><RiHome5Line id="m30"></RiHome5Line><h5>HOME</h5></li>
        <li><RiFilter3Line id="m30"></RiFilter3Line><h5>CUSTOMER</h5></li>
        <li><GoGithubAction id="m30"></GoGithubAction><h5>FORM</h5></li>
        <li><GoClock id="m30"></GoClock><h5>REPORT</h5></li>
        <li><AiOutlineUser id="m30"></AiOutlineUser><h5>USER</h5></li>
        <li><GoSettings id="m30"></GoSettings><h5>SETTING</h5></li>
      </ul>
      <h6 id="mtop">Unlock more powerful feat</h6>
      <div id="filter2">
        <h2 id="filtertextbtn2">UPGRADE TO PRO</h2>
      </div>
    </div>

    <div id="sub-container">
      <div id="barra">
        <h2 id="allcustomer">ALL CUSTOMER</h2>
        <h3><FaChevronDown id="FaChevronDown"></FaChevronDown></h3>
        <div id="divider" />
        <div id="busca">
          <FaSearch></FaSearch>
          <h4>Search customer</h4>
        </div>
        <div id="flex1"></div>
        <h2 id="addcustomerheader">+ ADD CUSTOMER</h2>
        <div id="divider" />
        <BsBellFill id="BsBellFill"></BsBellFill>
        <div  id="user" />
      </div>

      <div id="content">
        <div id="header-list">
          <h1 id="customer">Customer</h1>
          <div id="flex1" />
          <div id="filter">
            <FaFilter id="FaFilter"></FaFilter>
            <h2 id="filtertextbtn">FILTER</h2>
          </div>
          <div id="btnaddcustomer">
            <FaPlusCircle id="FaPlusCircle"></FaPlusCircle>
            <h2 id="addcustomertextbtn">ADD CUSTOMER</h2>
          </div>
        </div>
        
        <div id="content-list">
          <table id="table">
            <tr>
              <th><h2>NAME</h2></th>
              <th><h2>PHONE</h2></th>
              <th><h2>EMAIL</h2></th>
              <th><h2>MODIFY</h2></th>
              <th><h2>TO DO</h2></th>
              <th><h2>ACTION</h2></th>
              <th><div id="btncinza"><h2>!</h2></div></th>
            </tr>
            {lista.map(item => (
              <tr id="tr">
                <td id="negrito">{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.modify}</td>
                <td id="idtodo">
                  {item.todo.map((itemtodo) => (
                    <div id="btncinza"><h3>{itemtodo}</h3></div>
                  ))}
                </td>
                <td id="idaction">
                  <div id="circulo-cinza">
                    <FaEdit></FaEdit>
                  </div>
                  <div id="circulo-cinza">
                    <FaTrash></FaTrash>
                  </div>
                </td>
                <td></td>
              </tr>
            ))}
          </table>
        </div>
        <div id="bottom-list">
          <h2>Showing:</h2>
          <h3>30 Customer</h3>
          <div id="paginacao">
            <ul>
              <li><FaAngleLeft></FaAngleLeft></li>
              <li>1</li>
              <li id="rosa">2</li>
              <li>3</li>
              <li>4</li>
              <li><FaAngleRight></FaAngleRight></li>
            </ul>
          </div>
          <h2>Total Customer:</h2>
          <h3>14.250</h3>
        </div>
      </div>
    </div>
  </div>
  )

export default Main; 





  