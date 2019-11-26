import styled from 'styled-components';

export const Container = styled.div`
    
    margin: 30px auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        margin-top: 50px;
    }

    div {
        width: 450px;
        background: lightgray;
        padding: 10px;
        border-radius: 10px;
    }

    strong {
        font-size: 18px;
        margin: 0 15px;
    }

    button {
        width: 300px;
        margin-top: 10px;
        border: 0;
        border-radius: 4px;
        height: 48px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
`;
