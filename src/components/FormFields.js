import React from 'react';

export const Input =({type,name,placeholder,value,handleChange})=>{
    return(
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} />
    );
}

export const Select =({name,value,handleChange,options})=>{
  return(
    <select value={value} name={name} onChange={handleChange}>
      <Option options={options}/>
    </select>
  );
}

const Option = ({options=[]}) =>{
  return(
    <>
    {
      options.map(option=>{
        return (
          <option value={option.value}>{option.text}</option>
        )
      })
    }
    </>
  )
}