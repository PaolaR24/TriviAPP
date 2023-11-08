const quizQuestions = [
  {
    question: "Cuales son los diferentes tipos de programacion?",
    choices: [
      "Javascript, SQL, Python",
      "Python y modular",
      "Programacion modular",
      "Programacion Typescript,scala, y funcionalidad",
    ],
    correctAnswer: "Javascript, SQL, Python",
  },

  {
    question: "Cuales son los tipos de lenguaje?",
    choices: [
      "Pronto",
      "Intermedio, interpretado,Compilado",
      "bo-while, interpretado,Compilado",
      "Compilado, pronto,interpretado",
    ],
    correctAnswer: "Intermedio, interpretado,Compilado",
  },

  {
    question: "Para que utilizamos la diagonal //?",
    choices: [
      "Para dar una razon",
      "Escribir algo",
      "Para definir una variable",
      "Para dar una linea sencilla de comentario",
    ],
    correctAnswer: "Para dar una linea sencilla de comentario",
  },

  {
    question: "Que es el puntero NULL?",
    choices: [
      "Es el puntero que apunta pero no señala *charp=NULL",
      "Es el puntero que no apunta a nada char*p=NULL;",
      "Es el puntero que no apunta a nada charp=NULL:",
      "Es el puntero que no apunta a nada char*p:NULL",
    ],
    correctAnswer: "Es el puntero que no apunta a nada char*p=NULL;",
  },
  {
    question: "Cual es la diferencia entre los operadores (==), (===), (!=)",
    choices: [
      "Igualdad(==)Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato Igualdad estricta(===) Hace lo mimo que el anterior, pero verificando tambien que coincidan los tipos de datos Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negandola",
      "Igualdad(==)Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato Igualdad estricta(===) Hace lo mimo que el anterior, pero verificando tambien que coincidan los tipos de datos Desigualdad (!=) Funciona de la misma forma que la igualdad, pero afirmandola",
      "Igualdad(==)Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato Igualdad estricta(===) Hace lo mimo que el anterior, pero verificando tambien que coincidan los tipos de datos Igualdad (!=) Funciona de la misma forma que la igualdad, pero negandola",
      "Igualdad(==)Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato Igualdad estricta(===) Hace lo mimo que el anterior, pero verificando tambien que coincidan los tipos de datos Igualdad (!=) Funciona de la misma forma que la igualdad, pero afirmando",
    ],
    correctAnswer:
      "Igualdad(==)Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato Igualdad estricta(===) Hace lo mimo que el anterior, pero verificando tambien que coincidan los tipos de datos Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negandola",
  },
  {
    question: "Que es un promise?",
    choices: [
      "Un promise(Promesa en castellano) es un objeto que representa la terminacion o el fracado de una operacion asincrona",
      "Un promise(Promesa en castellano) es un objeto que representa la terminacion o el fracado de una operacion sincrona",
      "Un promise(Promesa en castellano) es un objeto que representa la manifestacion o el fracado de una operacion asincrona",
      "Un promise(Promesa en castellano) es un objeto que representa la terminacion o el fracado de una operacion asincrona",
    ],
    correctAnswer:
      "Un promise(Promesa en castellano) es un objeto que representa la terminacion o el fracado de una operacion asincrona",
  },
  {
    question: "Que es el DOM?",
    choices: [
      "El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un documento y que puede ser manipulada con JS",
      "El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un documento y que puede ser manipulada con JAVA",
      "El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un archivo y que puede ser manipulada con JavaS",
      "El DOM (Document Object Model) es la estructura de objetos que genera el documento cuando se carga un documento y que puede ser manipulada con JS",
    ],
    correctAnswer:
      "El DOM (Document Object Model) es la estructura de objetos que genera el navegador cuando se carga un documento y que puede ser manipulada con JS",
  },
  {
    question: "Qué son las etiquetas?",
    choices: [
      "Es el contenido que se coloca entre las etiquetas HTML, con la finalidad de darle formato correctamente. Usa el símbolo menor que (<) y el mayor que (*). Un símbolo de barra oblicua también se utiliza como etiqueta de cierre.",
      "Es el contenido que se coloca entre las etiquetas HTML, con la finalidad de darle formato correctamente. Usa el símbolo menor que (<) y el mayor que (-). Un símbolo de barra oblicua también se utiliza como etiqueta de cierre.",
      "Usa el símbolo menor que (+) y el mayor que (>). Un símbolo de barra oblicua también se utiliza como etiqueta de cierre.",
      "Es el contenido que se coloca entre las etiquetas HTML, con la finalidad de darle formato correctamente. Usa el símbolo menor que (<) y el mayor que (>). Un símbolo de barra oblicua también se utiliza como etiqueta de cierre.",
    ],
    correctAnswer:
      "Es el contenido que se coloca entre las etiquetas HTML, con la finalidad de darle formato correctamente. Usa el símbolo menor que (<) y el mayor que (>). Un símbolo de barra oblicua también se utiliza como etiqueta de cierre.",
  },
  {
    question: "¿Cómo se inserta un comentario en HTML??",
    choices: [
      "Los comentarios en HTML empiezan con " < !-" y terminan con ->.",
      "Los comentarios en HTML empiezan con " < !-" y terminan con " - +".",
      "Los comentarios en HTML empiezan con " < !-" y terminan con ->+",
      "Los comentarios en HTML empiezan con " < +-" y terminan con ->.",
    ],
    correctAnswer:
      "Los comentarios en HTML empiezan con " < !-" y terminan con ->.",
  },

  {
    question:
      "¿Cuáles son algunas de las listas comunes que se pueden usar al diseñar una página?",
    choices: [
      "Lista dedordenada y lista ordenada",
      "Lista desordenada y lista operativa",
      "Lista ordenada y lista de diseño",
      "Ninguna de las anteriores",
    ],
    correctAnswer: "Lista dedordenada y lista ordenad",
  },
];

 const funImages = [
  "./assets/images/happy fun.gif",
  "./assets/images/hellYeah.gif",
  "./assets/images/winning.gif",
  "./assets/images/yeah.gif",
  "./assets/images/you did it.gif",
]; 

const sadImages = [
  "./assets/images/danm.gif",
  "./assets/images/oops.gif",
  "./assets/images/pretty bad.gif",
];
