import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import './style.css'
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
// import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Projects = () => {
//   const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };


  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className="gridContainer">
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className="appBarSearch" position="static" color="inherit">
              <TextField style={{marginBottom:"20px"}} onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Projects" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <Button onClick={searchPost} className="searchButton" variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper className="pagination" elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Projects;
