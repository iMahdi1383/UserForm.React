import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    firstname: 'Mahdi',
    lastname: 'Askarpoor',
  });

  const FirstnameChanged = (e) => {
    /*
    ?  if we do not use '...user' here, firstname will be changed successfully
    !  but lastname will be delete.
    */
    setUser({ ...user, firstname: e.target.value });
  };

  const LastnameChanged = (e) => {
    /*
    ?  if we do not use '...user' here, lastname will be changed successfully
    !  but firstname will be delete.
    */
    setUser({ ...user, lastname: e.target.value });
  };

  return (
    <form>
      <h1>User Form</h1>
      <hr />
      <label htmlFor="firstname">FirstName: </label>
      <input
        onChange={FirstnameChanged}
        id="firstname"
        name="firstname"
        type="text"
      />
      <br />
      <label htmlFor="lastname">LastName: </label>
      <input
        onChange={LastnameChanged}
        id="lastname"
        name="lastname"
        type="text"
      />
      <hr />
      <h3>
        I am {user.firstname} {user.lastname}.
      </h3>
      <code
        style={{
          backgroundColor: '#2d2a2e',
          color: '#fafafa',
          padding: '0.5rem',
        }}
      >
        {JSON.stringify(user)}
      </code>
    </form>
  );
};

export default App;
