import React from "react"; //
import styled from "styled-components"; // styled-components 라이브러리를 사용하게 한다
import { useHistory } from "react-router-dom" 

const MainGrade = () => { // 화살표 함수를 이용해 MainGrade 라는 함수형 컴포넌트를 만든다 

  const history = useHistory()

  const DayObject = { 0: "월", 1: "화", 2: "수", 3: "목", 4: "금", 5: "토", 6: "일" } //해당 요일의 딕션너리 형태를를 만든다.
  const DayList = Object.keys(DayObject).map((obj) => { return DayObject[obj] }) //  DayList -> ['월',화'.'수','목','금'.'토','일']
  //DayObjct는 배열이 아닌 딕션너리 형태라서 배열 메소드를 이용하지 못한다
  // Object.keys() 함수를 이용해서 딕션너리의 있는 key값만을 가져와 배열을 만든다
  //.map() 함수를 이용해 각 key값을 obj라는 인자로 받는다 
  // 화살표함수를 이용해 DayObject의 index(obj=key) 를 넣어서 해당 value를 가져온다
  const DayRates = DayList.map((D, index) => { //map((D, index) 함수에서 index는 DayList의 index를 뜻한다 
  // map() 함수를 이용해 DayList의 값을 D 라는 인자로 받는다      
    return {
      Day: D,  //월~일이 들어감
      num: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1), // 랜덤함수가 들어감
    }
    // 화살표 함수를 이용해 key가 각각 Day,num value가 D,랜덤함수인 딕션너리를 만든다
  })
  // DayRates ->
    // 0: { day: '월', rate: 1 }
    // 1: { day: '화', rate: 3 }
    // 2: { day: '수', rate: 5 }
    // 3: { day: '목', rate: 4 }
    // 4: { day: '금', rate: 4 }
    // 5: { day: '토', rate: 1 }
    // 6: { day: '일', rate: 2 } 

  return (
      <>   {/* jsx문법은 태그로 감싸져야함으로 */}
      <Title>내 일주일은?</Title> 
      {DayRates.map((D, idx) => { // 
        return ( 
          <Week Key={idx}>
            <DayBox>
              <DayText>
                {D.Day}
              </DayText>

              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <Circle
                    key={idx}
                    style={{ backgroundColor: D.num < idx ? "#ddd" : "yellow" }}
                  ></Circle>
                );
              })}
              <Triangle
                onClick={() => {
                   history.push(`/detail/${D.Day}`) }
                }
              />
            </DayBox>
          </Week>



        )
      })}
    </>
  )
}
const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Week = styled.div`
  margin: 25px 0px 0px 0px; 
`;

const DayBox = styled.div`
display:flex;
justify-content: center;
align-items: center; 
margin: 1rem 0px; 
width: 100%;
`;
const DayText = styled.p` 
margin: 0px 0.5rem 0px 0px;
font-weight: bold;
`;

const Circle = styled.div` 
width: 30px; 
height: 30px; 
border-radius: 30px; 
margin: 5px; 
`;
const Triangle = styled.div`
  width: 0;
	height: 0;
	border-top: 20px solid transparent;
	border-bottom: 20px solid transparent;
	border-left: 30px solid lightblue;
  margin: 0px 0px 0px 15px;
  cursor: pointer
`;


export default MainGrade