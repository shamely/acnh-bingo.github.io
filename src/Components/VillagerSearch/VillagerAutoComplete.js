import React from "react";
import { connect } from "react-redux";
import { getFilteredNotOnIslandAndNotDreamie, getSuggestionFormat } from "../../Redux/Helpers";
import { setDreamie, setOnIsland } from "../../Redux/VillagerRedux";

const mapStateToProps = (state) => {
    return{
        villagers: state.villagerState.villagers,
        data: getSuggestionFormat(getFilteredNotOnIslandAndNotDreamie(state.villagerState.villagers))
    }
}

class VillagerAutoComplete extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            namesSuggestions: [],
            namesSuggestionsIndex: 0,
            namesSuggestionsActive: false,
            typedText: ""
        }
    }

    _handleTyping(input){
        const query = input.target.value.toLowerCase()
        if(query.length > 1){
            const filterSuggestions = this.props.data.filter((suggestion) => suggestion.name.toLowerCase().indexOf(query) > -1)
            
            this.setState({
                typedText: query,
                namesSuggestions: filterSuggestions,
                namesSuggestionsActive: true
            })
        } else {
            this.setState({
                typedText: query,
                namesSuggestionsActive: false
            })
        }
    }

    _handleClick(input){
        this.setState({
            typedText: input.target.innerText,
            namesSuggestions: [],
            namesSuggestionsActive: false
        })
    }

    _handleKeys(input){
        // up arrow
        if(input.keyCode === 38){
            if(this.state.namesSuggestionsIndex === 0) return
            this.setState({
                namesSuggestionsIndex: this.state.namesSuggestionsIndex - 1
            })

            return
        }

        // down arrow
        if(input.keyCode === 40){
            if(this.state.namesSuggestionsIndex === this.state.namesSuggestions) return
            this.setState({
                namesSuggestionsIndex: this.state.namesSuggestionsIndex + 1
            })

            return
        }

        // enter
        if(input.keyCode === 13){
            if(this.state.namesSuggestions.length === 0) return

            this.setState({
                typedText: this.state.namesSuggestions[this.state.namesSuggestionsIndex].name,
                namesSuggestionsIndex: 0,
                namesSuggestionsActive: false
            })
        }
    }

    _clear(){
        this.setState({
            typedText: "",
            namesSuggestions: [],
            namesSuggestionsIndex: 0,
            namesSuggestionsActive: false
        })
    }

    _renderSuggestions(){
        return(
            <ul className="suggestions">
                {this.state.namesSuggestions.map((suggestion, index) => {
                    return(
                        <li 
                            className={index === this.state.namesSuggestionsIndex ? "active" : ""}
                            key={index}
                            onClick={(input) => this._handleClick(input)}
                        >
                            {suggestion.name}
                        </li>
                    )
                })}
            </ul>
        )
    }

    _submit(){
        const villagerSuggested = this.props.data.find(d => d.name === this.state.typedText)
        if(villagerSuggested === undefined) return

        this.props.dispatch(this.props.isDreamie ? setDreamie(villagerSuggested.id) : setOnIsland(villagerSuggested.id))
        this.setState({
            typedText: "",
            namesSuggestions: [],
            namesSuggestionsIndex: 0,
            namesSuggestionsActive: false
        })
    }

    render(){
        return (
            <div className="autocomplete">
                <div className="dropdown">
                    <div className="input-block">
                        <input 
                            type="text"
                            value={this.state.typedText}
                            onChange={(text) => this._handleTyping(text)}
                            onKeyDown={(key) => this._handleKeys(key)}
                        />
                        <span
                            onClick={() => this._clear()}
                        >
                            X
                        </span>
                    </div>
                    {this.state.namesSuggestionsActive && this._renderSuggestions()}
                </div>
                
                <button 
                    type="button"
                    onClick={() => this._submit()}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(VillagerAutoComplete)