

    /**
    todo
    unesscary nesting with addend
    **/

function currency() {
            const numbers = [];
            const colums_list = [
                'Units',
                'Tens',
                'Hundreds',
                'Thousands',
                'Ten thousands',
                'Hundred Thousands'
            ];
            const currencyList = [
                '£',
                '$',
                '€',
            ];
            const numberElementSplitted = [];
            const columsDialogue = [];
            const signElments = [];


            let chosenCurrency = currencyList[Math.floor(Math.random()*currencyList.length)];

            let longestNumber = 0;
            let phraseBeginning = '';
            let phrase = '';
            for (let j = 0; j < (Math.floor((Math.random() * 2) + 1)+1); ++j ){
                numbers.push(String(Math.floor((Math.random() * 1000) + 1)));
                console.log(numbers);
            }

            console.log("Start Question. Addition of ");
            let equationID= ("additon-equation-" + numbers.toString() + "-");

            console.log(equationID);
            let mathArea = document.getElementById("maths-area");

            let sum = document.createElement("div");
            let outerLayer = document.createElement("div");


            let leftSideUnitsArea = document.createElement("div");
            let leftSdieUnitsTop = document.createElement("div");
            let leftSdieUnitsBottom = document.createElement("div");

            let equationArea = document.createElement("div");
            let appardArea = document.createElement("div");
            let sigArea = document.createElement("div");
            let signElement = document.createElement("div");
            let answerAreaHolder = document.createElement("div");

            outerLayer.setAttribute("class", "columnar-addition-outer-container");


            leftSideUnitsArea.setAttribute("class", "columnar-addition-left-symbol-area-container");
            leftSdieUnitsTop.setAttribute("class", "columnar-addition-left-symbol-upper-container");
            leftSdieUnitsTop.innerHTML="+";
            leftSdieUnitsBottom.setAttribute("class", "columnar-addition-left-symbol-lower-container");
            leftSdieUnitsBottom.innerHTML=chosenCurrency;


            appardArea.setAttribute("id", (equationID + "addend-area"));

            answerAreaHolder.setAttribute("id", (equationID + "answer-area"));
            
            sum.setAttribute("id", equationID);
            sum.setAttribute("class", "columnar-addition-equation-container");

            equationArea.setAttribute("id", (equationID + "upper-area-container"));
            equationArea.setAttribute("class", "columnar-addition-upper-area-container");

            appardArea.setAttribute("id", (equationID + "addend-area"));
            appardArea.setAttribute("class", "columnar-addition-addend-area-container");

            sigArea.setAttribute("id", (equationID + "symbol-area"));
            sigArea.setAttribute("class", "columnar-addition-symbol-area-container");

            


            

            answerAreaHolder.setAttribute("id", (equationID + "answer-line-container"));
            answerAreaHolder.setAttribute("class", "columnar-addition-answer-line-container");

            //mathArea.appendChild(sum);
            mathArea.appendChild(outerLayer);
            
            outerLayer.appendChild(leftSideUnitsArea);
            leftSideUnitsArea.appendChild(leftSdieUnitsTop);
            leftSideUnitsArea.appendChild(leftSdieUnitsBottom);

            outerLayer.appendChild(sum);









            sum.appendChild(equationArea);
            equationArea.appendChild(appardArea);
            equationArea.appendChild(sigArea);
            sigArea.appendChild(signElement);

            sum.appendChild(answerAreaHolder);
            

            for (let i =0; i < numbers.length; i++) {
                signElments[i] = document.createElement("div");
                signElments[i].setAttribute("id", (equationID + "symbol-element" + i));
                signElments[i].setAttribute("class", "columnar-addition-symbol-element");
                sigArea.appendChild(signElments[i]);
                signElments[i].innerHTML=chosenCurrency;

            }
            let apprandHolder = [];
            let apparandElement = document.getElementById((equationID + "addend-area"));

            for (let j = 0; j < numbers.length; ++j) {
                let numbertoArray = numbers[j].toString(10).split('').reverse();
                let equationLastRowStart = numbers[j].length;

                apprandHolder[j] = document.createElement("div");
                apprandHolder[j].setAttribute("id", (equationID + "addend-" + j));
                apparandElement.appendChild(apprandHolder[j]);

                let elementHolder = [];
                let integerElement = [];

                let equationelement = document.getElementById((equationID + "addend-" + j));
                equationelement.setAttribute("class", "columnar-addition-addend-container");

                for (let i = 0; i < numbers[j].length; ++i) {
                    elementHolder[i] = document.createElement("div");
                    integerElement[i] = document.createElement("div");

                    equationelement.appendChild(elementHolder[i]);
                    elementHolder[i].appendChild(integerElement[i]);

                    elementHolder[i].setAttribute("id", (equationID + "addend-" + j + "-"+ "element-container-" + i));
                    elementHolder[i].setAttribute("class", "columnar-addition-addend-element-container");

                    integerElement[i].setAttribute("id", (equationID + "addend-" + j + "-"+ "element-" + i));
                    integerElement[i].setAttribute("class", "columnar-addition-addend-element");


                    if (i < equationLastRowStart) {
                        document.getElementById((equationID + "addend-" + j + "-"+ "element-" + i)).innerHTML = numbertoArray[i];
                    }
                }
            }

            /* there is a bug here with the length of last number ??? */
            
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i].length > longestNumber) {
                    longestNumber = numbers[i].length;
                }
            }

            let answerElementHolder = [];
            let answerInputHolder = [];
            let answerCarriesHolder = [];
            let answerArea = document.getElementById((equationID + "answer-line-container"));
            for (let k = 0; k < (longestNumber + 1); ++k) {


                answerElementHolder[k] = document.createElement("div");
                answerElementHolder[k].setAttribute("id",(equationID+ "answer-element-container-" + k));
                answerElementHolder[k].setAttribute("class", "columnar-addition-answer-element-container");
                answerArea.appendChild(answerElementHolder[k]);


                answerInputHolder[k] = document.createElement("input");
                answerInputHolder[k].setAttribute("id",(equationID + "answer-box-input-" + k));
                answerInputHolder[k].setAttribute("maxlength",1);

                
                answerInputHolder[k].setAttribute("class", "columnar-addition-answer-box-input");

                answerCarriesHolder[k] = document.createElement("input");
                answerCarriesHolder[k].setAttribute("id", (equationID + "carries-box-input-" +k));
                answerCarriesHolder[k].setAttribute("maxlength",1);
                answerCarriesHolder[k].setAttribute("class", "columnar-addition-carries-box-input");

                answerElementHolder[k].appendChild(answerInputHolder[k]);
                answerElementHolder[k].appendChild(answerCarriesHolder[k]);
            }

            // add push here instead
            for (let i = 0; i < numbers.length; i++) {
             numberElementSplitted[i] = numbers[i].toString(10).split('').reverse();
            }

            for (let i = 0; i < longestNumber; i++) {
                columsDialogue[i] = [];
            }

            for (let i = 0; i < numberElementSplitted.length; i++) {
                for (let j = 0; j < numberElementSplitted[i].length; j++) {
                    columsDialogue[j].push(numberElementSplitted[i][j]);
                }

            }

            // loop each split and add plus to each element 
            for (let i = 0; i < columsDialogue.length; i++) {
                phraseBeginning = (colums_list[i] + ' colum add ')
                for (let j = 0; j < columsDialogue[i].length; j++) {
                    if (columsDialogue[i].length === 1) {
                        phrase = phrase + (String(columsDialogue[i][j]) + ' on its own');
                        
                    } else {
                        if (j < (columsDialogue[i].length - 1)) {
                            phrase = phrase + (String(columsDialogue[i][j] + ' plus '));

                        } else {
                            phrase = phrase + (String(columsDialogue[i][j]));
                        }
                    }
                    answerCarriesHolder[i].setAttribute("aria-label", (colums_list[i] + " carries"))
                    answerInputHolder[i].setAttribute("aria-label" , (phraseBeginning + phrase));
                }
                console.log(phraseBeginning + phrase);

                phrase = '';
            }

            }
