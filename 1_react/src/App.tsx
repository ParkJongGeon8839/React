import React from 'react';
import Hello from './Hello.tsx';
import Hi from "./Hi.tsx"
import Counter from './Counter.tsx';
import "./App.css"

function App() {
  const style = {
    backgroundColor: "black",
    color: "deeppink",
    fontSize: 30,
    padding: "1rem"
  }

  // 로직
  const name = '김사과';
  const students = ['김사과', '반하나', '오렌지', '이메론'];

  // UI
  return (
    <>
      {/* UI 부분에서 JSX에서 주석을 다는 방법 */}
      <Hello />
      <div style={style}>{name}</div>
      <div className='box'></div>
      <div>{name}</div>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <img style={{ width: "200px", height: "200px"}} src="https://i.pinimg.com/1200x/d5/b2/57/d5b257ba79b416635ecce1564dbfea95.jpg" alt="밤하늘" />
      <Hi />
      <Hi name="김사과"/>
      <Hi name="김사과" color="deeppink" />
      <Counter />
      
    </>
  );
}

export default App;
