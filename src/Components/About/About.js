import React, { useState, useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';

const About = () => {

  const octokit = new Octokit();

  const login = 'OlgaVinogradova';
  const initialState = {
    isLoading: true,
    reposList: [],
    name: '',
    avatarUrl: '',
    htmlUrl: '',
    bio: '',
    error: ''
  };

  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [reposList, setReposList] = useState(initialState.reposList);
  const [name, setName] = useState(initialState.name);
  const [avatarUrl, setAvatarUrl] = useState(initialState.avatarUrl);
  const [htmlUrl, setHtmlUrl] = useState(initialState.htmlUrl);
  const [bio, setBio] = useState(initialState.bio);
  const [error, setError] = useState(initialState.error);

  useEffect(() => {
    setTimeout(() => {
      octokit.repos.listForUser({
        username: login,
      })
        .then((repositories) => {
          setReposList(repositories.data);
          setIsLoading(false);
        }).catch((err) => {
          setError(err);
          setIsLoading(false);
        });
      octokit.users.getByUsername({
        username: login
      })
        .then((userData) => {
          setName(userData.data.name);
          setAvatarUrl(userData.data.avatar_url);
          setHtmlUrl(userData.data.html_url);
          setBio(userData.data.bio);
        }).catch((err) => {
          setError(err);
        });
    }, 2000);
  }, []);

  return (
    <CardContent>
      { isLoading ? <CircularProgress style={{ display: 'block', margin: 'auto' }} /> :
        <div className={styles.userInfo}>
          <img className={styles.userAvatar} src={avatarUrl} />
          <div>
            <h2><a href={htmlUrl} target='blank'> {name ? name : login} </a></h2>
            <p><small>{bio}</small></p>
          </div>
        </div>}
      { !isLoading && error ? <span>Ошибка</span> :
        <ol className={styles.reposList}>
          <h3 className={styles.text}>Мои репозитории:</h3>
          {reposList.map((repos) => (
            <li key={repos.id}>
              <a href={repos.html_url} target='blank'>
                {repos.name}
              </a>
            </li>))}
        </ol>}
    </CardContent >
  );
};

export default About;
