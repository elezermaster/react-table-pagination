import React,{useState} from 'react';
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './API'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) => {
      const newUsers = users.filter(user => user._id !== userId)
      setUsers(newUsers)
  }
  const handleToggleBookMark = (userId) => {
      const newStateUsers = [...users]
      const index = newStateUsers.findIndex(user => user._id === userId)
      newStateUsers[index].favorites = !newStateUsers[index].favorites
      setUsers(newStateUsers)
  }
  return (
    <div className="App">
      <SearchStatus length={users.length}/>
      <Users
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookMark}
        users={users}
      />

    </div>
  );
}

export default App;
