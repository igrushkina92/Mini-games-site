function reverseText() {
    let userText = prompt ('Введите любое слово!');
    let reverseText = userText.split('').reverse().join('');

    alert (reverseText);


}