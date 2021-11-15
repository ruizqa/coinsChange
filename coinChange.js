function coinChange(input){
    if(typeof(input)=="number"){
        change = {}
        if(input>=100){
            dollars= Math.floor(input/100);
            input -= dollars*100;
            change['dollars'] = dollars;
        }

        if (input>=25){
            quarters = Math.floor(input/25);
            input -= quarters*25;
            change['quarters'] = quarters;
        }

        if (input>=10){
            dimes = Math.floor(input/10);
            input -= dimes*10;
            change['dimes'] = dimes;
        }

        if (input>=5){
            nickels = Math.floor(input/5);
            input -= nickels*5;
            change['nickels'] = nickels;
        }

        if (input>0){
            pennies = input;
            input =0;
            change['pennies'] = pennies;
        }

        return change;
    }

    else{
        let money = 0;
        let keys=  Object.keys(input);
        for(let i=0; i<keys.length; i++){
            key= keys[i];
            if (key=='dollars'){
                money += input['dollars']*100;
            }
            
            else if (key=='quarters'){
                money += input['quarters']*25;
            }

            
            else if (key=='dimes'){
                money += input['dimes']*10;
            }

            
            else if (key=='nickels'){
                money += input['nickels']*5;
            }

            
            else if (key=='pennies'){
                money += input['pennies']*1;
            }

        }
        return coinChange(money);

    }



}

console.log(coinChange(312));
console.log(coinChange(78));
console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}));