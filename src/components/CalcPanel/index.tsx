import React from 'react'

import {
    Container,
    LogoImage,
} from './styles'

import imgLogo from '../../assets/logo.svg'

const Header:React.FC = () => {
    return (
        <Container>
            <LogoImage src={imgLogo} alt="logo"/>
        </Container>
    )
}

export default Header