import { axiosInstance } from "../lib/axios.js";
import {create} from "zustand"

export const useProductStore = create((set) => ({
    newProduct: null,
    products: [],
    updatedProduct: null,
    isCreatingProduct: false,
    isGettingProduct: false,

    createProduct: async (data) => {
        set({isCreatingProduct: true});
        try {  
            if(!data.name) {
                return {success: false, message: "Por favor preencha o campo nome."}
            }
            
            const res = await axiosInstance.post("/products/create", data);

            set({newProduct: res});
    
        } catch (error) {
            console.log("error at useProductStore createProduct const async func: " + error)
            return {success: false, message: "Erro interno do servidor."}
        }
        finally { 
            set({isCreatingProduct: false});
        }
    },

    getProducts: async () => {
        set({isGettingProduct:true});
        try {
            const res = await axiosInstance.get("/products/get");

            set({products: res});
        }
        catch (error) {
            console.log("error at getProducts useProductStore async func: " + error)
        }
        finally {
            set({isGettingProduct: false});
        }
    },

    /*updateProduct: async (data) => {
        set({isUpdatingProduct: true});
        try {
            
        } catch (error) {
            
        }
    }*/
}));