import React from "react";
import { connect } from "react-redux";
import { removeDreamie, removeOnIsland } from "../../Redux/VillagerRedux";

class VillagerIcon extends React.Component{
    _removeVillagerFromList(){
        this.props.dispatch(this.props.isDreamie ? removeDreamie(this.props.villager.id) : removeOnIsland(this.props.villager.id))
    }

    render(){
        const borderStyle = {
            borderColor: this.props.villager.color
        }

        const spanStyle = {
            backgroundColor: this.props.villager.color,
            color: this.props.villager.textColor
        }

        return(
            <div className="villager-container">
                <div className="villager-bubble">
                    <img style={borderStyle} className="villager-icon" src={this.props.villager.iconSource} alt={this.props.villager.name["name-USen"]} />
                    <p className='villager-icon-name'><span style={spanStyle}>{this.props.villager.name["name-USen"]}</span></p>
                </div>
                <p className="delete" onClick={() => this._removeVillagerFromList()}><span>X</span></p>
            </div>
        )
    }
}

export default connect(null)(VillagerIcon)