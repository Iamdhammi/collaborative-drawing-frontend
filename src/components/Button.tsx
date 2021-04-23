import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
    
`;
const LinkButton = styled(Link)`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    text-decoration: none;
`;

interface ButtonProps {
    type?: string,
    buttonStyle?: any
}

const Button: React.FC<ButtonProps> = ({ children, type}) => {
    switch (type) {
        case 'link':
            return (
                <LinkButton to={"/"}>
                    {children}
                </LinkButton>
            )
        default:
            return (
                <StyledButton>
                    {children}
                </StyledButton>
            )
    }
}

export default Button;