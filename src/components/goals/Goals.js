import "./Goals.css"
import ars from "../../images/ars.png"
import Marquee from "react-fast-marquee"

function Goals(){
     return(
        <div className="goals">
         <div className="goals_main">
            <div className="goals_slogan">
               <img src = {ars} className="goals_image" alt="aristotel is thinking" />
               <div className="goals_goals">
                  <p className="goals_goals_text">ЭТОТ КЛУБ ДЛЯ ТЕБЯ, ЕСЛИ:</p>
                  <div className="goals_grid">
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Тебя пугает объем предстоящей работы, и ты не знаешь, за что хвататься.</p>
                     </div>
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Тебя готовят в школе не самые квалифицированные люди.</p>
                     </div>
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Ты устал от вечной субординации и хотел бы общаться с преподавателем на равных.</p>
                     </div>
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Ты нацелен получить наивысшие баллы на ЕГЭ.</p>
                     </div>
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Ты хочешь получить много толковых наставлений и советов перед экзаменом.</p>
                     </div>
                     <div className="goals_card">
                        <img src="https://static.tildacdn.com/tild6564-3035-4835-b539-336633656330/reading-book_Traced.svg" className="grid_icon" alt="person with a book" />
                        <p className="goals_grid_text">Ты мечтаешь учиться в одном из топовых вузов страны.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="goals_billet">
                  <div className="goals_billet_radius">
                     <p className="goals_bilet_bigtext">90% ЭКЗАМЕНУЕМЫХ</p>
                     <p className="goals_bilet_smalltext">НЕ ПЕРЕХОДЯТ ГРАНИЦУ В 80 БАЛЛОВ. <b className="goals_bilet_smalltext_pink">НО ВЕДЬ ЭТО НЕ ПРО ТЕБЯ?</b></p>
                  </div>
            </div>
         </div>
         <div className="goals_text_after">
            <p className="goals_text_after_billet">В КЛУБЕ АРИСТОТЕЛЬ ТЫ ПОЛУЧИШЬ ВСЕ НЕОБХОДИМЫЕ ЗНАНИЯ И БУДЕШЬ <b className="goals_text_after_billet_pink">НАСЛАЖДАТЬСЯ ПРОЦЕССОМ ОБУЧЕНИЯ</b></p>
            <div className="goals_text_after_forwho">
               <div className="goals_forwho">
                  <p className="goals_forwho_bigtext">В КЛУБ ПРИНИМАЮТ</p>
                  <p className="goals_forwho_smalltext">ТЕХ, КТО ТОЛЬКО НАЧИНАЕТ ПОДГОТОВКУ И УЖЕ СИЛЬНЫХ РЕБЯТ.</p>
                  <div className="goals_forwho_plashka">
                     <p className="goals_forwho_plashka_text">Здесь не просто обычные, серые занятия, от которых нет пользы. Клуб подарит тебе: </p>
                     <img src="https://static.tildacdn.com/tild6233-3061-4234-b336-653466383535/Group_36.svg" className="goals_forwho_icon" alt="arrow"/>
                  </div>
               </div>
               <ul className="goals_forwho_ol">
                  <li className="goals_forwho_li_marks"><p className="goals_forwho_li_text">НЕВЕРОЯТНЫЙ ОБЪЕМ ЗНАНИЙ</p></li>
                  <li className="goals_forwho_li_marks"><p className="goals_forwho_li_text">ПОМОЩЬ ОТ ПРЕПОДАВАТЕЛЕЙ 24/7</p></li>
                  <li className="goals_forwho_li_marks"><p className="goals_forwho_li_text">УВЕРЕННОСТЬ В СВОИХ СИЛАХ</p></li>
                  <li className="goals_forwho_li_marks"><p className="goals_forwho_li_text">ПОЛЕЗНЫЕ ЛАЙФХАКИ ПРИ СДАЧЕ ЭКЗАМЕНА</p></li>
                  <li className="goals_forwho_li_marks"><p className="goals_forwho_li_text">ИНДИВИДУАЛЬНЫЙ ПОДХОД К ОБУЧЕНИЮ</p></li>
               </ul>
            </div>
         </div>
         <Marquee className="goals_marquee" speed={80} gradient="">
            <p className="goals_forwho_marquee">СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. СДАЙ ЕГЭ. </p>
         </Marquee>
        </div>
     )
}

export default Goals