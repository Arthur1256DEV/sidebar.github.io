function addStyle() {
    const newMode = new CSSStyleSheet();
    const newMode2 = new CSSStyleSheet();
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
        width: 80px;
    }`);
    
    navigationLi.insertRule(`.list{
        width: 40px;
        height: 40px;
        margin-left: -15px;
    }`);
  
    logoOff.insertRule(`.logoimg {
        visibility: hidden;
        display: none;
    }`);
    
    button.insertRule(`.iconMenu{
        margin-left: 0px;
        display: none;
    }`);

    button2.insertRule(`.iconMenu2{
        display: initial;
        margin-left: -5px;
    }`);

    paragraph.insertRule(`p{
        display: none;
        visibility: hidden;
    }`);

    Exiticon.insertRule(`.iconExit{
        justify-content: center;
        padding: 0;
        width: 40px;
        height: 40px;
        flex-direction: row;
        margin-left: -15px;
    }`);

    avatarOff.insertRule(`#avatar{
        display: none;
    }`);

    newMode.insertRule(`.iconSch, .iconList, .iconPets, .iconUsers, .iconSettings, .iconVets{
            width: 40px;
        }
    `);

    newMode2.insertRule(`.iconSch:hover, .iconList:hover, .iconPets:hover, .iconUsers:hover, .iconSettings:hover, .iconVets:hover{
        width: 40px;
    }`);


    document.adoptedStyleSheets = [navigation, navigationLi, logoOff, search, button, paragraph,  avatarOff, Exiticon, button2, newMode, newMode2]
    


}


function addStyle2() {
    const newMode = new CSSStyleSheet();
    const newMode2 = new CSSStyleSheet();
    const navigation = new CSSStyleSheet();
    const logoOff = new CSSStyleSheet();
    const search = new CSSStyleSheet();
    const button = new CSSStyleSheet();
    const paragraph = new CSSStyleSheet();
    const avatarOff = new CSSStyleSheet();
    const Exiticon = new CSSStyleSheet();

    navigation.insertRule(`.navigation {
        width: 250px;
    }`);
    
    logoOff.insertRule(`.logoimg {
        visibility: initial;
        display: flex;
    }`);
    
    button.insertRule(`.iconMenu{
        margin-left: initial;
    }`);

    paragraph.insertRule(`p{
        display: initial;
        visibility: initial;
    }`);

    Exiticon.insertRule(`.iconExit{
        justify-content: space-between;
        padding: 7px;
        height: 75px;
        width: 200px;
        flex-direction: row-reverse;
    }`)

    avatarOff.insertRule(`#avatar{
        display: initial;
    }`)

    newMode.insertRule(`.iconSch, .iconList, .iconPets, .iconUsers, .iconSettings, .iconVets{
        width: 200px;
        margin-left: 5px;
    }
`);

    newMode2.insertRule(`.iconSch:hover, .iconList:hover, .iconPets:hover, .iconUsers:hover, .iconSettings:hover, .iconVets:hover{
        width: 200px;
    }`);

    document.adoptedStyleSheets = [navigation, logoOff, search, button, paragraph, avatarOff, Exiticon,newMode, newMode2]
}
