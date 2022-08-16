import "./Header.css"
import aris from "../../images/aris.png"


function Header() {

return(
    <div className="header">
        <div className="header_title">
             <div className="header_title_reference">
                <img className="header_title_reference_image" src="https://static.tildacdn.com/tild3462-6136-4861-a135-633866396535/calendar_1_Traced.svg" />
                <p>Набор в клуб ежемесячно</p>
            </div>
            <div className="header_title_main">
                <p>ЗАКРЫТЫЙ КЛУБ</p>
                <p>ПОДГОТОВКИ К ЕГЭ</p>
                <p className="header_title_main_big">АРИ<b className="header_title_main_big_red">СТО</b>ТЕЛЬ</p>
            </div>
            <p className="header_title_reference_bot">ЗДЕСЬ СТАНОВЯТСЯ ВЫСОКОБАЛЛЬНИКАМИ</p>
        </div>
        <img src={aris} className="header_img" />
        <div className="header_title_ol">
            <div className="header_title_li">
                <p className="header_title_li_num">01</p>
                    <p className="header_title_li_text"><b className="text_bold">Улучшишь</b> свои результаты на пробниках и реальном ЕГЭ</p>
            </div>
            <div className="header_title_li">
                <p className="header_title_li_num">02</p>
                <p className="header_title_li_text">Узнаешь <b className="text_bold">крайне эффективные</b> методы решения</p>
            </div>
            <div className="header_title_li">
                <p className="header_title_li_num">03</p>
                <p className="header_title_li_text">Будешь учится в <b className="text_bold">невероятно дружелюбной</b> атмосфере</p>
            </div>
            <div className="header_title_li">
                <p className="header_title_li_num">04</p>
                <p className="header_title_li_text">Каждый год наши ученики поступают в <b className="text_bold">лучшие ВУЗы страны</b></p>
            </div>
            <button className="header_button"><p className="header_button_text">Вступить в клуб</p></button>
        </div>
    </div>
)

}

export default Header;