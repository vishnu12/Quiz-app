import React,{useContext,useEffect} from 'react'
import styled from 'styled-components'
import { QuesContext } from '../context/quesContext'
import { Button } from './LoginDiv'

export const LoadQuestions = ({num,data}) => {
    const{dispatch}=useContext(QuesContext)
    const reviewProps={
        width:'200px',
        color:'#510580',
        display:`${num!==9?'visible':'none'}`
    }


    function handleClick() {
     dispatch({type:'NEXT'})
    }

    return (
        <Wrapper>
            <div className="qustion-container mb-4">
                <strong><h3>Q{num+1}.</h3></strong>
                <h5>{data?.question}</h5>
            </div>
            <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="1" value="1" />
                <label className="form-check-label" htmlFor="1">
                    {data?.answers.answer_a}
                </label>
            </div>

            <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="2" value="2" />
                <label className="form-check-label" htmlFor="2">
                {data?.answers.answer_b}
                </label>
            </div>

            {data?.answers.answer_c && <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="3" value="3" />
                <label className="form-check-label" htmlFor="3">
                {data.answers.answer_c}
                </label>
            </div>}

            {data?.answers.answer_d && <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="4" value="4"/>
                <label className="form-check-label" htmlFor="4">
                {data.answers.answer_d}
                </label>
            </div>}

            <div className="button-div">
                <Button {...reviewProps} onClick={()=>handleClick()}>Mark for Review</Button>
                <Button onClick={()=>handleClick()} display={num!==9?'visible':'none'}>Submit</Button>
            </div>
            <Button width='98%' display={num!==9?'none':'visible'}>Final Submit</Button>

        </Wrapper>
    )
}



const Wrapper = styled.div`
width:500px;
height:500px;
background-color:#fff;
margin:2rem auto;
border:none;
border-radius:5px;
box-shadow:2px 5px 5px rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
padding:15px;
.button-div{
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
}
.button-div Button{
    margin-left:5px;
}
.botton-div Button:focus{
    outline:none;
}

@media(max-width:600px){
    width:450px;
    height:500px;
}
`
