import React from 'react';
import {Container, User} from './style';


// Card

export default class Card extends React.Component{
    render(){
        const {id,title,short_title,cost,add_title,user,Edit,Delete} = this.props.value
        console.log(this.props.active);
        return(
           <div>
                <Container>
                    <User.Ul size={'id'}><li >{id}</li></User.Ul>
                    <User.Ul><li>{title}</li></User.Ul>
                    <User.Ul><li>{short_title}</li></User.Ul>
                    <User.Ul><li>{cost}</li></User.Ul>
                    <User.Ul size={'chizburger'}><li>{add_title}</li></User.Ul>
                        <User.Ul size={'ed'}>
                            <li>
                               {
                                   this.props.active ? (
                                    <button  onClick={()=> this.props.onSave()}>Save</button>
                                   ) :(
                                    <button  onClick={()=> this.props.onEdit({id,title,short_title,cost,add_title,user,Edit,Delete})}>Edit</button>
                                   )
                               } 
                            </li>
                        </User.Ul>
                        
                  
                    <User.Ul size={'ed'} onClick={()=>this.props.onDelete(id)}><li><button >Delete</button></li></User.Ul>
                </Container>
           </div>
        )
    }
}