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
                        <p className="whoami_text_about_boldwh">ХОЗЯИН ЭТОГО КЛУБА</p>
                        <p>Занимаюсь научной деятельностью, выпускник МГТУ им. Н.Э. Баумана. Призёр олимпиады Жуковского по физике и математике. Победитель Всероссийской олимпиады «Шаг в будущее: Космонавтика». Призёр олимпиады Циолковского по математике.</p>
                        <p className="whoami_text_about_text">Преподаю с 2010 года индивидуально и в группах. Подготовил огромное количество ребят, которые успешно сдали ЕГЭ, ОГЭ, вузовские олимпиады, что помогло поступить им в самые престижные вузы Москвы. Приходилось работать с разными детьми. Пробуждаю желание у детей учиться.</p>
                    </div>
                </div>
                <div className="whoami_blocks">
                    <div className="whoami_block">
                        <div className="whoami_results">
                            <p className="whoami_results_text">НЕКОТОРЫЕ РЕЗУЛЬТАТЫ УЧЕНИКОВ:</p>
                        </div>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                        <p className="whoami_results_text_main"><b className="whoami_results_text_main_pink">+ 1 200 000 руб</b> на запуске курса, в аккаунте всего 1700 человек</p>
                    </div>
                    <p className="whoami_blocks_text">МЫ ЖДЕМ ИМЕННО ТЕБЯ</p>
                </div>
                <p className="whoami_text_afterblocks">Хочешь высоких баллов? Это ко мне.</p>
                <button onClick={()=> {onClick(true); setTimeout(()=>{onClick(false)}, 800)}}  className={click ? "needtodo_btn whoami_btn needtodo_anim" : "whoami_btn needtodo_btn"}><p className={click ? "needtodo_main_text_btn needtodo_main_text_btn_oncl" : "needtodo_main_text_btn"}>ХОЧУ В КЛУБ</p></button>
            </div>
    )
}

export default Whoami;