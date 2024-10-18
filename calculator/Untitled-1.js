var calculation=' ';
var num=0;
function plus1(){

calculation=calculation+'1';

}


function plus2(){

    calculation=calculation+'2';
  
    }

    
function plus3(){

    calculation=calculation+'3';

    }
    function plus4(){

        calculation=calculation+'4';
    
        }
        function plus5(){

            calculation=calculation+'5';
        
            }
            function plus6(){

                calculation=calculation+'6';
            
                }
                function plus7(){

                    calculation=calculation+'7';
                
                    }
                    function plus8(){

                        calculation=calculation+'8';
                    
                        }
                        function plus9(){

                            calculation=calculation+'9';
                        
                            }
                            function plus0(){

                                calculation=calculation+'0';
                            
                                }
                                function plusdott(){

                                    calculation=calculation+'.';
                                
                                    }
    function increase(){

num+=Number(calculation);
document.getElementById('answer').innerHTML=num;
calculation=' ';

    }

    function result(){
        num+=Number(calculation);

        console.log(num);
        document.getElementById('answer').innerHTML=num;
     
num=0;
calculation=' ';

    }