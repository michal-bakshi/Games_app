import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import { deleteGameById, getAllGames, getGameByKatId } from '../axios/gameAxios';
import { deleteGame, getTheAllGames } from '../redux/gameActions';
import { getAllCat } from '../axios/categoryAxios';
import { getAllCategory } from '../redux/kategoryActions';

export function GameList() {
  const listG = useSelector((x) => x.game.listGame);
  const [list, setList] = useState([...listG]);
  const isManager = useSelector((x) => x.users.isManeger);
  const categories = useSelector((x) => x.kategory.listCat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (listG != null && listG.length === 0) {
      getAllGames()
        .then((res) => {
          dispatch(getTheAllGames(res.data));
          setList([...res.data]);
        })
        .catch((err) => console.error(err));
    }
    if (categories != null && categories.length === 0) {
      getAllCat()
        .then((res) => dispatch(getAllCategory(res.data)))
        .catch((err) => console.error(err));
    }
  }, [listG, dispatch, categories]);

  const handleDelete = (id) => {
    deleteGameById(id)
      .then(() => dispatch(deleteGame(id)))
      .catch((err) => console.error(err));
  };

  const handleUpdate = (id) => {
    navigate('/myAddGame', { state: { fromUpdate: id } });
  };

  const handleDetails = (game) => {
    navigate('/moreDetails', { state: { game } });
  };

  const handleFilterByCategory = (categoryId) => {
    if (!categoryId) {
      setList([...listG]);
      return;
    }
    getGameByKatId(categoryId)
      .then((res) => setList(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <h1 className="page-title">משחקים</h1>
        <div className="mb-3">
          <select
            className="form-select filter-select"
            onChange={(e) => handleFilterByCategory(e.target.value)}
            aria-label="בחר קטגוריה"
          >
            <option value="">כל הקטגוריות</option>
            {categories?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 game-grid">
          {list.length === 0 && (
            <p className="col-12 empty-state">אין משחקים בקטגוריה עדיין.</p>
          )}
          {list.map((game) => (
            <div key={game._id} className="col">
              <div className="card game-card">
                <div className="card-img-wrapper d-flex justify-content-center align-items-center">
                  <img
                    src={config.imageUrl(game.pic)}
                    className="card-img-top game-card-img"
                    alt={game.name}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">מחיר: {game.price} ₪</p>
                  <div className="mt-auto">
                    <button
                      type="button"
                      onClick={() => handleDetails(game)}
                      className="btn btn-primary btn-sm"
                    >
                      פרטים נוספים
                    </button>
                    {isManager && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDelete(game._id)}
                          className="btn btn-danger btn-sm"
                        >
                          מחיקה
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdate(game._id)}
                          className="btn btn-outline-primary btn-sm"
                        >
                          עדכון
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
