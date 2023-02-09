import "./Whoami.css";
import kir from "../../images/kir.png";
import React from "react";

function Whoami(){
    const [click, onClick] = React.useState(false);
    return(
            <div className="whoami">
                <div className="whoami_text">
                    <div className="whoami_shine">
                        <img className="whoami_img" src={kir}/>
                    </div>
                    <div className="whoami_text_about">
                        <p className="whoami_text_about_pink">КСТАТИ, А КТО Я ТАКОЙ?</p>
                        <p className="whoami_text_about_boldwh">СОЗДАТЕЛЬ ЭТОГО КЛУБА</p>
                        <p>Меня зовут Аникин Кирилл Викторович. Занимаюсь научной деятельностью, выпускник МГТУ им. Н.Э. Баумана. Призёр олимпиады Жуковского по физике и математике. Победитель Всероссийской олимпиады «Шаг в будущее: Космонавтика». Призёр олимпиады Циолковского по математике.</p>
                        <p className="whoami_text_about_text">Преподаю с 2010 года индивидуально и в группах. Подготовил огромное количество ребят, которые успешно сдали ЕГЭ, ОГЭ, вузовские олимпиады, что помогло поступить им в самые престижные вузы Москвы. Приходилось работать с разными детьми. Пробуждаю желание у детей учиться.</p>
                    </div>
                </div>
                <div className="whoami_blocks">
                    <div className="whoami_block">
                        <div className="whoami_results">
                            <p className="whoami_results_text">НЕКОТОРЫЕ РЕЗУЛЬТАТЫ УЧЕНИКОВ:</p>
                        </div>
                        <p className="whoami_results_text_main">До посещения нашего клуба многие из наших учеников не могли написать даже выше 70 баллов <b className="whoami_results_text_main_pink">НО</b></p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">70%</b> учеников сдали профильную математику на 80+</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">Каждый</b> из них поступил в ВУЗ на бюджет</p>
                        <p className="whoami_results_text_main">Теперь наши ребята учатся в многих <b className="whoami_results_text_main_pink">престижных</b> ВУЗах (МГТУ имени Баумана, ВШЭ, МГУ, МИФИ)</p>
                    </div>
                    <p className="whoami_blocks_text">МЫ ЖДЕМ ИМЕННО ТЕБЯ</p>
                </div>
                <p className="whoami_text_afterblocks">Хочешь высоких баллов? Это к нам.</p>
                <a href="https://t.me/AristotelEGEBot">
                    <button onClick={()=> {onClick(true); setTimeout(()=>{onClick(false)}, 800)}}  className={click ? "needtodo_btn whoami_btn needtodo_anim" : "whoami_btn needtodo_btn"}><p className={click ? "needtodo_main_text_btn needtodo_main_text_btn_oncl" : "needtodo_main_text_btn"}>ХОЧУ В КЛУБ</p></button>
                </a>
            </div>
    )
}

export default Whoami;