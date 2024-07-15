import React,{useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import "../App.css";
import { usePoints } from './pointsContext';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

export const Home = () => {
     const { points, addPoints, setPoints } = usePoints(); // Make sure `points` is destructured here
     const { addToCart } = useCart();
     const { isAuthenticated } = useAuth()
 
     const handleAddToCart = (item) => {
       
             // Logic to add item to cart
             console.log("Item added to cart");
               addToCart(item)
             // Add 20 points for each purchase
             addPoints(20);
             window.alert(`${item.name} added to cart!`);
         
     };
         // State to manage comments for each item
    const [comments, setComments] = useState({
        "Item 1": [],
        "Item 2": [],
        "Item 3": [],
        "Item 4":[],
        "Item 5":[]
        // Add more items as needed
    });

    // Function to add a comment for a specific item
    const addComment = (itemName, comment) => {
        const newComment = { user: "Current User", text: comment };
        setComments(prevComments => ({
            ...prevComments,
            [itemName]: [...prevComments[itemName], newComment]
        }));
    };
    const [ratings, setRatings] = useState({
        "Item 1": null,
        "Item 2": null,
        "Item 3": null,
        "Item 4":null,
        "Item 5":null
    });
    // Function to handle rating an item
    const handleRating = (itemName, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [itemName]: rating
        }));
    };
    const renderStars = (itemName) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRating(itemName, i)}
                >
                    {i <= ratings[itemName] ? '★' : '☆'}
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
            <Carousel >
                <img src={image1} alt="d" style={{marginTop:"50px"}}/>
                <img src={image2} alt="" style={{marginTop:"50px"}}/>
                <img src={image3} alt="" style={{marginTop:"50px"}}/>
            </Carousel>
            <img style={{width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/0aee0d7a-a9ba-4881-aafc-21f6b5c3e4691642158269057-Desktop_Bank-Offer.jpg" alt="" />
            <img style={{ width: "95%", marginLeft: "2.5%", height: "200px" }} src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/16/f9ceb57d-ee89-4d93-923a-33fbe554283d1642317227306-DK1_2-599_01.jpg" alt="" />
            <img style={{width: "95%", marginLeft: "2.5%", height: "150px" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/4e32982e-2e5e-47d6-8187-147059fce2171642158268993-Unbelievable-Deals.jpg" alt="" />
            
            <div className="set">
                <div>
                    <img style={{ width: '100%' }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg" alt="" />
                    <button onClick={() => handleAddToCart({ name: "Item 1", price: 100, image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg" })}>Add to Cart</button>
                    {/* Display comments for Item 1 */}
                    <ul>
                        {comments["Item 1"].map((comment, index) => (
                            <li key={index}><strong>Comment</strong>: {comment.text}</li>
                        ))}
                    </ul>

                    {/* Input field to add new comment - conditionally rendered */}
                    {isAuthenticated && (
                        <input type="text" placeholder="Add a comment..." onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addComment("Item 1", e.target.value);
                                e.target.value = ''; // Clear input after adding comment
                            }
                        }} />
                    )}

                    {/* Display ratings for Item 1 */}
                    <div>
                        <span>Rating:</span>
                        {ratings["Item 1"] !== null ? (
                            <span>{ratings["Item 1"]} stars</span>
                        ) : (
                            <span>Not rated yet</span>
                        )}
                    </div>

                    {/* Star rating input - conditionally rendered */}
                    {isAuthenticated && (
                        <div>
                            <label>Rate this item:</label>
                            {renderStars("Item 1")}
                        </div>
                    )}

               </div>
                
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg" alt="" />
                     <button onClick={() => handleAddToCart({ name: "Item 2", price: 200 ,image:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg"})}>Add to Cart</button>
                {/* Display comments for Item 1 */}
                <ul>
                        {comments["Item 2"].map((comment, index) => (
                            <li key={index}><strong>Comment</strong>: {comment.text}</li>
                        ))}
                    </ul>

                    {/* Input field to add new comment - conditionally rendered */}
                    {isAuthenticated && (
                        <input type="text" placeholder="Add a comment..." onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addComment("Item 2", e.target.value);
                                e.target.value = ''; // Clear input after adding comment
                            }
                        }} />
                    )}
                    {/* Display ratings for Item 1 */}
                    <div>
                        <span>Rating:</span>
                        {ratings["Item 2"] !== null ? (
                            <span>{ratings["Item 2"]} stars</span>
                        ) : (
                            <span>Not rated yet</span>
                        )}
                    </div>

                    {/* Star rating input - conditionally rendered */}
                    {isAuthenticated && (
                        <div>
                            <label>Rate this item:</label>
                            {renderStars("Item 2")}
                        </div>
                    )}
                </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" alt="" />
                     <button onClick={() => handleAddToCart({ name: "Item 3", price: 400,image:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" })}>Add to Cart</button>
                    {/* Display comments for Item 1 */}
                    <ul>
                        {comments["Item 3"].map((comment, index) => (
                            <li key={index}><strong>Comment</strong>: {comment.text}</li>
                        ))}
                    </ul>

                    {/* Input field to add new comment - conditionally rendered */}
                    {isAuthenticated && (
                        <input type="text" placeholder="Add a comment..." onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addComment("Item 3", e.target.value);
                                e.target.value = ''; // Clear input after adding comment
                            }
                        }} />
                    )}
                    {/* Display ratings for Item 1 */}
                    <div>
                        <span>Rating:</span>
                        {ratings["Item 3"] !== null ? (
                            <span>{ratings["Item 3"]} stars</span>
                        ) : (
                            <span>Not rated yet</span>
                        )}
                    </div>

                    {/* Star rating input - conditionally rendered */}
                    {isAuthenticated && (
                        <div>
                            <label>Rate this item:</label>
                            {renderStars("Item 3")}
                        </div>
                    )}
               </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c7fd80c5-dc04-4c20-a0c0-9eda118a2d4e1641966742758-Roadster-_Mast_-_Harbour.jpg" alt="" />
                    <button onClick={() => handleAddToCart({ name: "Item 4", price: 400,image:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" })}>Add to Cart</button>
                    {/* Display comments for Item 1 */}
                    <ul>
                        {comments["Item 4"].map((comment, index) => (
                            <li key={index}><strong>Comment</strong>: {comment.text}</li>
                        ))}
                    </ul>

                    {/* Input field to add new comment - conditionally rendered */}
                    {isAuthenticated && (
                        <input type="text" placeholder="Add a comment..." onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addComment("Item 4", e.target.value);
                                e.target.value = ''; // Clear input after adding comment
                            }
                        }} />
                    )}
                    {/* Display ratings for Item 1 */}
                    <div>
                        <span>Rating:</span>
                        {ratings["Item 4"] !== null ? (
                            <span>{ratings["Item 4"]} stars</span>
                        ) : (
                            <span>Not rated yet</span>
                        )}
                    </div>

                    {/* Star rating input - conditionally rendered */}
                    {isAuthenticated && (
                        <div>
                            <label>Rate this item:</label>
                            {renderStars("Item 4")}
                        </div>
                    )}
               </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/4c3abcb4-1d49-4103-b428-e4924bfd937e1642129866295-2.jpg" alt="" />
                     <button onClick={() => handleAddToCart({ name: "Item 5", price: 300,image:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/bc56d434-5411-45e7-a2d5-7809771e58b41641966742688-Red_Tape-_Provogue.jpg" })}>Add to Cart</button>
                    {/* Display comments for Item 1 */}
                    <ul>
                        {comments["Item 5"].map((comment, index) => (
                            <li key={index}><strong>Comment</strong>: {comment.text}</li>
                        ))}
                    </ul>

                    {/* Input field to add new comment - conditionally rendered */}
                    {isAuthenticated && (
                        <input type="text" placeholder="Add a comment..." onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                addComment("Item 5 ", e.target.value);
                                e.target.value = ''; // Clear input after adding comment
                            }
                        }} />
                    )}
                    {/* Display ratings for Item 1 */}
                    <div>
                        <span>Rating:</span>
                        {ratings["Item 5"] !== null ? (
                            <span>{ratings["Item 5"]} stars</span>
                        ) : (
                            <span>Not rated yet</span>
                        )}
                    </div>

                    {/* Star rating input - conditionally rendered */}
                    {isAuthenticated && (
                        <div>
                            <label>Rate this item:</label>
                            {renderStars("Item 5")}
                        </div>
                    )}
                </div>  
            </div>

            <br></br>
            <img style={{width: "95%", marginLeft: "2.5%", height: "140px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/9dee2107-6680-471e-97d6-aff7d1937a621642158269007-Winter-Wear-Collection.jpg" alt="" />
            <div className="set">
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/5b7a32cd-715f-4d39-b8ab-cfb8a96426251641884921511-RTF-Winterwear_Wrogn_USPA.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     < img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/9677a355-d48f-44ca-a037-fa94400161cc1641884921466-RTF-Winterwear_Roadster.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/6b4c7e8d-d78d-4232-80b5-f49b2c7ebdb61641884921424-RTF-Winterwear_M_H_Here_NoW.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/a1f85afb-7ecc-4488-b589-a17f4c768dbc1641884921410-RTF-Winterwear_H_M.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/e270b9c7-75c4-47da-81e9-2d862d3fad6b1641884921459-RTF-Winterwear_Puma_HRXm.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
               
            </div>

                        <br></br>
            <img style={{width: "95%", marginLeft: "2.5%", height: "120px"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/14/a5f53400-bb99-4ebd-b621-ffb50abdf6d61642158269013-Most-Loved-Brands.jpg" alt="" />
            <div className="set">
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/e29cd784-b6ee-4e2e-9807-d631c5d062cb1642011117202-Libas_HP-Top-Tile.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     < img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/c46aecf8-af8b-438e-8e0a-82a4c2671c651642011117216-Vishudh_HP-Top-Tile.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/901bb1a2-6d87-44b0-af68-33e3949dfedf1642057411431-levis.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0f5b184b-4228-49e8-b5b9-5f66944ff8c81642057411413-fm.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/35a1bbe4-c633-4844-87f3-d86c325fcc3f1642057411421-highlander.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/ce6a4f0f-d21c-4cb4-92cd-ceff11d539901642050725137-Loreal.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     < img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/49d665a9-daf6-4bf4-9534-803cf18731b61642052041267-Lakme_HP-Tile_Jan-15_Revised.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/6da9d88e-fea2-4dd3-8036-b1d2b690b3c31642057411378-addias.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/12/41894ee0-a61d-4bf9-a8b7-8562b088f5c41642008846967-Sassafras-Top-Tile.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/0b6d70ea-809b-4a83-88fa-edfac575418f1642070092339-image_jpeg1610275137.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                               <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/72647bad-dd76-447d-9eab-b5254cb989631642069093033-boat-home.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     < img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/322b2df8-3962-46df-8584-2b3c7266489a1642059032671-Hp-tiles.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/a020270d-e6e6-478e-8543-f558d5451be91642070092355-image_jpeg771926449.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                    <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/42edad3e-03c5-492c-af5f-3b9fa2dafb391641904807658-max-1.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
               </div>
                <div>
                     <img style={{width:'100%'}} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/13/01decb45-54d3-4d8a-8042-f7f58dfbc78f1642064707706-ck.jpg" alt="" />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div> 
            </div>
        </div>
    );
};
