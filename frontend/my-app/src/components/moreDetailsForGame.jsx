import { useLocation } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";
export const MoreDetailsForGame = () => {
  const location = useLocation();
  const myD =useDispatch()
  const currentGame = location.state?.game || null;

  if (!currentGame) {
    return <div>לא נמצאו פרטי המשחק.</div>;
  }
  const handleAddToCart = (product) => {
    myD(addToCart(product)); 
};

  return (
    <Container className="mt-5">
      <div className="text-center mb-4">
        <img
          src={`http://localhost:9090/${currentGame.pic}` }
          alt={currentGame.name}
          className="img-fluid rounded"
          style={{ maxHeight: '400px', width: '50%' }} 
        />
      </div>

    
      <div className="text-center">
        <h2>{currentGame.name}</h2>
        <p><strong>קטגוריה:</strong> {currentGame.code_Category.name}</p>
        <p><strong>קוד משחק:</strong> {currentGame._id}</p>
        <p><strong>מחיר:</strong> {currentGame.price} ₪</p>
       
        <button onClick={()=>handleAddToCart(currentGame)} className="m-1 btn btn-success" >הוסף לסל</button>
        <Button variant="primary" onClick={() => window.history.back()}>
          חזור
        </Button>
      </div>
    </Container>
  );
};
