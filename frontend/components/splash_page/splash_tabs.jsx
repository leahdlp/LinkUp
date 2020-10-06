import React from "react";
import Tab from "./splash_tab_item";

class NavTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentGroupTab: 0,
        currentWorkTab: 0,
    };

    this.selectTabRight = this.selectTabRight.bind(this);
    this.selectTabLeft = this.selectTabLeft.bind(this);

    this.img1;
    this.img2;
  }

    componentDidMount() {
        this.img1 = document.getElementsByClassName("img-long")[0];
        this.img2 = document.getElementById("works-img");
        this.setState({
            currentGroupTab: 0,
            currentWorkTab: 0
        })
    }

    selectTabRight(type) {
        let idx = (this.state[type] + 1) % 3

        this.setState({ [type]: idx });
    }

    selectTabLeft(type) {
        let idx = this.state[type] === 0 ? 2 : (this.state[type] - 1);
        console.log(idx)
        console.log(this.state[type])
        this.setState({ [type]: idx })
    }

    render() {
        const group_idx = this.state.currentGroupTab;
        const work_idx = this.state.currentWorkTab
        const group_panes = [
            {
                image: "couch-comradery.jpg", 
                content: (
                    <div>
                        <h3>Women programmers</h3>
                        <p>
                            Over 250,000 women gather in Meetup groups around the world to sharpen 
                            their software development skills.
                        </p>
                    </div>
                )
            },
            { 
                image: "embrace.jpg",
                content: (
                    <div>
                        <h3>Nature photography</h3>
                        <p>
                            Over 1.5 million photographers around the world gather locally to share 
                            their love of art and nature.
                        </p>
                    </div>
                )
            },
            { 
                image: "taking-in-the-sites.jpg",
                content: (
                    <div>
                        <h3>Outdoor adventures</h3>
                        <p>
                            Over 6 million adventure seekers around the world meet in local groups to 
                            share new experiences together.   
                        </p>
                    </div>
                )
            }
        ];

        const work_panes = [
            {
                image: "star-wars.jpg",
                content: (
                    <div>
                        <h3>Choose what you’re into</h3>
                    </div>
                )
            },
            {
                image: "dia-de-los-muertos.jpg",
                content: (
                    <div>
                        <h3>Meet people in your area who share your passion</h3>
                    </div>
                )
            },
            {
                image: "got-hands.jpg",
                content: (
                    <div>
                        <h3>Do more of what makes you tick</h3>
                    </div>
                )
            }
        ]

        const group_selected = group_panes[group_idx];
        const work_selected = work_panes[work_idx];

        const type = this.props.type;

        let selected = type === "group" ? group_selected : work_selected;
        let panes = type === "group" ? group_panes : work_panes;
        let state_slice = type === "group" ? "currentGroupTab" : "currentWorkTab";
        let current_pane = type === "group" ? this.state.currentGroupTab : this.state.currentWorkTab;
        let iden = type === 'group' ? "" : "works-content"

        // let img1 = document.getElementsByClassName("splash-img")
        // let img2 = document.getElementById("works-img");


        // console.log(img);
        if (!this.img1 || !this.img2) return null;

        this.img1.setAttribute("id", `group-tab-${this.state.currentGroupTab}`); 
        this.img2.setAttribute("id", `works-tab-${this.state.currentWorkTab}`);
        // this.img1.border = "40px solid blue"
        // this.img1.setAttribute("style", `background-image: image_url("${
        //     group_panes[this.state.currentGroupTab].image
        // }")`); 
        // this.img2.setAttribute("style", `background-image: image_url("${
        //     work_panes[this.state.currentWorkTab].image
        // }")`);

        return (
        <div className="splash-tab">
            {/* <div className="=splash-tab-content-container"> */}
                <div className="splash-tab-content">
                    <i 
                        className="splash-arrows"
                        className="fas fa-chevron-left"
                        onClick={() => this.selectTabLeft(state_slice)}    
                    ></i>
                    <article id={iden}>{selected.content}</article>
                    <i 
                        className="splash-arrows"
                        className="fas fa-chevron-right"
                        onClick={() => this.selectTabRight(state_slice)}
                    ></i>
                </div>
            {/* </div> */}
            <div className="slide-section2">
            <Tab
                currentPane={current_pane}
                switchTab={this.selectTab}
                panes={panes}
            />
            </div>
        </div>
        );
    }
}

{/* <SplashTabs /> */}
{/* <div className="slide"></div> */}

export default NavTabs;
