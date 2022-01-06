function validSpacing(s) {
  const reg = /(^\s|\s$|\s{2,})/;
  return !(reg.test(s));
}