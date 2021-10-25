import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/Logo.svg';
import acc from '../../assets/icons/Accaunt.svg';
import vps from '../../assets/icons/Vps.svg';
import domens from '../../assets/icons/domens.svg';
import jurnal from '../../assets/icons/jurnal.svg';

function SideBar() {
  const sideMenu = [
    {img: acc, name: 'Аккаунт', url: ''},
    {img: vps, name: 'VPS', url: 'vps'},
    {img: domens, name: 'Домены', url: 'domains'},
    {img: jurnal, name: 'Бортовой журнал', url: 'jurnal'}
  ]

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img src={Logo} alt="Spaceweb" />
        </Link>
      </div>

      <div className="sidebar__menu">
        <ul className="sidebar__list">
          {
            sideMenu && sideMenu.map((item) => {
              return <li className="sidebar__item">
                <Link to={`/${item.url}`}>
                  <img src={item.img} alt={ item.name } />
                  { item.name }
                </Link>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
