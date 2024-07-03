import {ReactNode} from 'react';
import s from './pageWrapper.module.css'
import { NavLink } from 'react-router-dom';
// import classes from 'classnames'
import { ROUTES } from '../router/router';
// import React from "react";


export const PageWrapper = ({ children }: { children: ReactNode }) => {
    return (
    
    <div className={s.pagewrapper}>
          
        <NavLink className={s.catalog} to={ROUTES.ROOT} >каталог</NavLink>
        <NavLink  className={s.like}to={ROUTES.LIKE} >избранное</NavLink>
      
        <div >{children}</div>
        {/* <div><div >© 2024           все права защищены</div></div> */}
        </div>
        )
  };