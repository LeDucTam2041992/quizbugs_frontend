API - list: `http://localhost:8080`
- login: POST `/login`
- logout : GET `/users/logout`
- register: POST `/users`
- updateUser: PUT `/users/:id`

luu token:

`this.userService.doLogin(data).subscribe((response) => {
localStorage.setItem('token', response.Authorization);
}`

cach lay token:

`
token = localStorage.getItem('token');
`

bo sung header vao moi request:

`
headers_object = new HttpHeaders().set("Authorization", this.token);
httpOptions = {
 headers: this.headers_object
};
`
