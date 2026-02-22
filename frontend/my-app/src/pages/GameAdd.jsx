import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addGame, update } from '../axios/gameAxios';
import { add_game, updateGame } from '../redux/gameActions';

const GAME_IMAGE_OPTIONS = [
  { value: 'llama.jpg',          label: 'Llama' },
  { value: 'chess.jpg',          label: 'Chess' },
  { value: 'monopoly.jpg',       label: 'Monopoly' },
  { value: 'link.jpg',           label: 'Link' },
  { value: 'monster.jpg',        label: 'Monster' },
  { value: 'card-grab.png',      label: 'Card Grab' },
  { value: 'rummikub.jpg',       label: 'Rummikub' },
  { value: 'cat-game.jpg',       label: 'Cat Game' },
  { value: 'eretz-ir.jpg',       label: 'Eretz Ir' },
  { value: 'snakes-ladders.jpg', label: 'Snakes & Ladders' },
  { value: 'taki.jpg',           label: 'Taki' },
  { value: 'mancala.jpg',        label: 'Mancala' },
];

export function GameAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const categories = useSelector((x) => x.kategory.listCat);
  const isForUpdate = location.state?.fromUpdate ?? '';
  const [form, setForm] = useState({});

  const setField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForUpdate === '') {
      addGame(form)
        .then((res) => {
          dispatch(add_game(res.data));
          navigate('/myListGame');
        })
        .catch((err) => console.error(err));
    } else {
      update(isForUpdate, form)
        .then((res) => {
          dispatch(updateGame(res.data));
          navigate('/myListGame');
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form className="container form-page" onSubmit={handleSubmit}>
      <h2>הוספת משחק</h2>
      <p className="text-danger small">שדות המסומנים בכוכבית הם שדות חובה.</p>

      <div className="mb-2">
        <label className="form-label">שם משחק *</label>
        <input
          className="form-control"
          type="text"
          placeholder="הכנס שם משחק"
          onBlur={(e) => setField('name', e.target.value)}
          required={isForUpdate === ''}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">קטגוריה *</label>
        <select
          className="form-select"
          onBlur={(e) => setField('code_Category', e.target.value)}
          required={isForUpdate === ''}
        >
          <option value="">בחר קטגוריה</option>
          {categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">מחיר *</label>
        <input
          className="form-control"
          type="number"
          placeholder="הכנס מחיר משחק"
          onBlur={(e) => setField('price', e.target.value)}
          required={isForUpdate === ''}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">תמונה *</label>
        <select
          className="form-select"
          onChange={(e) => setField('pic', e.target.value)}
          required={isForUpdate === ''}
        >
          <option value="">בחר תמונה</option>
          {GAME_IMAGE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">כמות במלאי *</label>
        <input
          className="form-control"
          type="number"
          placeholder="כמות במלאי"
          onBlur={(e) => setField('amount', e.target.value)}
          required={isForUpdate === ''}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {isForUpdate !== '' ? 'עדכן' : 'הוסף'}
      </button>
    </form>
  );
}
