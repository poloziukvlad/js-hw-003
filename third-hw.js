let message;
let login = 'Директор';

message = (login === 'Співробітник' || login === 'Директор') ? 'Привіт' : 
          login === '' ? 'Немає логіна' ;

console.log(message);