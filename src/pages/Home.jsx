import React from 'react'
import Header from '../components/Header'
import { Container } from '../styled/UI.styles'
import { HomeContainer, IconButton, StyledCard } from '../styles/Home.styles'
import { useRecipe } from '../context/Recipe';

const Home = () => {
  const { recipes } = useRecipe();
  return (
    <HomeContainer>
      <Container>
        <Header />
        <Stack gap="1rem" justify="center">
          {recipes.map((r, index) => (
          <StyledCard key={index} bg="#efefef" shadow title={r.recipe.label}> 
            <IconButton>
              <h5 className="text-primary">{r.recipe.label}</h5>
            <Link to="details" state={{r}}>
              <img src={r.recipe.image} alt={r.recipe.label}/>
            </Link>
          </IconButton>
          </StyledCard>
          ))}
        </Stack>

      </Container>
    </HomeContainer>


  );
};

export default Home;