import { createContext, useContext, useEffect, useReducer } from "react";
import { products } from "../data/productArray";
import reducer from "../reducers/ProductReducer";
const initialState = {
  isLoading: false,
  products: [],
  isGrid:true,
  priceFilter:""
  
  //   categories:[],
  //   brands:[]
};

const ProductAppContext = createContext();

const ProductAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // todo get all products
  const getAllProducts = () => {
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: { products },
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const filterData = products;
    const filterPro = filterData.filter((cur) => {
      return cur.category == value;
    });
    console.log("filterPro",filterPro)
    dispatch({
      type: "FILTER_CATEGORY",
      payload: { filterPro },
    });
  };

//   todo handle view Change

const handleViewChange= (view)=>{
    dispatch({
        type:'SET_VIEW',
        payload:{view}
    })
}

// todo handlePrice Filter 
const handlePriceFilter =(e)=>{
    const value = e.target.value ;
    console.log("value",value)
    const filterPriceProduct = products.filter((cur)=>{
        if (value ==""){
             products
        }
        else if(cur.price == value){
            return cur
        }
        

       
    })

    console.log(filterPriceProduct)
     dispatch({
           type :"SET_FILTER_PRICE" ,
           payload:{filterPriceProduct}
        })


}
  return (
    <ProductAppContext.Provider
      value={{ state, getAllProducts, handleCategoryChange,handleViewChange ,handlePriceFilter}}
    >
      {children}
    </ProductAppContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductAppContext);
};

export { ProductAppProvider, useProduct };
