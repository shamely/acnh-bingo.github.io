import React from "react";

class BingoSlot extends React.Component {
    render(){
        const spanStyle = {
            backgroundColor: this.props.villager.color,
            color: this.props.villager.textColor
        }

        return(
            <div className='villager-slot'>
                <img className='villager-img-slot' src={this.props.villager.imageSource} alt={this.props.villager.name["name-USen"]} />
                <p className='villager-name-slot'><span style={spanStyle}>{this.props.villager.name["name-USen"]}</span></p>
            </div>
        )
    }
}

export default BingoSlot