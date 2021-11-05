import React from 'react';
import {Container,Warning} from './style';
import Card from './Card';
import {products} from '../../utils/utils';

// Buyrutmalar 
export default class Buyrutmalar extends React.Component{
    state={
        products:products,
    }
    render(){
        const onDelete = (id) =>{
            let newDate = this.state.products.filter((value)=>{
                return value.id !== id
            })
            this.setState({products:newDate})
            console.log(id,'id');
        }
        return(
           <div>
                <Container>
                    
                    {
                        this.state.products.length ? 
                            this.state.products.map((value)=>{
                                return (
                                    <Card onDelete={onDelete} key={value.id} value={value} />
                                )
                            }
                            ): <Warning className="warn">No any Information</Warning>
                    }
                </Container>
           </div>
        )
    }
}