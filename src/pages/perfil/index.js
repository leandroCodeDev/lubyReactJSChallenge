import React, { Component } from 'react';

import Avatar from '../../components/avatar'
import Header from '../../components/header'

import {Content,ContentAvatar} from './styles';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content>
                <Header nameUser={"leandro.dias"} />
                <ContentAvatar>
                    <Avatar />
                </ContentAvatar>
            </Content>
        )
    }
}

export default Index;