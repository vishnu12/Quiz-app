
import styled from 'styled-components'


export const LoginContainer=styled.div`

width:400px;
height:400px;
background-color:rgba(0,0,0,0.3);
margin:3rem auto;
padding:10px;
border:1px solid grey;
border-radius:15px;
box-shadow:2px 5px 15px rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const Input=styled.input`
    width:80%;
    height:30px;
    border:0;
    border-bottom:2px solid #000;
    border-radius:5px;
    &:focus{
        outline:none;
    }
`

export const FormBtn=styled.button`
width:80%;
height:30px;
background-color:transparent;
color:#fff;
margin-top:1.5rem;
border-radius:5px;`


export const Button=styled.button`
width:${props=>props.width||'75px'};
height:${props=>props.height||'30px'};
background-color:${props=>props.color||'green'};
color:#fff;
padding:${props=>props.padding||'1px'};
border-radius:5px;`