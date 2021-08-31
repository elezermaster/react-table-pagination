import React,{useState} from 'react';
import User from './user.jsx'
import Table from 'react-bootstrap/Table';
import Pagination from '../components/pagination'
import {paginate} from '../utils/paginate'
import PropTypes from 'prop-types'; // ES6

const Users = ({onDelete,onToggleBookmark,users}) => {
  const count = users.length
  const pageSize = 4
  const [activePage, setActivePage] = useState(1)
  const userCrop = paginate(users, activePage, pageSize)
  const startIndex = (activePage - 1) * pageSize
  const listUsers = userCrop && userCrop.map((user,index) => {
        return (
            <User
                key={user._id}
                user={user}
                index={startIndex + index + 1}
                onDelete={onDelete}
                onToggleBookmark={onToggleBookmark}
                />
        )
    })
    const handlePageChange = (pageIndex) => {
        console.log('pageIndx', pageIndex)
        setActivePage(pageIndex)
    }
    return (
        <React.Fragment>
            <Table striped bordered hover style={{display: (count === 0) ? "none" : "show"}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Qualities</th>
                    <th>Profession</th>
                    <th>Meetings</th>
                    <th>Rate</th>
                    <th>Favorites</th>
                    <td>{/*delete button*/}</td>
                    </tr>
                </thead>
                <tbody>
                {listUsers}
                </tbody>
            </Table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                activePage={activePage}/>
        </React.Fragment>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
}

export default Users
