export function UncontrolledForm() {
  function onLogin(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const session = event.target.elements.namedItem("session").checked;

    const data = {
      username,
      password,
      session,
    };

    console.log(data);
  }

  function loginWithFormData(event) {
    const formData = new FormData(event.target);
    const dataForm = {
    username: formData.get("username"),
    password: formData.get("password"),
    session: formData.get("session") === "on" ? true : false,
    };

    console.log(dataForm);
    
    }

  return (
    <form onSubmit={onLogin}>
      <input name="username" />
      <input name="password" type="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button onClick={loginWithFormData}>login con formdata</button>
      <button type="reset">reset</button>
    </form>
  );
}
