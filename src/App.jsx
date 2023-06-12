import { useState } from 'react'
import Line1 from "./assets/Line1.jpg"
import Line2 from "./assets/Line2.png"
import './App.css'
import "./calculator.css"

const App = ()=>{ 
  const [lastcal, setLastcal] = useState("")
  const [output, setOutput] = useState("")
 
  const click = (value)=>{
    setOutput(output+value)
  }

 const result = () =>{
  if(output=== "error"){
    return;
  }try {
      setOutput(eval(output))
    setLastcal(output)
  }catch (error) {
      setOutput("Error")
  }}


  const allclear = ()=>{
    setOutput("")
    setLastcal("")
  }
  const del =()=>{
    setOutput(output.toString().slice(0,-1))
  }

  return (
    <div className="container">
    <div className="flex background_clr h_w radius margin_40">
        <div>
            <h1 className="calculator_m font_all f_clr">Calculator</h1>
        </div>
            <img className="horizontal-line1" src={Line1}/>
        <div><input className="input" type="text" value = {lastcal} readOnly />
        <input className="input" type="text" value = {output} readOnly /></div>
         <img  className="horizontal-line2" src={Line2}/>
         <div className="div1_m">
         <button className="button_design int_font int_clr btn_bground" onClick={() => click("7")}>
    7  </button>

            <button  className="action button_design int_font int_clr btn_bground" onClick={() => click("8")}>8</button>
            <button className="button_design int_font int_clr btn_bground" onClick={ ()=> click("9")}>9</button>
            <button className="button_design int_font int_clr exp_bground"onClick={ ()=> click("/")} >/</button>
        </div>
        <div className="div2_m"><button className="button_design int_font int_clr btn_bground" onClick={ ()=> click("4")} >4</button>
            <button className="button_design int_font int_clr btn_bground" onClick={ ()=> click("5")}>5</button>
            <button className="button_design int_font int_clr btn_bground" onClick={ ()=> click("6")}>6</button>
            <button className="button_design int_font int_clr exp_bground" onClick={() => click("*")}> *</button>
        </div>
        <div className="div3_m"><button className="button_design int_font int_clr btn_bground" onClick={ () =>click("1")}>1</button>
            <button className="button_design int_font int_clr btn_bground" onClick={() => click("2")}>2</button>
            <button className="button_design int_font int_clr btn_bground" onClick={() => click("3")}>3</button>
            <button className="button_design int_font int_clr exp_bground" onClick={() => click("+")}>+</button>
        </div>
        <div className="div4_m">
            <button className="button_design int_font int_clr exp_bground" onClick={() => click(".")}>.</button>
            <button className="button_design int_font int_clr btn_bground" onClick={() => click("0")}>0</button>
            <button className="equal_button_design int_font int_clr exp_bground" onClick={result}>=</button>
            <button className="button_design int_font int_clr exp_bground" onClick={() => click("-")}>-</button>
        </div>
        <div className="div5_m"><button className="button clr_button_design int_clr btn_bground" onClick={allclear}>clear</button>
        <button className="button clr_button_design int_clr btn_bground" onClick={del}>delete</button></div>
      </div>
    </div>
    
  )
}

export default App
