// Let's you want to search for each word, how many its appeared in the text you have, remove all punctuation letters, and order them desc.
//
const find = require('lodash/find');
const orderBy = require('lodash/orderBy')
//
const dummytest = `Lorem Ipsum is simply dummy text of @#$%^**))_$"{}\.,the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const removePunctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
const clearText  = dummytest.replace(removePunctuationRegex,'');
const outPutArray = [];
clearText.split(" ").forEach((word) => {
  const regexp_checkWord = new RegExp(word.toLowerCase(), "g");
  if (!find(outPutArray, item => item.word === word)) {
    outPutArray.push({
      count: clearText.toLowerCase().match(regexp_checkWord).length,
      word: word,
    });
  }
});

const orderdOutPut = orderBy(outPutArray,['count'],['desc'])
orderdOutPut.forEach(element => {
    if(element.count > 1){
        console.log(`${element.word} ${element.count}`);
    }
});


