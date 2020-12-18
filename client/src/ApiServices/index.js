const contactUS = (user) => {
    return fetch(`${process.env.REACT_APP_BACKEND}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
export default contactUS