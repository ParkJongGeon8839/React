import React, { useMemo, memo, useCallback, useReducer, useContext } from 'react';
import personReducer from './person-reducer';
import './App.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

function App() {
  // person: 현재 상태 객체
  // dispatch: 상태 변경 요청을 보내는 함수
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleAdd = useCallback(() => {
    const name = prompt('멘토의 이름을 입력하세요');
    const title = prompt('멘토의 직함을 입력하세요');
    dispatch({ type: 'added', name, title });
  });

  const handleUpdate = useCallback(() => {
    const prev = prompt('변경 이전의 멘토 이름을 입력하세요');
    const next = prompt('변경 이후의 멘토 이름을 입력하세요');
    dispatch({ type: 'updated', prev, next });
  });

  const handleDelete = useCallback(() => {
    const name = prompt('삭제할 멘토 이름을 입력하세요');
    dispatch({ type: 'deleted', name });
  });

  return (
    <>
      <div>
        <h1>
          {person.name} {person.title}
        </h1>
        <p>{person.name}의 멘토는:</p>
        <ul>
          {person.mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          ))}
        </ul>
        <Button text="멘토추가하기" onClick={handleAdd}>
          멘토 추가하기
        </Button>
        <Button text="멘토 이름 바꾸기" onClick={handleUpdate}>
          멘토 이름 바꾸기
        </Button>
        <Button text="멘토 삭제하기" onClick={handleDelete}>
          멘토 삭제하기
        </Button>
      </div>

      <hr />
      <DarkModeProvider>
        <Header /> {/*children*/}
        <Main /> {/*children*/}
        <Footer /> {/*children*/}
      </DarkModeProvider>
    </>
  );
}

const initialPerson = {
  name: '김사과',
  title: '프로그래머',
  mentors: [
    {
      name: '반하나',
      title: '프로젝트 매니저',
    },
    {
      name: '오렌지',
      title: '시니어 프로그래머',
    },
  ],
};

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, '렌더링 되었음!!');
  const result = useMemo(() => calculate(), []);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'deepskyblue',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
        padding: '20px',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculate() {
  for (let i = 0; i < 10000; i++) {
    console.log('😜');
  }
  return 1000;
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      여기는 메인@_@
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      프로필
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      ProductDetail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>Dark Mode</span>
        ) : (
          <span>Light Mode</span>
        )}
        <button onClick={() => toggleDarkMode()}>클릭</button>
      </p>
    </div>
  );
}

function Footer() {
  return <footer className="footer">푸터</footer>;
}

export default App;
