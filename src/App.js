import React from "react";
import CardCreator from "./CardCreator";
import Scroll from "./scrollable/scroll";
import SearchBox from "./SearchBox";
import './Style/App.css'

class App  extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        };
    }
    //utiliser un useEffect suffit
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robot =>this.setState({robots: robot }));
    }


    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }


    render(){
        const filteredRobot = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardCreator robots={filteredRobot}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App;