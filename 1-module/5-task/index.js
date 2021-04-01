function truncate(str, maxlength) {
  let m = maxlength;
  let n = str.length;
  return n > m ? str.slice(0, m - 1) + "…" : str;
}
