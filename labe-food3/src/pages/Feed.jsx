import useProtectedPage from '../hooks/useProtectedPage'
import Header from '../components/Header'

const Feed = () => {
    useProtectedPage()


  return (
    <main>
        <Header 
            isProtected={true}
        />
        <hr />
        <section>
            <h2>Buscar por restaurante</h2>
        </section>
        <section>
            <h3>Lista de restaurantes</h3>
        </section>
    </main>
  )
}

export default Feed