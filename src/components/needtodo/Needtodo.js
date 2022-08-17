import "./Needtodo.css"
import React from "react";

function Needtodo(){
    const [click, onClick] = React.useState(false);
    return(
    <div className="needtodo">
        <div className="needtodo_block">
            <img className="needtodo_icon" src="https://static.tildacdn.com/tild6231-6561-4363-a562-346233303066/Group_26.svg" alt="1-2-3" />
            <p className="needtodo_title">ТЫ ЗАХОДИШЬ В КЛУБ И <b className="needtodo_title_pink">ПРОСТО СТАНОВИШЬСЯ ВЫСОКОБАЛЛЬНИКОМ</b></p>
            <p className="needtodo_main_text">С множеством других ребят, объединенных общей целью. Под умелым руководством молодых, талантливых учителей, которые найдут индивидуальный подход к каждому. Присоединяйся к нам, чтобы потом не пожалеть.</p>
            <p className="needtodo_main_text_bold">А что выберешь ты?</p>
            <div className="needtodo_forpills">
                <button onClick={()=> {onClick(true); setTimeout(()=>{onClick(false)}, 800)}}  className={click ? "needtodo_btn needtodo_anim" : "needtodo_btn"}><p className={click ? "needtodo_main_text_btn needtodo_main_text_btn_oncl" : "needtodo_main_text_btn"}>МНЕ ТОЧНО В КЛУБ</p></button>
            </div>
        </div>
    </div>
    )
}

export default Needtodo;