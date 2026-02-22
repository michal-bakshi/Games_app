import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export function PersonalOrder() {
  const { date } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const items = location.state?.name ?? [];

  return (
    <Container className="py-4">
      <div className="order-detail-page">
        <h3>פרטי הזמנה — תאריך קנייה: {date}</h3>
        {Array.isArray(items) && items.length > 0 ? (
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li key={item.code ?? index} className="list-group-item d-flex justify-content-between">
                <span>{item.name}</span>
                <span>{item.sum} ₪</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">אין פריטים להצגה.</p>
        )}
        <Button variant="outline-primary" className="mt-3" onClick={() => navigate(-1)}>
          חזור
        </Button>
      </div>
    </Container>
  );
}
