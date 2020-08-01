import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import SignIn from './comps/SignIn'
import SignUp from './comps/SignUp'
import { projectAuth } from './firebase/config';

// root component
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <SignIn/>
      <SignUp/>
      <button onClick={event => {
        event.preventDefault()
        projectAuth.signOut()
      }}>Signout</button> */}
      <section className="sidebar">
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        </nav>
      </section>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
