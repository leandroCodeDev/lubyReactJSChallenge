import React, { Component } from 'react';

import {Content, ImageAvatar} from './styles';

class Index extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content>
                <ImageAvatar />
            </Content>
        )
    }
}

export default Index;