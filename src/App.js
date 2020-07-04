import React, { useState } from 'react';

function App() {
  
  const [Todo, SetTodo] = useState('') ;

  const [TodosList,setTodoList] = useState([

    {id:1,Text:"Watch movie"},
    {id:2,Text:"GoMyCode"},
    {id:3,Text:"Gym"}
  ]) ;
  
  function ChangeTodo(e){

    e.preventDefault();
    SetTodo(e.target.value);
    console.log(Todo) ;
  }
  
  function Changelist(e) {
    e.preventDefault()
    if(Todo ==='') return
    setTodoList([ {id:Date.now() , Text:Todo} , ...TodosList])
    SetTodo('') ;
    

    
  }

  function deleteTodo(id)
  {
      setTodoList(TodosList.filter( (Todo)=> Todo.id !== id ))
  }

  function editTodo(id){
    setTodoList(TodosList.filter( (Todo)=> Todo.id !== id )) ;

    const TodoToEdit = TodosList.find(todo => todo.id === id)
    console.log(TodoToEdit) ;

    SetTodo(TodoToEdit.Text);


  }
  
  return(


          <div 
          style={{textAlign:'center',
           fontFamily:'arial' ,
            backgroundColor:'pink' 
            ,marginTop:'30px' ,paddingTop:'5px',paddingBottom:'30px',
            marginLeft:'200px',marginRight:'200px',
            borderRadius:'19px'
            }}>

            <h1 style={{color:"white" ,fontSize:'100px'}}>Tasks</h1> 

            <div style={{marginTop:'29px'}}>
              <input style={{fontSize:'25px',marginRight:'10px' , borderRadius:'5px' ,padding:'5px' , borderColor:'pink'}} placeholder="your Task :" onChange={ChangeTodo} value ={Todo}/>
              <input style={{fontSize:'30px' ,borderRadius:'5px' ,color:'pink' ,borderColor:'pink'}} type="submit" value="Add" onClick={Changelist}/>
            </div>

            


            <div 
            style={{backgroundColor:'#e6e6e6',
            marginLeft:'130px' ,marginTop:'39px',marginRight:'130px',
            paddingTop:'19px' , paddingBottom:'19px',paddingLeft:'2px',paddingRight:'2px',
            borderRadius:'9px'
            
            }}>
              {TodosList.map((Todo)=>(

              <div style={{display:'flex' ,backgroundColor:'white',margin:'15px',padding:'8px',fontSize:'30px'}}>
 
                <div style={{marginRight:'50px' , display:'flex' ,alignItems:'center' }}>
                
                <button style={{marginRight:'9px' ,backgroundColor:'pink',color:'white' ,borderRadius:'9px' , border:'0px' }} onClick={()=>deleteTodo(Todo.id)}> X </button>

                <button style={{backgroundColor:'pink' ,color:'white' ,borderRadius:'9px' , border:'0px' }} onClick={()=>editTodo(Todo.id)}> Edit </button>

                </div>


                <div style ={{color:'pink'}}>

                 {Todo.Text}
                </div>
                

              </div>
                
              ))}
              </div>

            
          </div>

  );
}
export default App;
