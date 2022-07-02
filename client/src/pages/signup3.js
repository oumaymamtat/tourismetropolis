import React, {useState} from 'react'
import Logo from '../images/logo.jpeg'
import Link from 'gatsby-link'
import Members from './Members'
import axios from 'axios'



function Signup3() {
const inputTextHandler = (e) =>{
    setInputText(e.target.value)
}
const addMemberHandler = (e) => {
    e.preventDefault()
    if (inputText !== "")
    {setMembers([
        ...members,
        {text:inputText, id:members.length}
    ]);
    setInputText("");}
    console.log(members)
}

async function addUserHandler3(e) {
		e.preventDefault()
		try{
			const registerData = {
				members
			};
			await axios.patch("http://localhost:5000/signup3/611aa0ca753db304f4773af1", registerData)
		}catch(err){
			console.log(err)
		}
	}

    const [inputText, setInputText] = useState("")
    const [members, setMembers] = useState([])


    return (
        <div>
        <img className="mt-6 m-auto" src={Logo} width="300" alt="da-logo" />
        <div className=" h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h2 className="text-grey-darkest text-center">Ajouter les membres de votre organisation</h2>
                    <form className="flex mt-4">
                        <input value={inputText} onChange={inputTextHandler} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Ajouter un membre"/>
                        <button onClick={addMemberHandler} type="submit" className="w-1/3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Ajouter</button>
                    </form>
                </div>
                {members.map(member => (
                <Members key={member.id} text={member.text} setMembers={setMembers} member={member} members={members}></Members>
                ))}
                <br></br>
                <br></br>
                <br></br>
                <Link to="/"><button className="w-min px-4 py-2 font-bold bg-white text-blue-500 hover:text-white border-2 border-blue-500 rounded-full hover:bg-blue-500 ">Sauter</button></Link>
            <Link to="/"><button onClick={addUserHandler3} className="float-right w-min px-4 py-2  border-2 font-bold text-white border-blue-500 hover:border-blue-700 bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Suivant</button></Link>
            </div>
        </div>
    </div>
    )
}

export default Signup3
