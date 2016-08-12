class User{
  firstName:  string;
  lastName: string;
  userName: string;
  email: string;

  constructor(firstName: string, lastName: string, userName: string, email: string){
    this.firstName = 'Jaime';
    this.lastName = 'Terrats';
    this.userName = 'Jimbo';
    this.email = 'jimbo@email.com';
  }

}
function showInfo(user: User){
  return 'Data found: ', '\nName: ' + user.firstName + ' ' + user.lastName + '\nUser Name: ' + user.userName +  '\nUser Email: ' +  user.email;
}

var newUser = new User('Juan', 'Perez', 'Juanito', 'juanito@test.com');

document.body.innerHTML = showInfo(newUser);
