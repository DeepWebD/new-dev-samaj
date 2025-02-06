export const showPublicChrome = (path) => {
  console.log("path------->", path);
  if (path == "/login") return false;

  return true;
};
