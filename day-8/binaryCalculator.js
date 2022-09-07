btnClr.addEventListener("click", () => {
  res.innerHTML = "";
});

btn0.addEventListener("click", () => {
  res.innerHTML += 0;
});

btn1.addEventListener("click", () => {
  res.innerHTML += 1;
});

// the 'g' modifier specifies a global match
// global match finds all matches (instead of first or last)
btnEql.addEventListener("click", () => {
  let result = res.innerHTML;
  result = Math.floor(eval(result.replace(/([01]+)/g, "0b$1"))).toString(2);
  res.innerHTML = result;
});

btnSum.addEventListener("click", () => {
  res.innerHTML += "+";
});

btnSub.addEventListener("click", () => {
  res.innerHTML += "-";
});

btnMul.addEventListener("click", () => {
  res.innerHTML += "*";
});

btnDiv.addEventListener("click", () => {
  res.innerHTML += "/";
});
