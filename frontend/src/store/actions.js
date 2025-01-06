// ./src/store/actions
import axios from 'axios'
// ✅ Import the constant correctly using destructuring
//import { API_BASE } from '../../config'
const API_BASE = 'http://localhost:5000';  // Remove import and define directly here

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from './mutation-types'

export const productActions = {
  allProducts ({ commit }) {
    console.log('Fetching all products...')
    commit(ALL_PRODUCTS)
    axios({
      url: `${API_BASE}/products`,  // ✅ Corrected usage here
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    }).catch(error => console.error('Error fetching products:', error))
  },

  productById ({ commit }, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/products/${payload}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    }).catch(error => console.error('Error fetching product:', error))
  },

  addProduct ({ commit }, payload) {
    commit(ADD_PRODUCT)
    axios.post(`${API_BASE}/products`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    }).catch(error => console.error('Error adding product:', error))
  },

  updateProduct ({ commit }, payload) {
    commit(UPDATE_PRODUCT)
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    }).catch(error => console.error('Error updating product:', error))
  },

  removeProduct ({ commit }, payload) {
    commit(REMOVE_PRODUCT)
    axios.delete(`${API_BASE}/products/${payload}`).then(response => {
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    }).catch(error => console.error('Error deleting product:', error))
  }
}

export const manufacturerActions = {
  allManufacturers ({ commit }) {
    commit(ALL_MANUFACTURERS)
    axios.get(`${API_BASE}/users`).then(response => {
      commit(ALL_MANUFACTURERS_SUCCESS, response.data)
    }).catch(error => console.error('Error fetching manufacturers:', error))
  }
}
