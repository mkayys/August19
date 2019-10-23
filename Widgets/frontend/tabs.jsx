import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedIdx: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        return () => {
            // e.preventDefault();
            this.setState({ selectedIdx: idx });
        }
    }

    render() {
        // debugger
        const { tabsArr } = this.props;
        const tabs = tabsArr.map((tab, idx) => (
                <li className="tab-title" onClick={this.handleClick(idx)} key={idx}>
                    <h1>{tab.title}</h1>
                    {/* <div>{tab.content}</div>  */}
                </li>
            )
        );
        // console.log(tabs)
        return (
            <div className="tabs-container">
                <ul>
                    {tabs}
                </ul>
                <div className="tab-content">
                    {this.props.tabsArr[this.state.selectedIdx].content}
                </div>
            </div>
        )
    }
};

export default Tabs;