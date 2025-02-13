import { Link } from "react-router-dom";
export default function Header() {
return (
<header>
<nav className="navigation">
<div class="hero">
        <img src="src/assets/images/banner.jpg" alt="Delicious food banner"></img>
        <h1><a href="index.html">DishDelight</a></h1>
    </div>
<p>
<Link className="linktext" to="">Home</Link>
</p>
<p>
<Link className="linktext" to="recipes">Recipes</Link>
</p>
<p>
<Link className="linktext" to="saved-recipes">Saved Recipes</Link>
</p>
<p>
<Link className="linktext" to="about">About</Link>
</p>
<p>
<Link className="linktext" to="contact">Contact</Link>
</p>
</nav>
</header>
)
}