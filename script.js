document.onkeydown = function(){
    //--ページ最上段スクロール
    if(event.keyCode == 190) window.scrollTo(0, 0);

    //--検索結果のページでは、/キーで検索ボックスに移動
    if(location.host == "www.google.com"){
        if(event.keyCode == 191) {
            setTimeout(() => {
                document.forms[0][1].focus();
            }, 100);
        }
    }
}