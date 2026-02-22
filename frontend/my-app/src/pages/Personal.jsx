import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllBuy } from '../axios/historyAxios';

export function Personal() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (currentUser?._id) {
      getAllBuy(currentUser._id)
        .then((res) => setHistory(res.data))
        .catch((err) => console.error(err));
    }
  }, [currentUser?._id]);

  const handleOrderDetails = (item) => {
    navigate(`/morePersonal/${item.dateBuy}`, { state: { name: item.arr_game } });
  };

  return (
    <div className="container">
      <div className="page-wrapper personal-page">
        <h2>אזור אישי</h2>
        <div className="data-table-wrapper">
          <table className="table data-table">
          <thead>
            <tr>
              <th>תאריך</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((item) => (
                <tr key={item._id ?? item.dateBuy}>
                  <td>{item.dateBuy}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleOrderDetails(item)}
                    >
                      לפרטי ההזמנה
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="empty-state">אין היסטוריה זמינה</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
