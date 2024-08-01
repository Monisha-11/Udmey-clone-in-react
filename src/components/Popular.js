import p1 from "../assest/p1.avif"
import p2 from "../assest/p2.avif"
import p3 from "../assest/p3.jpg"
import p4 from "../assest/p4.jpg"
import p5 from "../assest/p5.jpg"
import p6 from "../assest/p6.jpg"
import p7 from "../assest/p7.jpg"
import p8 from "../assest/p8.jpg"

function Popular()
{
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>

        <div class="popular__container">
            <div class="course-card">
                <img src={p1}/>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p2}/>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p3}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p4}/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p5}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p6}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>


            <div class="course-card">
                <img src={p7}/>
                <h3>2023 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={p8}/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>


    </div>
    )
}

export default Popular