import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFFFFF;

    border: 1px solid #81259D;
    border-radius: 20px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    
    &:disabled {
        opacity: 0.6;
    }
    
    &:hover:disabled {
        cursor: default;
    }
`