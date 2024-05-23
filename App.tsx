
import React from 'react';
import { View,Text,TextInput, TouchableOpacity, StyleSheet, Dimensions, FlatList, Button } from 'react-native';
const dibujar=StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20

  },
  titulo:{
    fontSize:30,
    color:'#F25B3D',
    
    
  },
  textinput:{
    borderColor: '#F25B3D',
    borderWidth:1,
    borderRadius:15,
    width:Dimensions.get("screen").width*0.6,
    paddingLeft:15

  },
  text:{
    fontSize:30,
    color:'#F25B3D'
    

  },
  wtext:{
    fontSize:16,
    color:'white',
    top:10

  },
  inputcontenedor:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between"

  },
  button:{
    width:Dimensions.get("screen").width*0.25,
    backgroundColor:'#E96363',
    alignItems:'center',
    borderRadius:15


  },
  tareascontenedor:{
    paddingVertical:20,
    borderBlockColor:"black",
    borderBottomWidth:1,
  }
})

const tareas=[
  {
  titulo:"Hacer Documentación",
  estado:false,
  fecha:new Date()
  
},
{
  titulo:"Brief de Comunicación",
  estado:false,
  fecha:new Date()
},
{
  titulo:"Canva",
  estado:false,
  fecha:new Date()
},
{
  titulo:"Tomar pola",
  estado:false,
  fecha:new Date()
},
{
  titulo:"Ir al mall",
  estado:false,
  fecha:new Date()
}
]
interface Task{
  titulo:string,
  estado:boolean,
  fecha:Date
}

function renderItem({item}:{item:Task}){
  return (
    <View style={dibujar.tareascontenedor}>
      <TouchableOpacity>
      <Text style={dibujar.text}>
        {item.titulo}

      </Text>
      <Text style={dibujar.text}>
        {item.fecha.toDateString()}

      </Text>
      </TouchableOpacity>
    </View>
  )
}
export default function App(){
return (
  <View style={dibujar.contenedor}>
    <Text style={dibujar.titulo}>
     Bienvenid@
    </Text>
    <View style={dibujar.inputcontenedor}>
      <TextInput placeholder="Escribe tu nombre"  style={dibujar.textinput}/>
      <TouchableOpacity  style={dibujar.button}>
        <Text  style={dibujar.wtext}>
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
    <View >
      <FlatList
        data={tareas}
        renderItem={renderItem}
        
      />
      
    </View>
    
  </View>
)
}