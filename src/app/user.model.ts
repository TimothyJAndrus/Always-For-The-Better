export class User {
  constructor (
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public title: string,
    public image: string,
    public linkedin: string,
    public bio: string,
    public gender: string,
    public mentor: boolean,
    public mentee: boolean
  )
  { }
}
