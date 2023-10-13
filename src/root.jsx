/* @refresh reload */
import { render } from 'solid-js/web'
import App from './routes/index'
import './root.css'

render(
  () => <App />,
  document.getElementById('root')
)