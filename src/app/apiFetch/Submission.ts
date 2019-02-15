import { API_BASE_URL } from '../../config/config';

export const codeCompile = (commitHash = 'latest') => {
  return fetch(`${API_BASE_URL}simulate/compile`, {
    body: JSON.stringify({
      commitHash,
    }),
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};

export const executeSelfMatch = (mapId: number) => {
  return fetch(`${API_BASE_URL}simulate/match/self`, {
    body: JSON.stringify({
      mapId,
    }),
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};

export const executePreviousCommitMatch = (mapId: number) => {
  return fetch(`${API_BASE_URL}simulate/match/commit`, {
    body: JSON.stringify({
      mapId,
    }),
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};

export const lockCode = () => {
  return fetch(`${API_BASE_URL}code/lock`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};