import React from 'react'

export default function Calculation() {
    const add=(number1:number,number2:number)=>{
        return number1+number2;
    }
    const subtract=(number1:number,number2:number)=>{
        return number1-number2;
    }
    const multipy=(number1:number,number2:number)=>{
        return number1*number2;
    }
    const divide=(number1:number,number2:number)=>{
        if(number2==0){
            return 'Không chia được cho 0'
        }else{
            return number1/number2
        }
    }
    let number1:number=10;
    let number2:number=10
  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>{number1}+{number2}={add(number1,number2)}</li>
        <li>{number1}-{number2}={subtract(number1,number2)}</li>
        <li>{number1}*{number2}={multipy(number1,number2)}</li>
        <li>{number1}:{number2}={divide(number1,number2)}</li>
      </ul>
    </div>
  )
}
