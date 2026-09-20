import { AppLayout } from "./layouts/AppLayout"
import { BrowserRouter } from 'react-router-dom';
export const App = () => {
    return <BrowserRouter>
  <AppLayout />
</BrowserRouter>
}