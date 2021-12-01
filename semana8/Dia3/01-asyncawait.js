//de promesas a ASYNC
// const traerData= () =>{
//     return new Promise((resolve, reject)=>{
//         resolve("Data Obtenida")
//         // resolve("Error al obtener data")
//     });
// };
//async, me devuelve una promesaen vez de retornarmeel resultado directamente
const traerData=async()=>{
    //aca dentro yo tenga mas codigo,haga operaciones in if, ect
    //y cuando tenga exito return si fallo throw
    // return ("Data obtenida con async");//return =resolve
    throw "Error al obtener data con async";
};
// traerData()
// .then(rpta => console.log(rpta))
// .catch(error => console.log(error));

const usarData= async()=>{
    // cuando utilicemos await, tiene que estar dentro de una funcion
    //y esas funcion tiene que tener async
    // let rpta=await traerData();
    // console.log(rpta);
    //trycatch no es solamente para async/await
    try {//intenta esto
        let rpta=await traerData();//resolve
    console.log(rpta);
    } catch (error) {//y si no  te funciona ejecuta esto y me dices que ha pasado
        console.log(error);
    }
};
// usarData();

const traerUsuarios = async()=>{
    try {
        let respuesta=await fetch("https://reqres.in/api/users?page=2");
        let datos=await respuesta.json();
        console.table(datos.data);
    } catch (error) {//reject/thorw
        console.log(error);
    }
};
traerUsuarios();
