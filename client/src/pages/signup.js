import { Link } from 'gatsby'
import React, {useState} from 'react'
import Logo from '../images/logo.jpeg'
import axios from 'axios'


export default function Signup() {
	const [nom, setNom] = useState("")
	const [type, setType] = useState("cooperative")
	const [adresse, setAdresse] = useState("")
	const [tel, setTel] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [password2, setPassword2] = useState("")

	const nomHandler = (e) => {
		setNom(e.target.value)
	}

	const typeHandler = (e) => {
		setType(e.target.value)
	}
	
	const adresseHandler = (e) => {
		setAdresse(e.target.value)
	}
	
	const telephoneHandler = (e) => {
		setTel(e.target.value)
	}
	
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	
	const passwordHandler2 = (e) => {
		setPassword2(e.target.value)
	}

	async function addUserHandler(e) {
		e.preventDefault()
		try{
			const registerData = {
				nom,
				email,
				password,
				password2,
				type,
				adresse,
				tel
			};
			await axios.post("http://localhost:5000/signup", registerData, {withCredentials:true})
		}catch(err){
			console.log(err)
		}
	}



    return (
		<div  className="container justify-center">
			<div  className="flex justify-center px-6">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex  justify-center">
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className=" text-2xl text-primary text-center">Créer un compte</h3>
						<img className="m-auto" src={Logo} width="300" alt="da-logo"/>
						<form className="px-8 pt-6 pb-8 shadow mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nom">
										Nom de l'organisation
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="nom"
										type="text"
										placeholder="Nom"
										onChange={nomHandler}
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="type">
										Type
									</label>
									<select onChange={typeHandler} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="type">
										<option value="cooperation">Coopération</option>
										<option value="association">Association</option>
										<option value="autoentrepreneur">Autoentrepreneur</option>
									</select>
								</div>	
								
							</div>
							<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="addresse">
										Adresse
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="adresse"
										type="text"
										placeholder="Adresse"
										onChange={adresseHandler}
									/>
								</div>	
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="telephone">
									Téléphone
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="telephone"
									type="text"
									placeholder="Téléphone"
									onChange={telephoneHandler}
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									onChange={emailHandler}
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="**************"
										onChange={passwordHandler}
									/>
									
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="**************"
										onChange={passwordHandler2}
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<a href="/signup2/"><button
									className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={addUserHandler}
								>
									S'incrire
								</button></a>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link to="/signin/"
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Vous avez déjà un compte? Se connecter
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}
