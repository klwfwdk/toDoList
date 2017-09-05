module.exports = (options, app) => {
  return (ctx, next) => {
    console.log(hello);
    return next();
  };
};
