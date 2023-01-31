import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../../HOC/withRouteur";
import { getFilteredDreamies, getFilteredOnIsland } from "../../Redux/Helpers";
import VillagerAutoComplete from './VillagerAutoComplete'
import VillagerIcon from "./VillagerIcon";

const mapStateToProps = (state) => {
    return{
        villagers: state.villagerState.villagers,
        dreamieString: state.villagerState.dreamies,
        onIslandString: state.villagerState.onisland,
        dreamies: getFilteredDreamies(state.villagerState.villagers),
        onIslands: getFilteredOnIsland(state.villagerState.villagers)
    }
}

const TEXT_ALREADY_LIVING = "Already on your island:"
const TEXT_DREAMIE_CHOOSE = "Pick your hunt dreamie:"

class VillagerSearch extends React.Component{
    componentDidUpdate(prevProps){
        if(this.props.isDreamie && this.props.dreamieString !== prevProps.dreamieString){
            this.props.setSearchParams(searchParam => {
                if(this.props.dreamieString.length > 0) searchParam.set('dreamies', this.props.dreamieString)
                if(this.props.searchParams.get("onisland") !== null) searchParam.set('onisland', this.props.searchParams.get("onisland"))

                return searchParam
            })
        }

        if(!this.props.isDreamie && this.props.onIslandString !== prevProps.onIslandString){
            this.props.setSearchParams(searchParam => {
                if(this.props.onIslandString.length > 0) searchParam.set('onisland', this.props.onIslandString)
                if(this.props.searchParams.get("dreamies") !== null) searchParam.set('dreamies', this.props.searchParams.get("dreamies"))

                return searchParam
            })
        }
    }

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

const connectedComponent = connect(mapStateToProps)(VillagerSearch)
export default withRouter(connectedComponent)