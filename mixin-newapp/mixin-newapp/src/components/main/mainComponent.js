import React, { Component } from 'react'
import './mainComponent.css';
import ButtonComponent from '../button/buttonComponent';
import {HeaderComponent} from '../header/headerComponent';

export class MainComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            showHeader: false
        }
    }

    toggleHeader =() => {
        this.setState({showHeader: !this.state.showHeader});
    };
    
    render() {
        return(
            <>
                {this.state.showHeader ? <ButtonComponent methodToRun={this.toggleHeader} name="hide"></ButtonComponent> : <ButtonComponent methodToRun={this.toggleHeader} name="show"></ButtonComponent>}
                {this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent> : null}
                
            </>
          );
    }
}
