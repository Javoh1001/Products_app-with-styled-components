import styled from 'styled-components';

// card-css

const getSize = (size) =>{
    switch(size){
        case 'id':return '80px';
        case 'ed':return '20px'
        case 'chizburger':return '120px'
        default:
            return '220px';
    }
}
export const Container = styled.div`
    display:flex;
    width:1136px;
    background-color:#fff;
    border-radius:8px;
    margin-bottom:8px;
    height:60px;
    align-items:center;
    padding:10px 18px;
`

export const User = styled.div``

User.Ul = styled.ul`
    font-size:16px;
    font-family:'verdana';
    height:100%;
    display:flex;
    align-items:center;
    border-right:2px solid wheat;
    padding-left:16px;
    :nth-child(6){
        border-right:none;
    }
    :nth-child(7){
        border-right:none;
        margin-left:16px;
    }
    li{
        width:${({size})=>getSize(size)};
        list-style:none;
        button{
            border:none;
            // width:40px;
            padding:8px 12px;
            display:inline-block;
            cursor:pointer;
            
        }
    }
    
`
