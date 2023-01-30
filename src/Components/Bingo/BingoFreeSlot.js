import React from "react";

class BingoFreeSlot extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    }

    _setChecked(){
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        const spanStyle = {
            backgroundColor: 'white'
        }

        const checkedClassName = "check-mark " + (this.state.active ? "active" : "inactive")

        return(
            <div className='villager-slot' onClick={() => this._setChecked()}>
                <img className='villager-img-slot' src={require('../../assets/images/nook-miles-ticket.png')} alt='Free Slot' />
                <p className='villager-name-slot'><span style={spanStyle}>Free Slot</span></p>
                <p className={checkedClassName}>O</p>
            </div>
        )
    }
}

export default BingoFreeSlot