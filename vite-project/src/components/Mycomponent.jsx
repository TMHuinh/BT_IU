import React from "react";
import DisplayInfor from "./DisplayInfo";
import Childcomponent from "./Childcomponent";
import AddUserInfor from "./AddUserInfo";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 10 },
            { id: 3, Name: "Chien", Age: 32 },
        ],
    };

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser], // Thêm user mới vào đầu danh sách
        });
    };

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
        // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUser: listUserClone
        })
    }


    render() {
        return (
            <div>
                <h2>LIST USER</h2>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor>
                {/* <Childcomponent></Childcomponent> */}
                <hr />
                <DisplayInfor listUser={this.state.listUser}
                    handleDeleteUser={this.handleDeleteUser}
                ></DisplayInfor>

            </div>
        );
    }
}

export default Mycomponent;
