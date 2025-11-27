import { useState } from 'react';
import Avartar from './comonents/Avatar';
import Profile from './comonents/Profile';
import InputUser from './comonents/InputUser';
import Userlist from './comonents/Userlist';

import './App.css';

function App() {
  return (
    <>
      <Avartar
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        isNew={true}
      />
      <hr />
      <Avartar
        image="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
        isNew={false}
      />
      <hr />
      <Profile
        image="https://images.unsplash.com/36/X7L5hgFXQZazzPaK3goC_14084990857_88cabf3b6d_o.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="오렌지"
        title="백엔드 개발자"
        isNew={true}
      />
      <hr />
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="반하나"
        title="AI 개발자"
        isNew={false}
      />
      <hr />
      <InputUser />
      <hr />
      <Userlist />
      <hr />
    </>
  );
}

export default App;
