( function () {
    const navigation = document.getElementById("navigation");
    console.log("woking");
    window.onscroll = function() {
        console.log(navigation.scrollTop);
    }
})();