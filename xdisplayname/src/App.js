import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Combine first name and last name into full name
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
  }

  return (
    <div className="App">
     <div className='card'>
        <form onSubmit={handleSubmit}>
          <h1>Full Name Display</h1>
          <div>
            <label>First Name</label>:
          <input
            type="text"
            name="first"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          </div>
          <div>
          <label>Last Name</label>:
          <input
            type="text"
            name="last"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
      </div>
    </div>
  );
}

export default App;
