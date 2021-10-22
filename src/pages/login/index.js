import React, { Component } from 'react';

import { FormContent, Text, Button, Input, IconGitHub, IconRigthArrow } from './styles';
class Index extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <FormContent onSubmit={this.handleSubmit}>

                <IconGitHub />

                <Input 
                    type="text" 
                    placeholder="Usuário" 
                />

                <Button > 
                    <Text>Entrar  </Text> 
                    <IconRigthArrow />
                </Button>
            </FormContent>
        )
    }
}

export default Index;