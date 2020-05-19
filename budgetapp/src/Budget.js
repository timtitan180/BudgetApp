class Budget extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            budget: " ",
            isEntered: false
        }
        this.setBudget = this.setBudget.bind(this);
        this.setBoolean = this.setBudget.bind(this);

}

setBudget() {
    this.setState ({
        budget: `Budget is ${budget}`
    })
}

render() {
    return (
        <div>
        <input type= "textbox" id="budget" placeholder="Enter budget" clicked={this.state.isEntered} onChange={this.setBudget}/>
        <input value={this.state.budget} onChange={<p>Your Budget is ${this.state.budget}</p>}/>
        </div>
}

}

export default Budget
