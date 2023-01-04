function addStyle() {
    const navigation = new CSSStyleSheet();
    const navigationLi = new CSSStyleSheet();
    const logoOff = new CSSStyleSheet();
    const search = new CSSStyleSheet();
    const button = new CSSStyleSheet();
    const button2 = new CSSStyleSheet();
    const paragraph = new CSSStyleSheet();
    const avatarOff = new CSSStyleSheet();
    const Exiticon = new CSSStyleSheet();

    navigation.insertRule(`.navigation {
        width: 15vw;
    }`);
    
    navigationLi.insertRule(`.list{
        width: 50px;
        height: 50px;
    }`)
  
    logoOff.insertRule(`.logoimg {
        visibility: hidden;
        display: none;
    }`);
    
    search.insertRule(`.iconSch{
        width: 40px;
    }`);

    button.insertRule(`.iconMenu{
        margin-left: 5vw;
        display: none;
    }`);

    button2.insertRule(`.iconMenu2{
        display: initial;
        margin-left: 5vw;
    }`);

    paragraph.insertRule(`p{
        display: none;
        visibility: hidden;
    }`);

    Exiticon.insertRule(`.iconExit{
        justify-content: center;
        padding: 0;
        width: 10vw;
        height: 10vh;
        flex-direction: row;
    }`)

    avatarOff.insertRule(`#avatar{
        display: none;
    }`)
    document.adoptedStyleSheets = [navigation, navigationLi, logoOff, search, button, paragraph,  avatarOff, Exiticon, button2]
    
    

}


function addStyle2() {
    const navigation = new CSSStyleSheet();
    const logoOff = new CSSStyleSheet();
    const search = new CSSStyleSheet();
    const button = new CSSStyleSheet();
    const paragraph = new CSSStyleSheet();
    const avatarOff = new CSSStyleSheet();
    const Exiticon = new CSSStyleSheet();

    navigation.insertRule(`.navigation {
        width: 40vw;
    }`);
    
    logoOff.insertRule(`.logoimg {
        visibility: initial;
        display: flex;
    }`);
    
    search.insertRule(`.iconSch{
        width: 30vw;
    }`);

    button.insertRule(`.iconMenu{
        margin-left: 1vw;
    }`);

    paragraph.insertRule(`p{
        display: initial;
        visibility: initial;
    }`);

    Exiticon.insertRule(`.iconExit{
        justify-content: space-between;
        padding: 7px;
        width: 30vw;
        height: 75px;
        flex-direction: row-reverse;
    }`)

    avatarOff.insertRule(`#avatar{
        display: initial;
    }`)
    document.adoptedStyleSheets = [navigation, logoOff, search, button, paragraph, avatarOff, Exiticon]
}
