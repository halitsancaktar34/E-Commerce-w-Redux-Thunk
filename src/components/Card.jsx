import { useDispatch, useSelector } from "react-redux";
import basketReducer from './../redux/reducers/basketReducer';
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
    const state = useSelector((store) => store.basketReducer)
    const dispatch = useDispatch()
    // Eklenilen ürün sepette var mı yok mu kontrol et
    const found = state.basket.find((i) => i.id=== product.id)

    const handleClick = () => {
        if (found) {
        dispatch(updateItem(found))
        } else {
        dispatch(addToBasket(product))
        }
    }

    return (
        <div className="card pt-4" style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center">
                <img
                    className="rounded"
                    width={200}
                    height={200}
                    src={product.resim}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.baslik}</h5>
                <p>
                    <span className="fw-bold">{product.marka} </span>
                    {product.model}
                </p>
                <p className="d-flex flex-column">
                    {product.ozellikler.map((line) => (
                        <span>{line}</span>
                    ))}
                </p>

                <button
                    onClick={handleClick}
                    className="w-100 d-flex justify-content-between"
                >
                    <span>{found ? ` Miktarı Arttır (${found.adet})` : "Sepete Ekle"}</span>
                    <span className="text-success">{product.fiyat}₺</span>
                </button>
            </div>
        </div>
    );
};

export default Card;