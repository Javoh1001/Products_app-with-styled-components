import React from 'react';
import {Container,Warning} from './style';
import Card from './Card';
import {products} from '../../utils/utils';

// Buyrutmalar 
export default class Buyrutmalar extends React.Component{
    state={
        products:products,
        title:'',
        short_title:'',
        cost:'',
        add_title:'',
    }
    render(){
        const onDelete = (id) =>{
            let newDate = this.state.products.filter((value)=>{
                return value.id !== id
            })
            this.setState({products:newDate})
            console.log(id,'id');
        }
        const onChange= (e) =>{
            console.log(e.target.value, e.target.name);
            this.setState({[e.target.name]:e.target.value})
        }
        const onAdd = () =>{
            if(
                this.state.title.length !=0 &&
                this.state.short_title.length !=0 &&
                this.state.cost.length !=0 &&
                this.state.add_title.length !=0 
                ) {

                let newUser = {
                    id:this.state.products.length + 1,
                    title:this.state.title,
                    short_title:this.state.short_title,
                    cost:this.state.cost,
                    add_title:this.state.add_title,
                }
                console.log(newUser);
                this.setState({products:[...this.state.products, newUser]})
            }else{
                alert('fill in the blank')
            }
        }
        return(
           <div>
                <Container>
                    <div className="edit">
                        <div><button >Add user</button></div>
                        <input onChange={onChange} type="text" name="title" placeholder="title" />
                        <input onChange={onChange} type="text" name="short_title" placeholder="short_title" />
                        <input onChange={onChange} type="text" name="cost" placeholder="cost" />
                        <input onChange={onChange} type="text" name="add_title" placeholder="add_title" />
                        <button onClick={onAdd}>Add</button>
                    </div>
                    
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