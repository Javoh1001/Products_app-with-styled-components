import styled from 'styled-components';
 
// Buyrutmalar-css
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:38px;
    background-color:wheat;
    // height:100vh;
    .edit{
        margin-bottom:20px;
    button{
        margin-bottom:20px;
        border:none;
        padding:8px 20px;
        cursor:pointer;
        background-color:green;
        color:#fff;
        font-family:'verdana';
        border-radius:8px;
    }

    input{
        width:200px;
        height:30px;
        border:none;
        outline:none;
        margin-right:12px;
        padding:12px;
        
    }
    }
`
export const Warning = styled.button`
    background-color:red;
    height:50px;
    text-align:center;
    width:100%;
    display:flex;
    align-items:center;
    font-size:30px;
    justify-content:center;
    color:#fff;
    border:none
`