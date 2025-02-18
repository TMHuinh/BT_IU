import React from "react";
<style>

</style>

class AddUserInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Age: "",
        };
    }

    // Hàm xử lý khi người dùng thay đổi giá trị input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Hàm xử lý khi form được submit
    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn form reload trang
        // Gọi hàm từ component cha và truyền user mới vào
        this.props.handleAddnewUser({
            id: Math.floor(Math.random() * 100 + 1) + "user", // Tạo id ngẫu nhiên cho user
            Name: this.state.Name,
            Age: this.state.Age,
        });
        // Reset form sau khi thêm
        this.setState({
            Name: "",
            Age: "",
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label style={{ color: 'black' }}>Name:</label>
                        <input
                            type="text"
                            name="Name"
                            value={this.state.Name}
                            onChange={this.handleChange} // Gọi hàm khi giá trị input thay đổi
                        />
                    </div>

                    <div>
                        <label style={{ color: 'black' }}>Age:</label>
                        <input
                            type="text"
                            name="Age"
                            value={this.state.Age}
                            onChange={this.handleChange} // Gọi hàm khi giá trị input thay đổi
                        />
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
