import React from 'react';
import {Container,Warning} from './style';
import Card from './Card';
import {products} from '../../utils/utils';

// Buyrutmalar 
export default class Buyrutmalar extends React.Component{
    state={
        active:null,
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
            if(!this.state.active) {
                let newUser = {
                    id:this.state.products.length + 1,
                    title:this.state.title,
                    short_title:this.state.short_title,
                    cost:this.state.cost,
                    add_title:this.state.add_title,
                }
                // console.log(newUser);
                this.setState({products:[...this.state.products, newUser]})
            }else{
                let newUser = {
                    title:this.state.title,
                    short_title:this.state.short_title,
                    cost:this.state.cost,
                    add_title:this.state.add_title,
                }
                let user = this.state.products.map((value)=>{
                    return value.id === this.state.active? {...value, ...newUser}: value
                });
                this.setState({products:user})
            }
            this.setState({
                active:null,
                title:'',
                short_title:'',
                cost:'',
                add_title:'',
            })
        }
        const onEdit = (value) =>{
            // console.log(id);
            this.setState({
                active:value.id,
                title:value.title,
                short_title:value.short_title,
                cost:value.cost,
                add_title:value.add_title
            })
        }
        return(
           <div>
                <Container>
                    <div className="edit">
                        <div><button >Add user</button></div>
                        <input value={this.state.title} onChange={onChange} type="text" name="title" placeholder="title" />
                        <input value={this.state.short_title} onChange={onChange} type="text" name="short_title" placeholder="short_title" />
                        <input value={this.state.cost} onChange={onChange} type="text" name="cost" placeholder="cost" />
                        <input value={this.state.add_title} onChange={onChange} type="text" name="add_title" placeholder="add_title" />
                        <button onClick={onAdd}>Add</button>
                    </div>
                    
                    {
                        this.state.products.length ? 
                            this.state.products.map((value)=>{
                                return (
                                    <Card active={this.state.active === value.id}
                                     onDelete={onDelete}
                                     onEdit= {onEdit}
                                     onSave= {onAdd}
                                    key={value.id} value={value} />
                                )
                            }
                            ): <Warning className="warn">No any Information</Warning>
                    }
                </Container>
           </div>
        )
    }
}