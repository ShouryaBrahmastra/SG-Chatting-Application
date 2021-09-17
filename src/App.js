import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID="c93f9f9d-4389-45d2-ba0e-c786ec0f1303"

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm />;
    }
    return (
        < ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
