import React,{useState} from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import {useHistory } from "react-router-dom"



const Detail = () => {
    const history = useHistory()
    const { Day } = useParams()

    let [CircleStyle, setCircleStyle] = useState(['unCircle', 'unCircle', 'unCircle', 'unCircle', 'unCircle'])

    const unCircle = {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        margin:'5px',
        backgroundColor: '#ddd',
    }

    const onCircle =  {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        margin:'5px',
        backgroundColor: 'yellow',
    }
    const ChangeState = idx => {
        for(let i = 1; i<=idx; i++){
            if(i === 1){
                setCircleStyle(['onCircle', 'unCircle', 'unCircle', 'unCircle', 'unCircle'])
            }else if(i ===2){
                setCircleStyle(['onCircle', 'onCircle', 'unCircle', 'unCircle', 'unCircle'])
            }else if(i === 3){
                setCircleStyle(['onCircle', 'onCircle', 'onCircle', 'unCircle', 'unCircle'])
            }else if(i === 4){
                setCircleStyle(['onCircle', 'onCircle', 'onCircle', 'onCircle', 'unCircle'])
            }else if(i ===5){
                setCircleStyle(['onCircle', 'onCircle', 'onCircle', 'onCircle', 'onCircle'])
            }
        }
    }

    return (
        <>
            <RateText><Back>{Day}요일</Back> 평점 남기기</RateText>
            <DayBox>
            {Array.from({ length: 5 }, (item, idx) => {
                return (
                <Circle   key={idx}
                style={CircleStyle[idx]==='unCircle'? unCircle:onCircle} onClick={()=>{ChangeState(idx+1)}}></Circle>
                )})}
            </DayBox>
            <RateBtn onClick={() => { history.push(`/`) }}>평점 남기기</RateBtn>
        </>
    )

            }
const Back = styled.span`
background-color: purple;
width: 20px;
color: white;
border-radius: 5px;
`;

const RateText = styled.p`
font-size: 25px;
text-align :center;
font-weight: bold; 
`;

const Circle = styled.div` 
width: 30px; 
height: 30px; 
border-radius: 30px; 
margin: 5px; 
`;

const DayBox = styled.div`
display: flex;
justify-content: center;
align-items: center; 
margin: 1rem 0px; 
width: 100%;
`;

const RateBtn = styled.button`
margin:30px auto 0px auto;
display: block;
font-size: 30px;
background-color: purple;
color: white;
font-weight: bold;
border-radius: 5px; 
cursor: pointer;    
`;



export default Detail

