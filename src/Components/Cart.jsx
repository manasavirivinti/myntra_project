import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { usePoints } from './pointsContext'; // Assuming you have a points context

const Cart = () => {
    const { cartItems } = useCart();
    const { addPoints } = usePoints(); // Assuming addPoints function is provided by pointsContext

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 5%;
    `;

    const Img = styled.div`
        display: flex;
        
        img {
            width: 100px;
            margin-top: 2%;
        }
    `;

    const Con = styled.div`
        display: flex;
        margin-top: 3%;
        background-color: whitesmoke;
        width: 500px;
        flex-direction: column;

        h2 {
            margin-top: 7%;
            width: 100%;
            margin-left: 50px;
            color: black;
        }

        button {
            width: 100px;
            margin-left: 10%;
            height: 30px;
        }
    `;

    const Payment = styled.div`
        border: 1px solid red;
        margin: 10px;
        margin-right: 10%;
        margin-top: 6.5%;
        width: 100%;

        button {
            margin-left: 5px;
            height: 30px;
        }
    `;

    const Div1 = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const handleOrderConfirmation = () => {
        addPoints(30); // Add 30 points on order confirmation
        alert('Hurray! Order confirmed'); // Display alert message
        // Redirect or handle further actions as needed
        // Example redirect:
        window.location.href = '/done';
    };
    const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 17px;
  text-decoration: none;
  color: #282c3f;
  padding-bottom: 25px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: -2%;
`;

    return (
        <Div1>
            <Div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index}>
                          <p>Try Virtual Try on to know the cloth fitting</p>
                          <StyledLink as="a" href="http://localhost:8000" target="_blank" rel="noopener noreferrer">Click here</StyledLink>
                
                            <Img>
                                <img src={item.image} alt="imgs" />
                                <Con>
                                    <h2>{item.name}</h2>
                                    <h2> Rs. {item.price}</h2>
                                </Con>
                            </Img>
                        </div>
                    ))
                )}
            </Div>

            <Payment>
                <div>
                    {/* Calculate total price */}
                    <h2>Total Price: {cartItems.reduce((total, item) => total + item.price, 0)}</h2>
                    <button onClick={handleOrderConfirmation}>Confirm Order</button>
                </div>
            </Payment>
        </Div1>
    );
};

export default Cart;
