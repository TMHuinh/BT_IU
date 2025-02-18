import React from "react";

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc' 
        };
    }

    // Hàm xử lý sự kiện khi giá trị input thay đổi
    handleInput = (event) => {
        this.setState({
            valueInput: event.target.value
        });
    };

    render() {
        const { valueInput } = this.state; 

        return (
            <div>
                <input 
                    type="text" 
                    value={valueInput} 
                    onChange={this.handleInput} 
                />
                <div>
                    <span>{valueInput}</span> 
                </div>
            </div>
        );
    }
}

export default Childcomponent;
