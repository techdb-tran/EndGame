import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import Slider from "../../components/Slider/SliderTop";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import useScrollToTop from "../../hooks/useScrollToTop"
import { actFetchAllProduct } from "../../redux/features/products/productsSlice";


const HomePage = () => {
  useScrollToTop()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchAllProduct());
  },[]);

  const {allProducts} = useSelector(state=>state.products);
  const[isClick, setIsClick] = useState(false)

  // const {products, isLoading} = useSelector((state) => state.products)

  // console.log(products);
  // useEffect(() => {
  //   dispatch(actFetchAllProduct())
  // },[])

  // randomizing the products in the list
  const tempProducts = [];
  if(allProducts?.length > 0){
    for(let i in allProducts){
      let randomIndex = Math.floor(Math.random() * allProducts.length);

      while(tempProducts.includes(allProducts[randomIndex])){
        randomIndex = Math.floor(Math.random() * allProducts.length);
      }
      tempProducts[i] = allProducts[randomIndex];
    }
  }

  // let catProductsOne = allProducts.filter(product => product.category === categories[0]);
  // let catProductsTwo = products.filter(product => product.category === categories[1]);
  // let catProductsThree = products.filter(product => product.category === categories[2]);
  // let catProductsFour = products.filter(product => product.category === categories[3]);
  const [filterType, setFilterType] = useState(allProducts);
  function handleClick(type) {
      switch (type) {
        case "accessory":
          setFilterType(
            allProducts.filter((item) => item.productType === "Accessory")
          );
          break;
        case "livingTool":
          setFilterType(
            allProducts.filter((item) => item.productType === "LivingTool")
          );
          break;
        case "stationary":
          setFilterType(
            allProducts.filter((item) => item.productType === "Stationary")
          );
          break;
        default:
          setFilterType(allProducts);
          break;
    }
  }
  return (
    <main>
      <div className='slider-wrapper'>
        <Slider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>See our products</h3>
      <button onClick={() => {handleClick("accessory")
                              setIsClick(true)}}>Accessories</button>
      <button onClick={() => {handleClick("livingTool")
                              setIsClick(true)}}>Living Tools</button>
      <button onClick={() => {handleClick("stationary")
                             setIsClick(true)}}>Stationaries</button>
              </div>
              {/* { productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts = {tempProducts} />} */}
              <ProductList products={isClick?filterType:allProducts} />
            </div>

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
};

export default HomePage;
