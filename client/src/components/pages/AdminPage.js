import React, {Component} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminMain from '../AdminMain'

class AdminPage extends Component {

    render() {
        return (
            <div>
                <AdminSideBar>
                    <AdminMain/>
                </AdminSideBar>
        
            </div>
        )
    }
}
export default AdminPage;