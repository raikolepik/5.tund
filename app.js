(function(){
  "use strict";

  var PassGen = function(){
    // SINGLETON PATTERN (4 rida)
    if(PassGen.instance){
      return PassGen.instance;
    }
    PassGen.instance = this;

    this.password = [];



    //panen rakenduse tööle
    this.init();
  };

  //Teeme muutuja avalikuks
  window.PassGen = Passgen;

  //kõik moosipurgi funktsioonid tulevad siia sisse
  PassGen.prototype = {
    init: function(){
      console.log('rakendus käivitus');

    },

  };

  window.onload = function(){
    var app = new PassGen();
  };

})();
