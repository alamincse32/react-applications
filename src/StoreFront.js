import React from "react";
import './index.css';
import { useState} from "react";
import Product from "./Product";
export default function StoreFront(){
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[validation, setValidation] = useState("");
    const[products, setProducts] = useState([]);

    function handleFormSubmission(event){
        event.preventDefault();

        if(!name){
            setValidation("Please enter a name");
            return;
        }
        if(!description){
            setValidation("Please enter a description");
            return;
        }
        setProducts([...products, {id: products.length+1, name:name, description:description}]);
        setName("");
        setDescription("");
        setValidation("");
    }

    function handleDeleteAction(id){
        const result = products.filter(product=> product.id !== id)
        setProducts(result);
    }
    return(
        <>
            <form onSubmit={handleFormSubmission}>
               <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" className="textfield" placeholder="Enter the name" value={name} onChange={e=>setName(e.target.value)}></input>
               </div>
               <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" placeholder="Enter the description" value={description} className="textfield" onChange={e=>setDescription(e.target.value)}></input>
               </div>
               <div className="form-footer">
                    <div className="validation-message">{validation}</div>
                </div>
                <input type="submit" className="btn btn-primary" value="Add product"/>
            </form>
            <div>{products.length === 0 && <p>Add your first product</p>}</div>
            <ul className="store-front">
                {products.map(product =><li kye={product.id}><Product details={product}/>
                <button className="btn-outline btn-delete" onClick={()=>handleDeleteAction(product.id)}>Delete</button></li>)}

            </ul>
        </>
    );

}