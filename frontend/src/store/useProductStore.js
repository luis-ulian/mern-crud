import { axiosInstance } from "../lib/axios.js";
import {create} from "zustand"
import toast from "react-hot-toast"

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

            toast.success("Produto criado com sucesso!");
    
        } catch (error) {
            console.log("error at useProductStore createProduct const func: " + error);
            
            toast.error(error.response.data.message);
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
            console.log("error at getProducts useProductStore func: " + error)
            toast.error(error.response.data.message);
        }
        finally {
            set({isGettingProduct: false});
        }
    },

    updateProduct: async (data) => {
        set({isUpdatingProduct: true});
        try{
            const res = await axiosInstance.post("/products/update/" + data._id, data)

        } catch (error) {
            console.log("error at updateProduct useProductStore func" + error);
            toast.error(error.response.data.message);
        }
        finally{
            set({isUpdatingProduct:false});
        }

    }
}));