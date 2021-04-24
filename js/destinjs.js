// const people = [
//     {
//       name: 'Zainab Raza',
//       family: {
//         mother: 'shagufta',
//         father: 'Raza',
//         sister: 'Abeeha'
//       },
//       age: 22
//     },
//     {
//       name: 'fizza ayaz',
//       family: {
//         mother: 'Ammi',
//         father: 'Ayaz Bhai',
//         brother: 'Eraj Ayaz'
//       },
//       age: 23
//     }
//   ];
  
//   for (const {name: n, family: {father: f,mother:m}} of people) {
//     console.log('Name: ' + n + ', Father: ' + f + 'Mother: '+ m );
//   }

  //nesting destructing
  let person = {
      name : "zainab",
      personaladata : {
          city : 'karachi',
          country : 'pakistan',domicile: 'karachi'
      },
      manhoosdost : ['anniematlabi','fizzzaaTiddi','sohaabaji','taniyaaarotu','marijamrood','misbahcheynpeyn']
  }
  let{
      name:zn,
      personaladata: {
          city:pc,country:pp,domicile:dom
      }, manhoosdost:md
  } = person;

//   console.log(zn);
//   console.log(pc);
//   console.log(dom);
//   console.log(md[2]);

  document.write(md[1]);
  document.write(zn);