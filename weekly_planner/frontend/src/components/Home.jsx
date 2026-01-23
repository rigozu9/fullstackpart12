import { Button, Typography, Container, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/thisweek")
  }
  return (
    <Container maxWidth="sm">
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to study plan app
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={handleClick}>
                Get started
            </Button>
        </Box>

    </Container>
  )
}

export default Home