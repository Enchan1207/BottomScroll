document.onkeydown = function(){
    //--ページ最上段スクロール
    if(event.keyCode == 190) window.scrollTo(0, 0);

    //--検索結果のページでは、/キーで検索ボックスに移動
    if(event.keyCode == 191) {
        //--Googleの場合
        if(location.host == "www.google.com"){
            setTimeout(() => {
                document.forms[0][1].focus();
            }, 100);
        }

        //--yahooの場合
        if(location.host == "www.yahoo.co.jp"){
            setTimeout(() => {
                document.forms[1][1].focus();
            }, 100);
        }

        //--akidukidenshi.comの場合
        if(location.host == "akizukidenshi.com"){
            setTimeout(() => {
                document.forms[1][1].focus();
            }, 100);
        }
    }
}