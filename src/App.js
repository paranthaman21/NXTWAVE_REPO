import UserProfile from './components/UserProfile/index'

const userDetail = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Paranthaman',
  role: 'Full Stack Developer',
}

const App = () => <UserProfile userDetails={userDetail} />

export default App
