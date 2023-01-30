import React from "react";

class BingoSlot extends React.Component {
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
            backgroundColor: this.props.villager.color,
            color: this.props.villager.textColor
        }

        const checkedClassName = "check-mark " + (this.state.active ? "active" : "inactive")

        return(
            <div className='villager-slot' onClick={() => this._setChecked()}>
                <img className='villager-img-slot' src={this.props.villager.imageSource} alt={this.props.villager.name["name-USen"]} />
                <p className='villager-name-slot'><span style={spanStyle}>{this.props.villager.name["name-USen"]}</span></p>
                <p className={checkedClassName}>O</p>
            </div>
        )
    }
}

export default BingoSlot