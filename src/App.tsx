import React from "react"

export default function App() {
  return (
    <div className="App">
      <div className="flex justify-center h-heroHeight">
        <div className="w-3/6 items-center hidden xl:flex">
          <img src="../image.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold">Bem vindo de volta</h3>
          <h1 className="font-bold text-3xl pb-10">Faça login na sua conta</h1>
          <div className="space-y-4 w-80">
            <div className="flex flex-col space-y-2">
              <h4 className="">E-mail</h4>
              <input className="border p-3 outline-none" type="email" name="" id="" />
            </div>
            <div className="flex flex-col space-y-2">
              <h4>Senha</h4>
              <input className="border p-3 outline-none" type="password" name="" id="" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p>Lembre de mim</p>
              </div>
              <div>
                <a className="text-blue-600" href="">Esqueceu sua senha?</a>
              </div>
            </div>
            <div className="space-y-5 flex flex-col justify-center text-white">
              <button className="bg-entrar p-3 rounded-lg" type="submit">Entrar</button>
              <button className="flex gap-2 items-center justify-center bg-googlebuttom p-3 rounded-lg" type="submit">
                <img src="../iconfinder_Google_1298745 1.png" alt="" />
                <p>Ou faça login com Google</p>
              </button>
            </div>
            <div className="flex justify-center pt-14 gap-1">
              <p>Não tens uma conta? </p>
              <a className="text-blue-600" href="">Cadastre-te</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
