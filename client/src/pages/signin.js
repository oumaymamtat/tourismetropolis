import React, {useState} from 'react'
import Logo from '../images/logo.jpeg'
import Link from 'gatsby-link'
import axios from 'axios'


export default function Signin() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}

	async function signinHandler(e) {
		e.preventDefault()
		try{
			const registerData = {
				email,
				password
			};
		await axios.post("http://localhost:5000/signin")
		}catch(err){
			console.log(err)
		}
	}

    return (
		<div  className="container justify-center">
			<div  className="flex justify-center px-6">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex  justify-center">
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className=" text-2xl text-primary text-center">Se connecter</h3>
						<img alt="da-logo" className="m-auto" src={Logo} width="300"/>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">	
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
							<div className="mb-6 text-center">
								<Link to="/"><button
									className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={signinHandler}
								>
									Se connecter
								</button>
								</Link>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link to="#"
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Mot de passe oublié ?
								</Link>
							</div>
							<div className="text-center">
								<Link to="/signup/"
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Vous n'avez pas de compte ? Créez un.
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}
