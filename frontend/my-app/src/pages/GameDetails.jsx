import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { addToCart } from '../redux/actions';

export function GameDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const game = location.state?.game ?? null;

  if (!game) {
    return (
      <Container className="py-5 text-center">
        <div className="page-wrapper">
          <p className="empty-state">לא נמצאו פרטי המשחק.</p>
          <Button variant="primary" onClick={() => navigate(-1)}>
            חזור
          </Button>
        </div>
      </Container>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(game));
  };

  return (
    <Container className="py-4">
      <div className="game-details-page">
        <div className="text-center mb-4">
          <img
            src={`${process.env.REACT_APP_API_URL}/${game.pic}`}
            alt={game.name}
            className="img-fluid game-details-img"
          />
        </div>
        <div className="text-center">
          <h2>{game.name}</h2>
          <p><strong>קטגוריה:</strong> {game.code_Category?.name ?? '-'}</p>
          <p><strong>קוד משחק:</strong> {game._id}</p>
          <p><strong>מחיר:</strong> {game.price} ₪</p>
          <div className="mt-4">
            <Button variant="success" className="m-2" onClick={handleAddToCart}>
              הוסף לסל
            </Button>
            <Button variant="primary" onClick={() => navigate(-1)}>
              חזור
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
