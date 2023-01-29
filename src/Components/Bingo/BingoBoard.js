import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getFilteredDreamies, getFilteredNotOnIsland, getRandomVillagers, NUMBER_OF_VILLAGERS } from "../../Redux/Helpers";
import BingoFreeSlot from "./BingoFreeSlot";
import BingoSlot from "./BingoSlot";

const mapStateToProps = (state) => {
    return{
        villagers: state.villagerState.villagers,
        selectedRandoms: getRandomVillagers(state.villagerState.villagers)
    }
}

class BingoBoard extends React.Component{
    render(){
        return(
            <div className="bingo-page">
                {/* <button className="generate-button" type="button" onClick={() => getRandomVillagers(this.props.villagers)}>Generate Card</button> */}
                <div className='main-bingo'>
                    {this.props.selectedRandoms.slice(0, NUMBER_OF_VILLAGERS / 2).map((s, i) => {
                        return <BingoSlot villager={s} key={i} />
                    })}
                    <BingoFreeSlot />
                    {this.props.selectedRandoms.slice(NUMBER_OF_VILLAGERS / 2, this.props.selectedRandoms.length).map((s, i) => {
                        return <BingoSlot villager={s} key={i} />
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BingoBoard)