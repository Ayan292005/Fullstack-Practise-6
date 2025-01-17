import { useContext } from "react"
import { favoriteContext } from "../../context/FavoritesContext"
import { FaHeart } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

function Favorites() {
    let { favorites, setFavorites } = useContext(favoriteContext)

    function handleDeleteFavorite(id) {
        let deleteFavorite = favorites.filter(favorite => favorite._id !== id)
        setFavorites(deleteFavorite)
    }
    return (
        <div className="container" style={{ marginTop: "100px",height:"100vh" }}>

            {
                favorites.length == 0 ? (
                    <h2 style={{ textAlign: "center" }}>Your Favorites List is Empty</h2>
                ) : (
                    <>
                        <h1 style={{ textAlign: "center" }}>Your Favorites List</h1>
                        <div className='favs' style={{ margin: '20px 0' }}>
                            {favorites.map(favorite => (
                                <div key={favorite._id}>
                                    <div className='quote'><FaQuoteLeft /></div>
                                    <p className='card-desc'>{favorite.desc}</p>
                                    <div className='card-info'>
                                        <div className='prod-img'><img src={favorite.image} /></div>
                                        <div className=''>
                                            <p className='card-name'>{favorite.name}</p>
                                            <p className='card-job'>{favorite.job}</p>
                                            <button className='favorites' onClick={() => handleDeleteFavorite(favorite._id)}><FaHeart /></button>
                                        </div>
                                    </div>
                                    {/* <div style={{ marginBottom: "20px", padding: '10px 30px' }}>
                                        <p>{favorite.desc}</p>
                                        <img src={favorite.image} />
                                        <p>{favorite.name}</p>
                                        <p>{favorite.job}</p>


                                    </div> */}
                                </div>
                            ))
                            }
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Favorites