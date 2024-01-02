import { useDispatch, useSelector } from "react-redux"
import productReducer from './../redux/reducers/productReducer';
import { useEffect } from "react";
import { getProductData, setError, setLoading, setProducts } from "../redux/actions/productActions";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { getBasketData, setBasket, setBasketLoading } from "../redux/actions/basketActions";

const MainPage = () => {
  const state = useSelector((store) => store.productReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading());
    dispatch(setBasketLoading())

    // Sepet verisini alma
    dispatch(getBasketData())

    // API'den verileri alma
    dispatch(getProductData())
  }, []);

  return (
    <div>
      {/* Sayfa Yükleniyorsa */}
      {state.isLoading && <Loading />}

      {/* Hata oluştuysa */}
      {state.isError && <p>Üzgünüz bir hata oluştu..</p>}

      <div className="d-flex flex-wrap gap-5 justify-content-center p-5">  {/* Veriler Yüklendiyse */}
        {state?.products.map((product) => <Card key={product.id} product={product} />)}</div>

    </div>
  )
}

export default MainPage