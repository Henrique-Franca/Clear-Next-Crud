import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes =[
    new Cliente('Ana',   34, '1'),
    new Cliente('Bia',   25, '2'),
    new Cliente('Carlos',54, '3'),
    new Cliente('Pedro', 32, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600 
      text-white
    `}>
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4">Novo Cliente</Botao>
          </div>

          {/*<Tabela cliente={clientes} 
            clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>*/}

            <Formulario/>

        </Layout>
    </div>  
  )
}
