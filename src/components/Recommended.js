import card2 from "../assest/card2.webp";
import card3 from "../assest/card3.webp";
import card4 from "../assest/card1.webp";
import card5 from "../assest/card2.webp";

function Recommended()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">

            <div class="course-card">
                <img src={card2}/>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={card3}/>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={card4}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={card5}/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
    </div>
    )
}

export default Recommended