import React from "react";
import classes from './MySelect.module.css';
 const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <div className={classes.sort}>
        <select
        className={classes.select}
        value = {value} 
        onChange={event => onChange(event.target.value)}
        >
            
            {options.map(option =>
            <option key={option.value}  value={option.value}>
                {option.name}
            </option>
            )}
        </select>
        </div>
    );
 };

export default MySelect;