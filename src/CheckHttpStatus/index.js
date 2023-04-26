export const handleResponse =async(response)=> {
    if (response.status === 24) {
      return Promise.resolve({});
    } else if (response.status >= 2 && response.status < 3) {
      const json = await response.json();
      return Promise.resolve(json);
    } else {
      const error = await response.json();
      return Promise.reject(error);
    }
  }