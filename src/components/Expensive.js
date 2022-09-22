
import React,{ useState } from "react";
import './Expensive.css';


let friend =new Map()

const Expensive = () =>{
   // const history=useNavigate();
   const [person1,setPerson1]=useState('');
   const [person2,setPerson2]=useState('');

   const [person3,setPerson3]=useState('');
   const [person4,setPerson4]=useState('');

   const [deg,setDegree]=useState(0)
   const [pa,setPath]=useState("")

   const [res,setRes]=useState("")

   const postData = (e) => {
      e.preventDefault()
     
      if(friend.has(person1)){
         if(!friend.get(person1).includes(person2)){
            friend.get(person1).push(person2)
         }
      }else{
         friend.set(person1,[person2])
      }

      if(friend.has(person2)){
         if(!friend.get(person2).includes(person1)){
            friend.get(person2).push(person1)
         }
      }else{
         friend.set(person2,[person1])
      }

      setRes(`${friend.size} data added`)
      console.log(friend)
   }

   const getDegree = (e) =>{
      e.preventDefault()

      let table = new Map()
      let arr =[]
      arr.push(person3)
      let ind = new Map()
      friend.forEach((value,key) => {

         if(key == person3) {
            table.set(key,{
               dist : 0,
               path : []
            })
         } else {
            table.set(key,{
               dist : undefined,
               path : []
            })
         }

         ind.set(key,0)

      });

      for (let i = 0; i < table.size; i++) {
         let pp = arr.pop()
         ind.set(pp,1)

         // console.log(`the pop ${i} th friend is ${pp} and it's indicator is ${ind.get(pp)}  and it's path is ${table.get(pp).path}`)

         let distance =table.get(pp).dist
         let pat=table.get(pp).path


         for(let j=0 ; j<friend.get(pp).length ; j++) {
            let f=friend.get(pp)[j]

            // console.log(`inner for loop for ${pp} and it's friend is ${f}`)
            // console.log(`the ${f}'s dist is ${table.get(f).dist} and it's path is ${table.get(f).path}`)

            if(ind.get(f)==0){
               arr.push(f)
               ind.set(f,1)
            }

            if(table.get(f).dist ==undefined) {
               // console.log("if statement")
               let a = new Array(...pat)
               a.push(pp)
               table.set(f,{
                  dist : distance+1,
                  path : a
               })
               console.log(table)
            } else {
               if(table.get(f).dist > (distance+1)) {
                  // console.log("else statement")
                  let a = new Array(...pat)
                  a.push(pp)
                  table.set(f,{
                     dist : distance+1,
                     path : a
                  })
                  // console.log(table)
               } 
            }
         }

         // console.log(arr)
         // console.log(ind)
      }

      // console.log("result")
      // console.log(table)
      // console.log(table.get(person4).dist)
      // console.log(table.get(person4).path)
      setDegree(table.get(person4).dist)
      let str =""
      table.get(person4).path.forEach(element => {
         str+=element+" -> "
      });
      str+=person4
      setPath(str)

      
   }

     return(
        <div>
        <h1> Inserting Frriends Data</h1>
        <form>
        <div className="new-expense">
        <div  className="new-expense_controls">
        <div className="new-expense_controls">
        <label>name of 1st person</label>
        <input type="text"  value={person1} onChange={(e)=>setPerson1(e.target.value)}/>
        </div>

        <div className="new-expense_controls">
        <label>name of 2nd person</label>
        <input type="text" value={person2} onChange={(e)=>setPerson2(e.target.value)}/>
        </div>

        </div>
        <div className="new-expense-actions">
        <button onClick={postData}>save</button>
        {/* <input type="submit" name="signin" value="save" onClick={postData} /> */}

        </div>
        <h2>{res}</h2>
        </div>
               
        </form>


        <h1> Check Two Person Degree</h1>
        <form>
        <div className="new-expense">
        <div  className="new-expense_controls">
        <div className="new-expense_controls">
        <label>  1st Person</label>
        <input type="text" value={person3} onChange={(e)=>setPerson3(e.target.value)}/>
        </div>

        <div className="new-expense_controls">
        <label>2nd Person </label>
        <input type="text"  value={person4} onChange={(e)=>setPerson4(e.target.value)}/>
        </div>

        </div>
        <div className="new-expense-actions">
        <button type="submit" onClick={getDegree}>Check</button>

        </div>
        <h2>{deg}</h2>
        <h2>{pa}</h2>
        </div>
               
        </form>
        </div>
     )

};

 export default Expensive; 