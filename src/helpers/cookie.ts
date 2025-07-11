export function getCookie(cname: string): string {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookie(cname: string, cvalue: string, exdays?: number) {
  const d = new Date();
  let expires: string = "expires=";
  if (exdays) {
    d.setTime(d.getTime() + (exdays || 0) * 24 * 60 * 60 * 1000);
    expires += d.toUTCString();
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(cname: string) {
  document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}
