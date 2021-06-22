import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImage from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import "../styles/auth.scss"
import { useAuth } from '../hooks/useAuth'


export function Home() {
    const history = useHistory();
    const { singInWithGoogle, user } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await singInWithGoogle()
        }
        history.push('/rooms/new')
    }


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleImage} alt="Logo do Google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" /><br />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>

        </div>
    )
}