import React, { Component } from 'react';

import {Content,ExitText,IconExit,NameUser} from './styles';

class Index extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content>
                <NameUser>{this.props.nameUser}</NameUser>
                <ExitText> Sair <IconExit/></ExitText>
            </Content>
        )
    }
}

export default Index;