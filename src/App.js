import UserProfile from './components/UserProfile/index'

const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Paranthaman',
  role: 'Full Stack Developer',
}

const App = () => <UserProfile userDetails={userDetails}/>

export default App
