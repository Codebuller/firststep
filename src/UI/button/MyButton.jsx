import React from "react";
import classes from './MyButton.module.css';    

const MyButton= ({children, ...props}) => {
        return (
            <button {...props} className={classes.myBtn} 
            onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(121.93deg, #7E83FF 23.02%, #3C45FF 87.34%)';
                e.target.style.color = 'rgb(255,255,255)'
                e.target.style.border = '1px solid rgba(255,255,255,0)'}}
             onMouseOut={(e) => {
                e.target.style.backgroundColor = 'rgb(235,235,235)';
                e.target.style.background = 'linear-gradient(121.93deg, #ebebeb 23.02%, #ebebeb 87.34%)';    
                e.target.style.color = 'rgb(0,0,0)';
                e.target.style.border = '1px  solid rgb(126,131,255)'}}
             >
               {children}
            </button>
        );
};
export default MyButton