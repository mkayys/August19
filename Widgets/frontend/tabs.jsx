import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedIdx: 0
        }
    }

    render() {
        // debugger
        const tabs = this.props.tabsArr.map((tab, idx) => {
            return (
                <li key={idx}>
                    <h1>{tab.title}</h1>
                    <article>{tab.content}</article>
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {tabs}
                </ul>
            </div>
        )
    }
};

export default Tabs;