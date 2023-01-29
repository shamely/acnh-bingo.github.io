import React from "react";
import { connect } from "react-redux";
import { getFilteredDreamies, getFilteredOnIsland } from "../../Redux/Helpers";
import VillagerAutoComplete from './VillagerAutoComplete'
import VillagerIcon from "./VillagerIcon";

const mapStateToProps = (state) => {
    return{
        villagers: state.villagerState.villagers,
        dreamies: getFilteredDreamies(state.villagerState.villagers),
        onIslands: getFilteredOnIsland(state.villagerState.villagers)
    }
}

const TEXT_ALREADY_LIVING = "Already on your island:"
const TEXT_DREAMIE_CHOOSE = "Pick your hunt dreamie:"

class VillagerSearch extends React.Component{
    _renderVillagerList(){
        if(this.props.isDreamie && this.props.dreamies.length > 0)
            return(
                <div className="villagers-selection">
                    {this.props.dreamies.map((d, i) => {
                        return <VillagerIcon villager={d} isDreamie={this.props.isDreamie} key={i} />
                    })}
                </div>
            )
            
        if(!this.props.isDreamie && this.props.onIslands.length > 0)
            return(
                <div className="villagers-selection">
                    {this.props.onIslands.map((d, i) => {
                        return <VillagerIcon villager={d} isDreamie={this.props.isDreamie} key={i} />
                    })}
                </div>
            )
        
        return null
    }
    
    render(){
        return(
            <div className="villager-search">
                <h2 className="villager-search-title">{this.props.isDreamie ? TEXT_DREAMIE_CHOOSE : TEXT_ALREADY_LIVING}</h2>
                <VillagerAutoComplete isDreamie={this.props.isDreamie} />
                {this._renderVillagerList()}
                <div className="divider">
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(VillagerSearch)