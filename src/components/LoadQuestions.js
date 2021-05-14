import React,{useContext,useEffect,useState} from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { QuesContext } from '../context/quesContext'
import { ExamEndPage } from '../pages/ExamEndPage'
import { Button } from './LoginDiv'

export const LoadQuestions = ({num,data}) => {
    const{dispatch}=useContext(QuesContext)
    const history=useHistory()
    const reviewProps={
        width:'200px',
        color:'#510580',
        display:`${num!==9?'visible':'none'}`
    }

    const [score, setScore] = useState(0)
    const [ans, setAns] = useState('')
    const [value, setValue] = useState(null)
    const [change, setChange] = useState('')
  

       function getAnswer(){
        let objInput=data && data.correct_answers
        if(objInput){
        const obj=Object.entries(objInput)
        const value=obj?.map(([key,value])=>`${key}:${value}`)
                        .filter(item=>item.includes("true"))
                        .toLocaleString()
                        .split('_')[1]
            
                    
         return value; 
        }          
    }

    useEffect(()=>{
       setValue(getAnswer())
    },[data,num])

   const handleChange=(e)=>{
       setChange(e.target)
       setAns(e.target.value)
       
   }


    function handleClick() {  
       change.checked=false 
      if(num<9){
        if(ans===value){
            setScore(prev=>prev+1)
            setAns('')
        }else if(!ans){
           setScore(prev=>prev)
        }else{
            setScore(prev=>prev-0.25)
            setAns('')
        }  
       dispatch({type:'NEXT'})
      }else{
        if(ans===value){
            setScore(prev=>prev+1)
            setAns('')
        }else if(!ans){
           setScore(prev=>prev)
        }else{
            setScore(prev=>prev-0.25)
            setAns('')
        }  
        setTimeout(()=>{
            history.push('/final')
        },1000)
      }
     
    }
   
    localStorage.setItem('score',score)

    return (
        <Wrapper>
            <div className="qustion-container mb-4">
                <strong><h3>Q{num+1}.</h3></strong>
                <h5>{data?.question}</h5>
            </div>
            <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="1" value="a"
                onChange={handleChange} />
                <label className="form-check-label" htmlFor="1">
                    {data?.answers.answer_a}
                </label>
            </div>

            <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="2" value="b"
                onChange={handleChange} />
                <label className="form-check-label" htmlFor="2">
                {data?.answers.answer_b}
                </label>
            </div>

            {data?.answers.answer_c && <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="3" value="c"
                onChange={handleChange} />
                <label className="form-check-label" htmlFor="3">
                {data?.answers.answer_c}
                </label>
            </div>}

            {data?.answers.answer_d && <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="jr" id="4" value="d"
                onChange={handleChange}/>
                <label className="form-check-label" htmlFor="4">
                {data?.answers.answer_d}
                </label>
            </div>}

            <div className="button-div">
                <Button {...reviewProps} onClick={()=>handleClick()}>Mark for Review</Button>
                <Button onClick={()=>handleClick()} display={num!==9?'visible':'none'}>Submit</Button>
            </div>
            <Button width='95%' display={num!==9?'none':'visible'} className='final-btn'
            onClick={()=>handleClick()}>
                Final Submit
            </Button>

        </Wrapper>
    )
}



const Wrapper = styled.div`
position:relative;
width:500px;
height:550px;
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

.final-btn{
    position:absolute;
    bottom:10px;
    left:auto;
    right:auto;
}

@media(max-width:600px){
    width:450px;
    height:500px;
}
`
