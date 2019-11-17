class Calculator{
    constructor(){
        this.ulElem;
        this.getListValue();
        this.operand = '';
        this.currentOperator;
        this.count = 0;
        this.state = 'start';

    }

    getListValue(){
        
        this.ulElem = document.querySelectorAll('.calculator .options ol')[0];
        this.screenElem = document.querySelectorAll('.calculator .screen')[0];

        this.ulElem.addEventListener('click', function(event){
            this.liElem = event.target;
            this.currentVal = this.liElem.innerHTML;


            if(this.currentVal === '='){
                this.performOperation();


            }else if(this.currentVal === '+' || this.currentVal === '-' || this.currentVal === '/' || this.currentVal === '*'){
                this.state = 'start';
                console.log('hey');
                this.count++;
                if(this.operand === ''){
                    this.operand = 0;
                }
                this.operand1 = parseFloat(this.operand);
                this.operand = this.operand + this.liElem.innerHTML;

                this.screenElem.innerHTML = this.operand;

                if(this.count === 2){
                    this.performOperation();
                }


                
                switch(this.currentVal){
                    case '+': this.currentOperator = 'addandsub';
                              break;

                    case '-': this.currentOperator = 'addandsub';
                              console.log('hey sub');
                              break;

                    case '/': this.currentOperator = 'div';
                              break;

                    case '*': this.currentOperator = 'mul';
                              break;
                    

                }

            }else if(this.currentVal === 'AC'){

                this.reset();

            }else{

                if(this.state === 'final'){
                    this.reset();
                }
                this.operand = this.operand + this.liElem.innerHTML;
                console.log(this.operand);
                console.log(this.operand1);

                this.screenElem.innerHTML = this.operand;
            }


        }.bind(this));
    }

    performOperation(){
        this.count = 0;
        this.operand2 = this.operand.replace(this.operand1, '') ;
        console.log(this.operand2);
        if(this.operand2[0] === '0'){
            this.operand2 = this.operand2.replace('0', '') ;

        }
        if(this.operand2[0] === '*'){
            this.operand2 = this.operand2.replace('*', '') ;

        }
        if(this.operand2[0] === '/'){
            this.operand2 = this.operand2.replace('/', '') ;

        }
        console.log(this.currentOperator);
                
        switch(this.currentOperator){

            case 'addandsub': console.log(parseFloat(this.operand1) + parseFloat(this.operand2));
                              if( isNaN(parseFloat(this.operand1) + parseFloat(this.operand2)) ){
                                      this.screenElem.innerHTML = 'ERROR, please click AC';
                              }else{
                                this.screenElem.innerHTML = parseFloat(this.operand1) + parseFloat(this.operand2) + '';
                            }

                              this.operand = parseFloat(this.operand1) + parseFloat(this.operand2) + '';
                              this.state = 'final';
                              break;

            case 'div': console.log(parseFloat(this.operand1) / parseFloat(this.operand2));
                        if( isNaN(parseFloat(this.operand1) / parseFloat(this.operand2)) ){
                            this.screenElem.innerHTML = 'ERROR, please click AC';
                        }else{
                            this.screenElem.innerHTML = parseFloat(this.operand1) / parseFloat(this.operand2) + '';
                        }

                        this.operand = parseFloat(this.operand1) / parseFloat(this.operand2) + '';
                        this.state = 'final';
                        break;

            case 'mul': console.log(this.operand1 * parseFloat(this.operand2));
                        if( isNaN(parseFloat(this.operand1) * parseFloat(this.operand2)) ){
                            this.screenElem.innerHTML = 'ERROR, please click AC';
                        }else{
                            this.screenElem.innerHTML = parseFloat(this.operand1) * parseFloat(this.operand2) + '';
                        }
                        this.operand = parseFloat(this.operand1) * parseFloat(this.operand2) + '';
                        this.state = 'final';
                        break;
        }

    }

    reset(){
        this.operand = '';
        this.count = 0;
        this.currentVal = null;
        this.currentOperator = null;
        this.operand1 = '';
        this.operand2 = '';
        this.state = 'start';
        this.screenElem.innerHTML = '0';
    }

}

var calculator = new Calculator();
