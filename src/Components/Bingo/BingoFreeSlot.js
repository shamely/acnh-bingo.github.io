import React from "react";

class BingoFreeSlot extends React.Component {
    render(){
        const spanStyle = {
            backgroundColor: 'white'
        }

        return(
            <div className='villager-slot'>
                <img className='villager-img-slot' src={require('../../assets/images/nook-miles-ticket.png')} alt='Free Slot' />
                <p className='villager-name-slot'><span style={spanStyle}>Free Slot</span></p>
            </div>
        )
    }
}

export default BingoFreeSlot