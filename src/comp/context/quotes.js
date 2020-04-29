const Quotes = () => {
  const quotes = ["Knowing you're different is only the beginning. ..."];

  const random = Math.floor(Math.random() * quotes.length);

  return quotes[random];
};

export default Quotes;
