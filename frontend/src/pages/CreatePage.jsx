import React, { useState } from 'react'
import "../styles/CreatePage.css"
import toast from 'react-hot-toast'
import {useProductStore} from '../store/useProductStore.js'

const CreatePage = () => {

  const {createProduct} = useProductStore();

  const [formData, setFormData] = useState({
    productName: '',
    quantity: 0,
    price: 0.00,
    image: '',
  });

  const validateForm = () => {
    if(!formData.productName.trim()) return toast.error("Nome do produto precisa ser preenchido!");
    if(formData.price < 0) return toast.error("Valor do produto não pode ser negativo!");
    if(formData.quantity < 0) return toast.error("Quantidade do produto não pode ser negativa!");

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) createProduct(formData);
  }

  return (
    <div className="createPage">
      <div className="box">
        <h1 className='createPageTitle'>Criar Produto</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className="formControl">
            <label className="label">
              <span className='labelText'>Nome do Produto</span>
            </label>
            <div className="inputController">
              <input 
                type="text"
                className='input'
                placeholder='Nome do produto'
                value={formData.productName}
                onChange={(e) => setFormData({...formData, productName: e.target.value})} 
              />
            </div>
          </div>
          <div className="formControl">
            <label className="label">
              <span className='labelText'>Quantidade</span>
            </label>
            <div className="inputController">
              <input 
                type="number"
                className='input'
                placeholder='1'
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})} 
              />
            </div>
          </div>
          <div className="formControl">
            <label className="label">
              <span className='labelText'>Valor</span>
            </label>
            <div className="inputController">
              <input 
                type="number"
                className='input'
                placeholder='1.000,00'
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})} 
              />
            </div>
          </div>
          <div className="formControl">
            <label className="label">
              <span className='labelText'>Link da imagem</span>
            </label>
            <div className="inputController">
              <input 
                type="text"
                className='input'
                placeholder='https://exemplo.com/imagem.png'
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})} 
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePage