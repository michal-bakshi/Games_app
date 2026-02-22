import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCat, deleteCatById } from '../axios/categoryAxios';
import { getAllCategory, deleteCategory } from '../redux/kategoryActions';

export function CategoryList() {
  const listC = useSelector((x) => x.kategory.listCat);
  const isManager = useSelector((x) => x.users.isManeger);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (listC != null && listC.length === 0) {
      getAllCat()
        .then((res) => dispatch(getAllCategory(res.data)))
        .catch((err) => console.error(err));
    }
  }, [listC, dispatch]);

  const handleUpdate = (id) => {
    navigate('/myAddKategory', { state: { fromUpdate: id } });
  };

  const handleDelete = (id) => {
    deleteCatById(id)
      .then(() => dispatch(deleteCategory(id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="page-wrapper">
        <h1 className="page-title">קטגוריות</h1>
        <div className="data-table-wrapper">
          <table className="table data-table">
          <thead>
            <tr>
              <th>שם קטגוריה</th>
              <th>קוד קטגוריה</th>
              {isManager && <th colSpan="2">פעולות</th>}
            </tr>
          </thead>
          <tbody>
            {listC?.map((cat) => (
              <tr key={cat._id}>
                <td>{cat.name}</td>
                <td>{cat._id}</td>
                {isManager && (
                  <>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(cat._id)}
                        className="btn btn-danger btn-sm"
                      >
                        מחיקה
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleUpdate(cat._id)}
                        className="btn btn-primary btn-sm"
                      >
                        עדכון
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
