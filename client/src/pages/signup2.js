import React, {useState} from 'react'
import Logo from '../images/logo.jpeg'
import Link from 'gatsby-link'
import axios from 'axios'


function Signup2() {
	const [activite, setActivite] = useState("")
	const [fabrication, setFabrication] = useState("")
	const [vente, setVente] = useState("")
	const [infos, setInfos] = useState("")

	const activiteHandler = (e) =>{
		setActivite(e.target.value)
		console.log(e.target.value)
	}

	const fabricationHandler = (e) =>{
		setFabrication(e.target.value)
		console.log(e.target.value)
	}

	const venteHandler = (e) =>{
		setVente(e.target.value)
		console.log(e.target.value)
	}

	const infosHandler = (e) =>{
		setInfos(e.target.value)
		console.log(e.target.value)
	}

	async function addUserHandler2(e) {
		e.preventDefault()
		try{
			const registerData = {
				activite,
				fabrication,
				vente,
				infos
			};
			await axios.patch("http://localhost:5000/signup2/611a39a0ffcfc43190d7a675", registerData)
		}catch(err){
			console.log(err)
		}
	}


    return (
        <div>
        <img className="mt-6 m-auto" alt="da-logo" src={Logo} width="300"/>
        <div className=" h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <h2 className="text-center">Ajouter plus d'informations sur votre organisation</h2>
                <div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="activite">
						Activité principale
					</label>
					<input
						className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="activite"
						type="text"
						placeholder="Activité principale"
						onChange={activiteHandler}
					/>
				</div>
                <div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="fabrication">
						Lieux de fabrication
					</label>
					<input
						className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="fabrication"
						type="text"
						placeholder="fabrication"
						onChange={fabricationHandler}
					/>
				</div>
                <div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="vente">
						Points de vente
					</label>
					<input
						className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="vente"
						type="text"
						placeholder="Points de vente"
						onChange={venteHandler}
					/>
				</div>
                <div>
					<label  className="block mb-2 text-sm font-bold text-gray-700" htmlFor="desc" >Description</label>
					<textarea onChange={infosHandler} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="desc" rows="4" cols="50">
					</textarea>
				</div>
                <br></br>
            <Link to="/signup3"><button className="w-min px-4 py-2 font-bold bg-white text-blue-500 hover:text-white border-2 border-blue-500 rounded-full hover:bg-blue-500 ">Sauter</button></Link>
            <Link onClick={addUserHandler2} to="/signup3"><button className="float-right w-min px-4 py-2  border-2 font-bold text-white border-blue-500 hover:border-blue-700 bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Suivant</button></Link>
            </div>
        </div>
    </div>
    )
}

export default Signup2
