import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFFFFF;

    border: 1px solid #81259D;
    border-radius: 20px;
    overflow: hidden;
    padding: 0 10px;

    display: flex;

    & input {
        width: 100%;
        height: 42px;
        border-radius: 20px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
`

export const IconContainer = styled.div`
    color: #000000;
    align-self: center;
    cursor: pointer;
    font-size: 1.25rem;
`

export const ErrorMessage = styled.p`
    color: #FF0000;
    font-size: 0.75rem;
    margin: 8px 0 0 10px;
`