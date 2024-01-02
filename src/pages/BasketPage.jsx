import { useDispatch, useSelector } from "react-redux"
import basketReducer from './../redux/reducers/basketReducer';
import { useEffect } from "react";
import { getBasketData, setBasketLoading } from "../redux/actions/basketActions";
import Loading from "../components/Loading"
import BasketItem from "../components/BasketItem";
const BasketPage = () => {
  const dispatch = useDispatch()
  const state = useSelector((store) => store.basketReducer)

  useEffect(() => {
    dispatch(setBasketLoading());

    dispatch(getBasketData())
  }, [])

  const total_count = state.basket.reduce((total, item) => total + item.adet * item.fiyat, 0)
  
  return (
    <div className="container my-5">
      {/* Sayfa yükleniyorsa */}
      {state.isLoading && <Loading/>}

      {/* Hata varsa */}
      {state.isError && <p>Üzgünüz bir hata oluştu..</p>}

      {/* Veriler geldiyse */}
      {state.basket.length > 0 ? state?.basket.map((item) => <BasketItem key={item.id} item={item}/>): <p className="my-5 text-center">Öncelikle sepete ürün ekleyiniz...</p>}

      <div style={{width: "490px"}} className="d-flex justify-content-between align-items-center bg-white rounded-4 float-end"><h5 className="ms-3 my-5 ">Toplam tutar: <span className="text-success">{total_count}</span> ₺</h5>
      <button className="btn btn-success me-3">Alışverişi tamamla</button>
      </div>
    </div>
  )
}

export default BasketPage