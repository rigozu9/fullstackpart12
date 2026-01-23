import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import Home from './components/Home'
import ThisWeek from './components/ThisWeek'
import theme from './themes'

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: theme.palette.background.default },
          }}
        />
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/thisweek" element={<ThisWeek />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    )
  }

  export default App