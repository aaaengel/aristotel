import "./Rule.css";

function Rule(){
    return(
        <div className="rule">
            <div className="rule_text">
                <p className="rule_text_whitebold">НО ЕСТЬ ОДНО ЖЕСТКОЕ ПРАВИЛО...</p>
                <div className="rule_icon_div">
                    <img className="rule_icon" src="https://static.tildacdn.com/tild3731-3632-4063-a631-333565363263/traffic-signal_Trace.svg" />
                    <p className="rule_text_pinkbold">НЕЛЬЗЯ НЫТЬ</p>
                </div>
                <p className="rule_text_white">Если у тебя вопрос в стиле "Есть проблема. Уже пробовали 1 и 2, это не сработало. Что еще можно сделать?" - тебе помогут. Набросают идей и поделятся опытом.</p>
                <p className="rule_text_white">А если писать "У меня все плохо, ничего не получается, ничего не понятно" - твое сообщение удалят. И даже могут забанить. Это нытье.</p>
                <p className="rule_text_white rule_text_white_pink">Перестань жалеть себя. Давай действовать</p>
                <div className="rule_plashka">
                    <p className="rule_plashka_text">В КЛУБЕ АРИСТОТЕЛЬ НЕТ ДРАМЫ И НЫТЬЯ, ЗАТО ЗДЕСЬ ВСЕ ПОМОГАЮТ ДРУГ ДРУГУ УЧИТЬСЯ. ЭТО КРУЧЕ.</p>
                </div>
            </div>
            <div className="rule_empty"></div>
        </div>
    )
}
export default Rule;