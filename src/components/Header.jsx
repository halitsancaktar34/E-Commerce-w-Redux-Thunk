import { NavLink } from 'react-router-dom';
import basketReducer from './../redux/reducers/basketReducer';
import { useSelector } from 'react-redux';


const Header = () => {
  const state = useSelector((store) => store.basketReducer)

  // Sepetteki eleman sayısını toplama
  const total_count = state.basket.reduce((total, item) => total + item.adet, 0)

  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          E-COMMERCE
        </a>
        <nav className="d-flex gap-5">
          <NavLink to={'/'}>Anasayfa</NavLink>
          <NavLink to={'/sepet'}>
            <span>Sepet</span>
            <span className="ms-2 badge bg-danger">
              {total_count}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;